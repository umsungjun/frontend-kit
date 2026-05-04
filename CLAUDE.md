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

### Adding Flashcard Questions

Add entries to the relevant file in `src/data/`. Each card follows:

```typescript
{ id: number, category: Category, question: string, answer: string }
```

IDs must be unique within the file. `questions.ts` auto-includes the new data via spread.

**질문 출처:** [prepare_frontend_interview](https://github.com/junh0328/prepare_frontend_interview), [maeil-mail-contents](https://github.com/maeil-mail/maeil-mail-contents)

**현재 카드 수 (파일별 max ID):**

| 파일                         | 카테고리   | 카드 수 |
| ---------------------------- | ---------- | ------- |
| `src/data/cs.ts`             | CS         | 95      |
| `src/data/javascript.ts`     | JavaScript | 92      |
| `src/data/react.ts`          | React      | 66      |
| `src/data/html-css.ts`       | HTML/CSS   | 53      |
| `src/data/build-tools.ts`    | 빌드도구   | 30      |
| `src/data/typescript.ts`     | TypeScript | 26      |
| `src/data/algorithm.ts`      | 알고리즘   | 26      |
| `src/data/data-structure.ts` | 자료구조   | 11      |

**카드 작성 컨벤션:** `.claude/agents/flashcard-writer.md` 에이전트 참고

- 질문: 구어체 한국어, `~나요?/~가요?/~뭔가요?` 형식
- 답변: 자연스러운 산문체, AI 문체 안티패턴 회피 (`.claude/rules/flashcard-conventions.md` 참고)
- `src/data/*.ts` 수정 시 AI 문체 자동 점검 훅 실행 (`.claude/hooks/check-flashcard-style.sh`)

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
