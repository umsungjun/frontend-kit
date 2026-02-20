"use client";

import { useState } from "react";

import { FlashcardProvider } from "@/context/FlashcardContext";
import { flashcards } from "@/data/questions";
import { useFontSize } from "@/hooks/useFontSize";

import { Header } from "../layout/Header";
import { MobileContainer } from "../layout/MobileContainer";
import { SettingsPanel } from "../layout/SettingsPanel";
import { CategoryFilter } from "./CategoryFilter";
import { FlashcardDeck } from "./FlashcardDeck";
import { NavigationControls } from "./NavigationControls";

export function FlashcardApp() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { fontSize, setFontSize } = useFontSize();

  return (
    <MobileContainer>
      <FlashcardProvider cards={flashcards}>
        <Header
          onSettingsToggle={() => setIsSettingsOpen((prev) => !prev)}
          isSettingsOpen={isSettingsOpen}
        />
        <SettingsPanel
          isOpen={isSettingsOpen}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
        />
        <CategoryFilter />
        <FlashcardDeck fontSize={fontSize} />
        <NavigationControls />
      </FlashcardProvider>
    </MobileContainer>
  );
}
