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
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800">
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
            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <p
                className={`whitespace-pre-line leading-relaxed text-gray-600 dark:text-gray-300 ${preset.answerClass}`}
              >
                {card.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={onToggleAnswer}
        className="mt-auto w-full rounded-xl bg-blue-50 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
      >
        {isAnswerRevealed ? "답변 숨기기" : "답변 보기"}
      </button>
    </div>
  );
}
