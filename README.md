# 🎮 반곡초등학교 바이브코딩 저장소

반곡초등학교 친구들이 **AI와 대화만으로 만든 HTML 게임 18개**를 모아 놓은 곳이에요.

코딩을 한 줄도 몰라도 괜찮아요. "이렇게 만들어줘"라고 말로 부탁하면 AI가 코드를 써 주고,
친구들은 화면을 보면서 "여긴 이렇게 바꿔줘"라고 다시 말해요. 이런 방식을 **바이브코딩**이라고 불러요.

게임은 모두 **HTML 파일 하나**로 되어 있어서, 파일을 더블클릭하면 바로 플레이할 수 있어요. 🕹️

👉 저장소 주소: https://github.com/kwonjungu/ban12

---

## 🗂️ 사이트 구조 (탭 3개)

`index.html` 을 열면 위쪽에 탭 3개가 있어요.

| 탭 | 내용 |
| --- | --- |
| 🕹️ **게임 저장소** | 친구들이 만든 게임 18개가 카드로 쭉 보여요. 카드를 누르면 게임이 새 창에서 열려요. 카드 그림은 진짜 게임 화면을 작게 보여주는 미리보기예요. |
| 💬 **프롬프트 저장소** | 게임을 만들 때 AI에게 실제로 했던 말(프롬프트)을 모아 뒀어요. 1~7단계를 순서대로 따라 하면 나도 똑같은 게임을 만들 수 있어요. 게임이 안 될 때 쓰는 "고쳐 달라고 말하는 법", 그리고 **다음에 만들면 재미있을 게임 아이디어 9개**(첫 프롬프트까지 적혀 있어요)도 여기 있어요. |
| 🌱 **추가 개발 예정** | **아직 비어 있는 탭이에요.** 오늘 수업에서 만든 게임을 하나씩 여기에 채워 갈 거예요. |

---

## 📁 폴더 구조

```
bangok-vibe-coding/
├── index.html            ← 메인 페이지 (탭 3개가 여기 다 들어 있어요)
├── README.md             ← 지금 읽고 있는 파일
├── .nojekyll             ← GitHub Pages 설정용 (비어 있는 파일, 지우지 마세요)
├── .gitignore
├── assets/               ← 카드 배경으로 쓰는 캐릭터 그림 8장
│   ├── char-apple.jpg
│   ├── char-banana.jpg
│   ├── char-girl.jpg
│   ├── char-greenboy.jpg
│   ├── char-neon.jpg
│   ├── char-penguin.jpg
│   ├── char-redpanda.jpg
│   └── char-schoolgirl.jpg
└── games/                ← 게임 18개 (HTML 파일 하나 = 게임 하나)
    ├── 3d-healthy-snack-bear.html
    ├── 3d-catch-food.html
    ├── 3d-bear-snack-collect.html
    ├── healthy-snack-canvas.html
    ├── space-egg.html
    ├── colorful-stage-snack.html
    ├── healthy-snack-apple-bear.html
    ├── yummy-catch.html
    ├── healthy-snack-basket-1.html
    ├── healthy-snack-basket-2.html
    ├── green-kitchen-basket.html
    ├── food-basket-basic.html
    ├── kitchen-food-catch.html
    ├── green-kitchen-cooking-catch.html
    ├── cozy-kitchen-basket.html
    ├── yummy-catch-basket.html
    ├── food-catch-basket.html
    └── pretty-kitchen-basket.html
```

---

## 💻 내 컴퓨터에서 보는 법

### 방법 1. 게임 하나만 해 보기 (제일 쉬움)

`games/` 폴더에서 원하는 HTML 파일을 **더블클릭**하세요. 바로 게임이 시작돼요. ✅

### 방법 2. 메인 페이지까지 제대로 보기 (권장 👍)

`index.html` 을 그냥 더블클릭해도 열리기는 해요.
하지만 카드의 **미리보기 화면이 안 보일 수 있어요.**
`file://` 로 열면 브라우저가 안전을 위해 미리보기(iframe) 불러오기를 막기 때문이에요.

그래서 아래처럼 **작은 서버를 켜서** 보는 걸 추천해요. (파이썬만 있으면 돼요)

1. `bangok-vibe-coding` 폴더에서 터미널(명령 프롬프트)을 열어요.
2. 아래 명령어를 입력하고 엔터!

```bash
python -m http.server 8000
```

> 윈도우에서 `python` 이 안 되면 `py -m http.server 8000` 을 써 보세요.
> 파이썬이 아예 없다면 아래 중 아무거나 써도 똑같아요.
> - VS Code 확장 **Live Server** 설치 → `index.html` 우클릭 → *Open with Live Server*
> - Node.js 가 있다면: `npx serve .`

3. 브라우저 주소창에 아래 주소를 넣어요.

```
http://localhost:8000
```

4. 끝낼 때는 터미널에서 `Ctrl + C` 를 누르세요. 🙂

> 💡 **가장 확실한 방법은 GitHub Pages 주소로 보는 것**이에요. 아래 "GitHub Pages 로 공개하기"를 보세요.

---

## 🌐 GitHub Pages 로 공개하기

인터넷 주소를 만들어서 누구나 볼 수 있게 하는 방법이에요.

1. GitHub 저장소(https://github.com/kwonjungu/ban12)로 들어가요.
2. 위쪽 메뉴에서 **Settings** 를 눌러요.
3. 왼쪽 메뉴에서 **Pages** 를 눌러요.
4. **Source** 를 `Deploy from a branch` 로 둬요.
5. **Branch** 를 `main` 으로, 폴더는 `/ (root)` 로 고르고 **Save** 를 눌러요.
6. 1~2분 정도 기다리면 주소가 나와요.

```
https://kwonjungu.github.io/ban12/
```

📌 `.nojekyll` 파일이 꼭 있어야 해요. 이 파일이 없으면 GitHub Pages 가 밑줄(`_`)로 시작하는 파일을 무시해 버릴 수 있어요. 비어 있는 파일이지만 지우면 안 돼요!

---

## ➕ 새 게임 추가하는 법

새로 만든 게임을 목록에 올리는 방법이에요. **딱 두 단계**예요.

### 1단계. 게임 파일 넣기

만든 HTML 파일을 `games/` 폴더에 넣어요.

- 파일 이름은 **영어 소문자와 하이픈(-)** 으로 지어 주세요. (예: `my-new-game.html`)
- 한글이나 띄어쓰기가 들어간 이름은 인터넷 주소에서 문제가 생길 수 있어요.

### 2단계. `index.html` 의 `GAMES` 배열에 한 줄 추가

`index.html` 을 열어서 `const GAMES = [` 를 찾아요. (400번째 줄 근처예요)
그 목록 안에 아래처럼 **한 줄만** 추가하면 끝이에요.

```js
const GAMES = [
  // ...기존 게임들...
  {f:'pretty-kitchen-basket.html',      t:'예쁜 주방 건강 간식 받기',      d:'통통 튀며 건강 간식 모으기',        c:'← → 이동 · 드래그', k:'2d', g:'b', e:'✨'},

  // 👇 여기에 새 게임을 추가!
  {f:'my-new-game.html',                t:'내가 만든 새 게임',             d:'한 줄로 설명을 적어요',             c:'← → 이동 · 스페이스 시작', k:'2d', g:'b', e:'🎈'}
];
```

각 글자의 뜻은 이래요.

| 항목 | 뜻 | 예시 |
| --- | --- | --- |
| `f` | **f**ile — `games/` 폴더 안의 파일 이름 | `'my-new-game.html'` |
| `t` | **t**itle — 카드에 크게 보일 게임 제목 | `'내가 만든 새 게임'` |
| `d` | **d**escription — 한 줄 설명 | `'하늘에서 별을 받아요'` |
| `c` | **c**ontrols — 조작법 한 줄 (카드 아래에 작게 나와요) | `'← → 이동 · 스페이스 시작'` |
| `k` | **k**ind — 종류. `'2d'` / `'3d'` / `'canvas'` 중 하나 | `'2d'` |
| `g` | **g**roup — 묶음. `'a'` 또는 `'b'` | `'b'` |
| `e` | **e**moji — 제목 앞에 붙는 이모지 하나 | `'🎈'` |

⚠️ 주의할 점

- 줄 끝의 **쉼표(,)** 를 빠뜨리지 마세요. 마지막 줄에는 쉼표를 안 붙여요.
- 작은따옴표(`'`)로 감싸는 걸 잊지 마세요.
- 게임 개수가 늘어나면 화면 위쪽의 숫자 `18` 도 함께 바꿔 주면 더 좋아요.
  (`<div class="stat"><b>18</b><span>GAMES</span></div>` 와 탭의 `<span class="n">18</span>`)
- 카드 배경 그림은 순서대로 자동으로 정해지니까 따로 준비하지 않아도 돼요. 😀

수정한 뒤에는 GitHub 에 올리면(push) 몇 분 안에 웹사이트에도 새 게임이 나타나요!

---

## 🤝 만든 사람들

반곡초등학교 친구들 + AI 🤖

작은 아이디어 하나가 진짜 게임이 되는 걸 함께 경험했어요.
다음 게임도 기대해 주세요! 🌱
