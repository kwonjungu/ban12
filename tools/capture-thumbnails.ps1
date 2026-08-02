<#
.SYNOPSIS
  게임을 실제로 실행해서 플레이 화면을 찍고 assets/shots/ 에 썸네일로 저장합니다.

.DESCRIPTION
  Windows에 기본 설치된 Microsoft Edge를 헤드리스로 띄워서 캡처합니다.
  별도 설치(Node, Python, Playwright)가 필요 없습니다.

  게임 원본은 절대 건드리지 않습니다. 임시 폴더에 사본을 만들고,
  그 사본에만 tools/auto-start.html 을 주입해서 게임을 자동으로 시작시킨 뒤 촬영합니다.

.PARAMETER Only
  특정 게임만 다시 찍을 때 파일 이름(확장자 제외)을 줍니다. 여러 개 가능.
  예: -Only my-new-game
      -Only my-new-game, another-game

.PARAMETER Dir
  games 또는 examples 만 찍을 때 지정합니다. 생략하면 둘 다.

.PARAMETER NoAutoStart
  자동 시작을 하지 않고 시작 화면 그대로 찍습니다.

.EXAMPLE
  # 전체 다시 찍기
  .\tools\capture-thumbnails.ps1

.EXAMPLE
  # 방금 추가한 게임 하나만 찍기
  .\tools\capture-thumbnails.ps1 -Only my-new-game
#>
[CmdletBinding()]
param(
  [string[]] $Only,
  [ValidateSet('games', 'examples')] [string] $Dir,
  [switch] $NoAutoStart,
  [int] $Budget = 5000,
  [int] $Quality = 78
)

$ErrorActionPreference = 'Continue'
Add-Type -AssemblyName System.Drawing

# ── 경로 ──────────────────────────────────────────────
$root = Split-Path -Parent $PSScriptRoot
$out  = Join-Path $root 'assets\shots'
$work = Join-Path $env:TEMP 'bangok-shots'
$stage = Join-Path $work 'stage'
$raws  = Join-Path $work 'raw'
$prof  = Join-Path $work 'edge-profile'
New-Item -ItemType Directory -Force $out, $stage, $raws, $prof | Out-Null

# ── Edge 찾기 ─────────────────────────────────────────
$edge = @(
  "$env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

if (-not $edge) {
  Write-Error "Microsoft Edge를 찾지 못했습니다. Chrome 경로로 바꿔서 쓰셔도 됩니다."
  exit 1
}

# ── 자동 시작 스크립트 ────────────────────────────────
$injectPath = Join-Path $PSScriptRoot 'auto-start.html'
$inject = if ($NoAutoStart -or -not (Test-Path $injectPath)) { '' }
          else { [System.IO.File]::ReadAllText($injectPath) }

# ── JPEG 인코더 ───────────────────────────────────────
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
         Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter `
               ([System.Drawing.Imaging.Encoder]::Quality), ([long]$Quality)

# ── 대상 수집 ─────────────────────────────────────────
$dirs = if ($Dir) { @($Dir) } else { @('games', 'examples') }
$targets = @()
foreach ($d in $dirs) {
  $p = Join-Path $root $d
  if (-not (Test-Path $p)) { continue }
  Get-ChildItem $p -Filter *.html | ForEach-Object {
    if ($Only -and ($Only -notcontains $_.BaseName)) { return }
    $targets += [pscustomobject]@{ Dir = $d; Name = $_.BaseName; Path = $_.FullName }
  }
}

if (-not $targets) { Write-Warning "찍을 게임이 없습니다."; exit 0 }
Write-Host "대상 $($targets.Count)개 · 자동시작 $(if ($inject) { 'ON' } else { 'OFF' })`n"

# ── 캡처 ──────────────────────────────────────────────
$i = 0; $ok = 0; $fail = @()
foreach ($t in $targets) {
  $i++
  $key = "$($t.Dir)__$($t.Name)"

  # 1) 사본에 자동 시작 스크립트 주입 (원본은 그대로)
  $src = [System.IO.File]::ReadAllText($t.Path)
  if ($inject) {
    $at = $src.LastIndexOf('</body>')
    if ($at -lt 0) { $at = $src.LastIndexOf('</html>') }
    $src = if ($at -lt 0) { $src + $inject }
           else { $src.Substring(0, $at) + $inject + $src.Substring($at) }
  }
  $sf = Join-Path $stage "$key.html"
  [System.IO.File]::WriteAllText($sf, $src, (New-Object System.Text.UTF8Encoding $false))

  # 2) Edge 헤드리스로 촬영
  $raw = Join-Path $raws "$key.png"
  if (Test-Path $raw) { Remove-Item -LiteralPath $raw -Force }

  $args = @(
    '--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--mute-audio',
    '--enable-unsafe-swiftshader', '--use-gl=swiftshader', '--disable-dev-shm-usage',
    "--user-data-dir=$prof",
    '--window-size=1280,800', "--virtual-time-budget=$Budget",
    "--screenshot=$raw",
    ("file:///" + ($sf -replace '\\', '/'))
  )
  $p = Start-Process -FilePath $edge -ArgumentList $args -PassThru -WindowStyle Hidden
  if (-not $p.WaitForExit(45000)) { try { $p.Kill() } catch {} }
  Start-Sleep -Milliseconds 350

  if (-not (Test-Path $raw)) {
    Write-Host ("[{0}/{1}] FAIL  {2}" -f $i, $targets.Count, $key) -ForegroundColor Red
    $fail += $key; continue
  }

  # 3) 640x400 JPEG 로 축소
  try {
    $img = [System.Drawing.Image]::FromFile($raw)
    $bmp = New-Object System.Drawing.Bitmap 640, 400
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = 'HighQualityBicubic'
    $g.SmoothingMode     = 'HighQuality'
    $g.PixelOffsetMode   = 'HighQuality'
    $g.DrawImage($img, 0, 0, 640, 400)
    $jpg = Join-Path $out "$key.jpg"
    $bmp.Save($jpg, $codec, $ep)
    $g.Dispose(); $bmp.Dispose(); $img.Dispose()
    $ok++
    Write-Host ("[{0}/{1}] OK    {2}  {3}KB" -f $i, $targets.Count, $key, [int]((Get-Item $jpg).Length / 1KB)) -ForegroundColor Green
  } catch {
    Write-Host ("[{0}/{1}] 변환실패 {2} :: {3}" -f $i, $targets.Count, $key, $_) -ForegroundColor Red
    $fail += $key
  }
}

Write-Host "`n완료: 성공 $ok / 전체 $($targets.Count)"
if ($fail) { Write-Host "실패: $($fail -join ', ')" -ForegroundColor Yellow }
Write-Host "저장 위치: $out"
