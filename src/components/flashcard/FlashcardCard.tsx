"use client";

import { AnimatePresence, motion } from "motion/react";

import type { FontSizeKey } from "@/lib/constants";
import { FONT_SIZE_PRESETS } from "@/lib/constants";
import type { Flashcard } from "@/types/flashcard";

import { CategoryBadge } from "./CategoryBadge";

interface FlashcardCardProps {
  card: Flashcard;
  isAnswerRevealed: boolean;
  onToggleAnswer: () => void;
  fontSize: FontSizeKey;
}

export function FlashcardCard({
  card,
  isAnswerRevealed,
  onToggleAnswer,
  fontSize,
}: FlashcardCardProps) {
  const preset = FONT_SIZE_PRESETS[fontSize];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
      <CategoryBadge category={card.category} />

      <p className={`font-semibold leading-relaxed ${preset.questionClass}`}>
        {card.question}
      </p>

      <AnimatePresence>
        {isAnswerRevealed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-neutral-200 pt-4 dark:border-neutral-700">
              <p
                className={`whitespace-pre-line leading-relaxed text-neutral-600 dark:text-neutral-300 ${preset.answerClass}`}
              >
                {card.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onToggleAnswer}
        className="mt-auto w-full rounded-xl bg-neutral-100 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600 dark:active:bg-neutral-500"
      >
        {isAnswerRevealed ? "답변 숨기기" : "답변 보기"}
      </button>
    </div>
  );
}
