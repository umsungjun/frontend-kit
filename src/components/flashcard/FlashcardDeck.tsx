"use client";

import { useEffect } from "react";

import { useFlashcard } from "@/context/FlashcardContext";
import type { FontSizeKey } from "@/lib/constants";

import { AnimatePresence, motion } from "motion/react";
import { useSwipeable } from "react-swipeable";

import { FlashcardCard } from "./FlashcardCard";

interface FlashcardDeckProps {
  fontSize: FontSizeKey;
  isChatOpen: boolean;
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

export function FlashcardDeck({ fontSize, isChatOpen }: FlashcardDeckProps) {
  const { state, currentCard, nextCard, prevCard, toggleAnswer } =
    useFlashcard();

  // 텍스트 드래그 선택 중에는 스와이프 무시
  const handleSwipe = (action: () => void) => () => {
    if (window.getSelection()?.toString()) return;
    action();
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipe(nextCard),
    onSwipedRight: handleSwipe(prevCard),
    trackMouse: true,
    delta: 50,
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // 채팅 패널이 열려 있으면 카드 네비게이션 무시
      if (isChatOpen) return;

      // input, textarea 등 입력 요소에 포커스 시 단축키 무시
      const el = e.target as HTMLElement;
      if (
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        el.isContentEditable
      )
        return;

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
  }, [nextCard, prevCard, toggleAnswer, isChatOpen]);

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
          key={`${currentCard.category}-${currentCard.id}`}
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
