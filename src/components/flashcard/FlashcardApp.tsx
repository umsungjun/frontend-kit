"use client";

import { useState } from "react";

import { FlashcardProvider } from "@/context/FlashcardContext";
import { flashcards } from "@/data/questions";
import { useFontSize } from "@/hooks/useFontSize";
import { AIChatPanel } from "../ai/AIChatPanel";

import { Header } from "../layout/Header";
import { MobileContainer } from "../layout/MobileContainer";
import { SettingsPanel } from "../layout/SettingsPanel";
import { CategoryFilter } from "./CategoryFilter";
import { FlashcardDeck } from "./FlashcardDeck";
import { NavigationControls } from "./NavigationControls";

export function FlashcardApp() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { fontSize, setFontSize } = useFontSize();

  return (
    <MobileContainer>
      <FlashcardProvider cards={flashcards}>
        <Header
          onSettingsToggle={() => {
            setIsSettingsOpen((prev) => !prev);
            setIsChatOpen(false);
          }}
          isSettingsOpen={isSettingsOpen}
          onChatToggle={() => {
            setIsChatOpen((prev) => !prev);
            setIsSettingsOpen(false);
          }}
          isChatOpen={isChatOpen}
        />
        <SettingsPanel
          isOpen={isSettingsOpen}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
        />
        <CategoryFilter />
        <FlashcardDeck fontSize={fontSize} />
        <NavigationControls />
        <footer className="flex items-center justify-center gap-3 border-t border-neutral-100 px-5 py-3 dark:border-neutral-800">
          <a
            href="https://github.com/umsungjun"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xs text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
          >
            GitHub
          </a>
          <span className="text-neutral-200 dark:text-neutral-700">·</span>
          <a
            href="https://www.linkedin.com/in/frontend-developer-umsungjun/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xs text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
          >
            LinkedIn
          </a>
          <span className="text-neutral-200 dark:text-neutral-700">·</span>
          <a
            href="mailto:umseongjun@naver.com"
            className="cursor-pointer text-xs text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300"
          >
            umseongjun@naver.com
          </a>
        </footer>
        {/* AI 채팅 패널 (FlashcardProvider 내부에서 useFlashcard 사용) */}
        <AIChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </FlashcardProvider>
    </MobileContainer>
  );
}
