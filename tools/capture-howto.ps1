<#
.SYNOPSIS
  Captures real screenshots of this site (and one running game) for the
  how-to slides in assets/howto.
.DESCRIPTION
  Runs headless Microsoft Edge on a temporary copy placed in the repo root
  (so relative paths to games/ and assets/ keep working), clicks the requested
  tab, scrolls to the requested element, shoots and downsizes to JPEG.
#>
param(
  [string[]]$Only,
  [int]$Budget = 9000,
  [int]$Quality = 82
)

$ErrorActionPreference = 'Continue'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$out  = Join-Path $root 'assets\howto'
$work = Join-Path $env:TEMP 'vibe-howto'
$prof = Join-Path $work 'edge-profile'
New-Item -ItemType Directory -Force $out, $work, $prof | Out-Null

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1
if (-not $edge) { Write-Error "Microsoft Edge not found."; exit 1 }

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
         Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter `
               ([System.Drawing.Imaging.Encoder]::Quality), ([long]$Quality)

$autoStart = Join-Path $PSScriptRoot 'auto-start.html'

# Name / source page / tab to click / element to scroll to
$shots = @(
  [pscustomobject]@{ Name='site-home';    Src='index.html';               Tab='';        Scroll=0 },
  [pscustomobject]@{ Name='site-games';   Src='index.html';               Tab='games';   Scroll=1000 },
  [pscustomobject]@{ Name='site-prompts'; Src='index.html';               Tab='prompts'; Scroll=1250 },
  [pscustomobject]@{ Name='site-new';     Src='index.html';               Tab='new';     Scroll=1000 },
  [pscustomobject]@{ Name='game-play';    Src='games\whack-a-puppy.html'; Tab='';        Scroll=0 },
  [pscustomobject]@{ Name='ai-chat-1';    Src='tools\mock-ai-chat-1.html'; Tab='';       Scroll=0 },
  [pscustomobject]@{ Name='ai-chat-2';    Src='tools\mock-ai-chat-2.html'; Tab='';       Scroll=0 }
)
if ($Only) { $shots = $shots | Where-Object { $Only -contains $_.Name } }
if (-not $shots) { Write-Warning "Nothing to shoot."; exit 0 }

$i = 0; $fail = @()
foreach ($s in $shots) {
  $i++
  $srcHtml = [System.IO.File]::ReadAllText((Join-Path $root $s.Src))

  if ($s.Src -like 'tools*') {
    $inject = ''
  } elseif ($s.Src -like 'games*') {
    $inject = [System.IO.File]::ReadAllText($autoStart)
  } else {
    $inject = @"
<script>
(function(){
  function go(){
    try {
      var t = '$($s.Tab)';
      if (t) { var b = document.querySelector('.tabbtn[data-tab="' + t + '"]'); if (b) b.click(); }
      var y = $($s.Scroll);
      if (y) { setTimeout(function(){ setInterval(function(){ window.scrollTo(0, y); }, 120); }, 1500); }
    } catch (e) {}
  }
  if (document.readyState === 'complete') go(); else addEventListener('load', go);
})();
</script>
"@
  }

  $at = $srcHtml.LastIndexOf('</body>')
  if ($at -lt 0) { $at = $srcHtml.Length }
  $page = $srcHtml.Substring(0, $at) + $inject + $srcHtml.Substring($at)
  $tmp = Join-Path $root '_howto-shot.html'
  [System.IO.File]::WriteAllText($tmp, $page, (New-Object System.Text.UTF8Encoding $false))

  $raw = Join-Path $work "$($s.Name).png"
  if (Test-Path $raw) { Remove-Item -LiteralPath $raw -Force }

  $eargs = @(
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--mute-audio',
    '--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-dev-shm-usage',
    "--user-data-dir=$prof",
    '--window-size=1280,800', "--virtual-time-budget=$Budget",
    "--screenshot=$raw",
    ("file:///" + ($tmp -replace '\\', '/'))
  )
  $p = Start-Process -FilePath $edge -ArgumentList $eargs -PassThru -WindowStyle Hidden
  if (-not $p.WaitForExit(60000)) { try { $p.Kill() } catch {} }
  Start-Sleep -Milliseconds 350
  Remove-Item -LiteralPath $tmp -Force -ErrorAction SilentlyContinue

  if (-not (Test-Path $raw)) {
    Write-Host ("[{0}/{1}] FAIL  {2}" -f $i, $shots.Count, $s.Name) -ForegroundColor Red
    $fail += $s.Name; continue
  }

  try {
    $img = [System.Drawing.Image]::FromFile($raw)
    $bmp = New-Object System.Drawing.Bitmap 1000, 625
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = 'HighQualityBicubic'
    $g.SmoothingMode     = 'HighQuality'
    $g.PixelOffsetMode   = 'HighQuality'
    $g.DrawImage($img, 0, 0, 1000, 625)
    $jpg = Join-Path $out "$($s.Name).jpg"
    $bmp.Save($jpg, $codec, $ep)
    $g.Dispose(); $bmp.Dispose(); $img.Dispose()
    Write-Host ("[{0}/{1}] OK    {2}  ({3} KB)" -f $i, $shots.Count, $s.Name, [math]::Round((Get-Item $jpg).Length / 1KB)) -ForegroundColor Green
  } catch {
    Write-Host ("[{0}/{1}] ENCODE FAIL  {2}" -f $i, $shots.Count, $s.Name) -ForegroundColor Red
    $fail += $s.Name
  }
}
if ($fail) { Write-Host ("`nFailed: " + ($fail -join ', ')) -ForegroundColor Yellow }
