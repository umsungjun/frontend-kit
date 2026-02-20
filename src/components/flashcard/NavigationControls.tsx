"use client";

import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

import { useFlashcard } from "@/context/FlashcardContext";

export function NavigationControls() {
  const { state, totalCards, nextCard, prevCard, toggleShuffle } =
    useFlashcard();

  return (
    <div className="flex items-center justify-between px-5 py-4">
      <button
        onClick={prevCard}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        aria-label="이전 질문"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleShuffle}
          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
            state.isShuffled
              ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
              : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
          aria-label={state.isShuffled ? "순서대로 보기" : "랜덤으로 보기"}
        >
          <Shuffle size={18} />
        </button>

        <span className="min-w-[60px] text-center text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
          {totalCards > 0 ? `${state.currentIndex + 1} / ${totalCards}` : "0 / 0"}
        </span>
      </div>

      <button
        onClick={nextCard}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition-colors hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        aria-label="다음 질문"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
