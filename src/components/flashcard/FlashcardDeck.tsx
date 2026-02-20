"use client";

import { useEffect } from "react";

import { AnimatePresence, motion } from "motion/react";
import { useSwipeable } from "react-swipeable";

import type { FontSizeKey } from "@/lib/constants";
import { useFlashcard } from "@/context/FlashcardContext";

import { FlashcardCard } from "./FlashcardCard";

interface FlashcardDeckProps {
  fontSize: FontSizeKey;
}

const variants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "left" ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: "left" | "right") => ({
    x: direction === "left" ? -300 : 300,
    opacity: 0,
  }),
};

export function FlashcardDeck({ fontSize }: FlashcardDeckProps) {
  const { state, currentCard, nextCard, prevCard, toggleAnswer } =
    useFlashcard();

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    trackMouse: true,
    delta: 50,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        prevCard();
      } else if (e.key === "ArrowRight") {
        nextCard();
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleAnswer();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextCard, prevCard, toggleAnswer]);

  if (!currentCard) {
    return (
      <div className="flex flex-1 items-center justify-center px-5">
        <p className="text-neutral-500 dark:text-neutral-400">
          해당 카테고리에 질문이 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div {...handlers} className="flex-1 overflow-hidden px-5 pt-1 pb-4">
      <AnimatePresence mode="wait" custom={state.direction}>
        <motion.div
          key={currentCard.id}
          custom={state.direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <FlashcardCard
            card={currentCard}
            isAnswerRevealed={state.isAnswerRevealed}
            onToggleAnswer={toggleAnswer}
            fontSize={fontSize}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
