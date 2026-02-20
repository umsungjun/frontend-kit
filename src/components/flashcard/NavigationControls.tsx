"use client";

import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

import { useFlashcard } from "@/context/FlashcardContext";

export function NavigationControls() {
  const { state, totalCards, nextCard, prevCard, toggleShuffle } =
    useFlashcard();

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <button
        onClick={prevCard}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-label="이전 질문"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleShuffle}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
            state.isShuffled
              ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
              : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          }`}
          aria-label={state.isShuffled ? "순서대로 보기" : "랜덤으로 보기"}
        >
          <Shuffle size={18} />
        </button>

        <span className="min-w-[60px] text-center text-sm tabular-nums text-gray-500 dark:text-gray-400">
          {totalCards > 0 ? `${state.currentIndex + 1} / ${totalCards}` : "0 / 0"}
        </span>
      </div>

      <button
        onClick={nextCard}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        aria-label="다음 질문"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
