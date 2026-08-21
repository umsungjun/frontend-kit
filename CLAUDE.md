# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev         # Start development server (PWA disabled in dev)
pnpm build       # Production build (Next.js + Serwist service worker)
pnpm lint        # Run ESLint
pnpm start       # Start production server
```

## Architecture

### Data Flow

```
src/data/*.ts           → individual category flashcard arrays
src/data/questions.ts   → aggregates all categories into one array
src/context/FlashcardContext.tsx  → useReducer-based state (filtering, shuffle, navigation)
src/components/flashcard/  → presentational components consuming context
src/components/ui/MarkdownContent.tsx  → shared markdown renderer (answers + AI chat)
```

### State Management

`FlashcardContext` uses `useReducer` with actions: `NEXT_CARD`, `PREV_CARD`, `TOGGLE_ANSWER`, `HIDE_ANSWER`, `SET_CATEGORY`, `TOGGLE_SHUFFLE`, `NAVIGATE_TO_CARD`. The context exposes `filteredCards` (memoized) which is either the category-filtered array or a shuffled version of it.

Font size preference is persisted in localStorage via `useFontSize` → `useLocalStorage`.

### Key Conventions

- **Path alias:** `@/*` maps to `./src/*`
- **Styling:** Tailwind CSS v4 (PostCSS-first, no `tailwind.config.ts`). Dark mode via `dark:` variants. Neutral color palette throughout.
- **Imports:** Sorted by Prettier plugin — CSS → React/Next.js → `@/` absolute → third-party → relative.
- **Quotes:** Double quotes (Prettier config).
- **Buttons:** Always include `cursor-pointer` class.
- **마크다운 렌더링:** 카드 답변과 AI 응답은 모두 `MarkdownContent`(`src/components/ui/MarkdownContent.tsx`)로 렌더링합니다. `remark-breaks`로 단일 개행을 `<br>`로 유지하고, 원시 HTML은 AI 응답에서만 `allowRawHtml`로 허용합니다.

### Adding Flashcard Questions

Add entries to the relevant file in `src/data/`. Each card follows:

```typescript
{ id: number, category: Category, question: string, answer: string }
```

IDs must be unique within the file. `questions.ts` auto-includes the new data via spread.

**답변은 마크다운으로 렌더링됩니다.** 코드 예시는 ` ```js ` 펜스로, 태그·제네릭·식별자 표기는 백틱으로 감싸세요. `<head>`나 `<T>`처럼 백틱 없이 쓴 태그 표기는 원시 HTML로 파싱돼 화면에서 사라집니다. `__proto__`처럼 밑줄로 감싼 식별자는 볼드로 변환되므로 역시 백틱이 필요합니다.

**질문 출처:** [prepare_frontend_interview](https://github.com/junh0328/prepare_frontend_interview), [maeil-mail-contents](https://github.com/maeil-mail/maeil-mail-contents)

**현재 카드 수 (총 367장):**

| 파일                         | 카테고리   | 카드 수 |
| ---------------------------- | ---------- | ------- |
| `src/data/javascript.ts`     | JavaScript | 89      |
| `src/data/cs.ts`             | CS         | 80      |
| `src/data/react.ts`          | React      | 63      |
| `src/data/html-css.ts`       | HTML/CSS   | 52      |
| `src/data/build-tools.ts`    | 빌드도구   | 30      |
| `src/data/typescript.ts`     | TypeScript | 24      |
| `src/data/algorithm.ts`      | 알고리즘   | 17      |
| `src/data/data-structure.ts` | 자료구조   | 12      |

중복 정리 과정에서 카드를 제거해 **id에 결번이 있습니다.** id는 파일 내 고유 키일 뿐이라 연속성이 필요 없으므로, 새 카드는 해당 파일의 max ID + 1로 부여하세요.

**카테고리 경계 (중복 방지):**

- 번들러·트랜스파일러·패키지 매니저는 `build-tools.ts` (cs.ts에 두지 않음)
- 타입 시스템은 `typescript.ts` (cs.ts에 두지 않음)
- SEO·웹 성능 지표(LCP·FCP·Core Web Vitals)는 `html-css.ts` (react.ts에 두지 않음)
- `algorithm.ts`는 알고리즘 기법만, 자료구조는 `data-structure.ts`

**카드 작성 컨벤션:** `.claude/agents/flashcard-writer.md` 에이전트 참고
**기존 답변 다듬기:** `.claude/agents/flashcard-refiner.md` 에이전트 참고 — 정확성 검증 + 두괄식 암기 최적화 재작성 (내용 교정 허용)

- 질문: 구어체 한국어, `~나요?/~가요?/~뭔가요?` 형식. 명사형 종결(`SPA의 단점은?`) 금지
- 답변: 자연스러운 산문체, AI 문체 안티패턴 회피 (`.claude/rules/flashcard-conventions.md` 참고)
- `src/data/*.ts` 수정 시 AI 문체 자동 점검 훅 실행 (`.claude/hooks/check-flashcard-style.sh`)

**어투 기준:** 질문·답변 모두 [gn-voice](https://github.com/gongnyang/gn-voice) 규칙을 따릅니다. 전역 스킬로 설치되어 있고(`~/.claude/skills/gn-voice`), 상세 적용 범위는 `.claude/rules/flashcard-conventions.md`에 정리했습니다. 플래시카드는 학습용 설명문이라 gn-voice §3(장르 밖) 원칙에 따라 표면 규칙만 적용하고 리듬·인격 요소는 이식하지 않습니다. 핵심 금지 항목은 줄표(`—`), AI 정리 상투구(`결론적으로`·`정리하면`·`핵심은`), 개조식 명사종결, 이모지·초성체입니다.

**진행 중 작업:** 367장 전수 점검 체크리스트는 `.claude/flashcard-review.md`에 있습니다.

### Adding a New Category

1. Add the category string to the `Category` union in `src/types/flashcard.ts`
2. Add to `CATEGORIES` array and `CATEGORY_CONFIG` (label, icon, color, bgColor) in `src/lib/constants.ts`
3. Create a data file in `src/data/` and add it to `src/data/questions.ts`

### PWA / Service Worker

- Service worker source: `src/app/sw.ts` (Serwist)
- Built output: `public/sw.js` (generated, do not edit)
- Offline fallback: `src/app/~offline/page.tsx`
- PWA is disabled in `dev` mode — test PWA behavior with `build` + `start`
- Manifest: `src/app/manifest.ts`

### Icons & OG Image

- Source of truth: `public/favicon.svg` (orange `</>` icon)
- OG image source: `public/og-image.svg` → rendered to `public/og-image.png`

### AI Chat API

- Route: `src/app/api/chat/route.ts`
- Model: `gemma-4-31b-it` via `@google/genai` SDK (`GoogleGenAI`)
- Requires env var: `GEMINI_API_KEY`
- **주의:** Gemma 모델은 `systemInstruction` config 파라미터 미지원 → system prompt를 `contents` 배열 첫 번째 user/model turn으로 주입
- Hook: `src/hooks/useAIChat.ts` — localStorage로 메시지 저장, 최대 50개 유지
- 카드 컨텍스트(`cardContext`)가 전달되면 현재 플래시카드 내용을 system prompt에 포함
