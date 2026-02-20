# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (PWA disabled in dev)
npm run build    # Production build (Next.js + Serwist service worker)
npm run lint     # Run ESLint
npm start        # Start production server
```

**Icon regeneration** (run after changing `public/favicon.svg`):
```bash
bash scripts/generate-icons.sh
```
This uses macOS `qlmanage` + `sips` to generate all PNG icons from the SVG source.

## Architecture

### Data Flow

```
src/data/*.ts           → individual category flashcard arrays
src/data/questions.ts   → aggregates all categories into one array
src/context/FlashcardContext.tsx  → useReducer-based state (filtering, shuffle, navigation)
src/components/flashcard/  → presentational components consuming context
```

### State Management

`FlashcardContext` uses `useReducer` with actions: `NEXT_CARD`, `PREV_CARD`, `TOGGLE_ANSWER`, `HIDE_ANSWER`, `SET_CATEGORY`, `TOGGLE_SHUFFLE`. The context exposes `filteredCards` (memoized) which is either the category-filtered array or a shuffled version of it.

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

### Adding a New Category

1. Add the category string to the `Category` union in `src/types/flashcard.ts`
2. Add config (label, icon, color, bgColor) to `CATEGORY_CONFIG` in `src/lib/constants.ts`
3. Create a data file in `src/data/` and add it to `src/data/questions.ts`

### PWA / Service Worker

- Service worker source: `src/app/sw.ts` (Serwist)
- Built output: `public/sw.js` (generated, do not edit)
- Offline fallback: `src/app/~offline/page.tsx`
- PWA is disabled in `dev` mode — test PWA behavior with `build` + `start`
- Manifest: `src/app/manifest.ts`

### Icons & OG Image

- Source of truth: `public/favicon.svg` (orange `</>` icon)
- All PNGs are generated from this SVG via `scripts/generate-icons.sh`
- OG image source: `public/og-image.svg` → rendered to `public/og-image.png`
