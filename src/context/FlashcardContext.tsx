"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import { shuffle } from "@/lib/shuffle";
import type { Category, Flashcard } from "@/types/flashcard";

interface FlashcardState {
  currentIndex: number;
  isAnswerRevealed: boolean;
  direction: "left" | "right";
  selectedCategory: Category | "all";
  isShuffled: boolean;
  shuffledCards: Flashcard[];
}

type FlashcardAction =
  | { type: "NEXT_CARD" }
  | { type: "PREV_CARD" }
  | { type: "TOGGLE_ANSWER" }
  | { type: "HIDE_ANSWER" }
  | { type: "SET_CATEGORY"; category: Category | "all" }
  | { type: "TOGGLE_SHUFFLE" }
  | { type: "NAVIGATE_TO_CARD"; cardId: number; category: Category };

interface FlashcardContextValue {
  state: FlashcardState;
  filteredCards: Flashcard[];
  currentCard: Flashcard | null;
  totalCards: number;
  dispatch: React.Dispatch<FlashcardAction>;
  nextCard: () => void;
  prevCard: () => void;
  toggleAnswer: () => void;
  setCategory: (category: Category | "all") => void;
  toggleShuffle: () => void;
  navigateToCard: (cardId: number, category: Category) => void;
}

const FlashcardContext = createContext<FlashcardContextValue | null>(null);

function createReducer(allCards: Flashcard[]) {
  return function reducer(
    state: FlashcardState,
    action: FlashcardAction
  ): FlashcardState {
    const cards = getFilteredCards(
      allCards,
      state.selectedCategory,
      state.isShuffled,
      state.shuffledCards
    );
    const total = cards.length;

    switch (action.type) {
      case "NEXT_CARD":
        return {
          ...state,
          currentIndex: (state.currentIndex + 1) % total,
          isAnswerRevealed: false,
          direction: "left",
        };
      case "PREV_CARD":
        return {
          ...state,
          currentIndex: (state.currentIndex - 1 + total) % total,
          isAnswerRevealed: false,
          direction: "right",
        };
      case "TOGGLE_ANSWER":
        return { ...state, isAnswerRevealed: !state.isAnswerRevealed };
      case "HIDE_ANSWER":
        return { ...state, isAnswerRevealed: false };
      case "SET_CATEGORY": {
        const newFiltered = getFilteredCards(
          allCards,
          action.category,
          state.isShuffled,
          state.shuffledCards
        );
        return {
          ...state,
          selectedCategory: action.category,
          currentIndex: 0,
          isAnswerRevealed: false,
          shuffledCards: state.isShuffled ? shuffle(newFiltered) : [],
        };
      }
      case "TOGGLE_SHUFFLE": {
        const nowShuffled = !state.isShuffled;
        const filtered = allCards.filter(
          (c) =>
            state.selectedCategory === "all" ||
            c.category === state.selectedCategory
        );
        return {
          ...state,
          isShuffled: nowShuffled,
          shuffledCards: nowShuffled ? shuffle(filtered) : [],
          currentIndex: 0,
          isAnswerRevealed: false,
        };
      }
      case "NAVIGATE_TO_CARD": {
        // category + id 복합 키로 카드 탐색 (셔플 해제 + "전체" 전환)
        const targetIndex = allCards.findIndex(
          (c) => c.id === action.cardId && c.category === action.category
        );
        return {
          ...state,
          selectedCategory: "all",
          isShuffled: false,
          shuffledCards: [],
          currentIndex: targetIndex >= 0 ? targetIndex : 0,
          isAnswerRevealed: false,
        };
      }
      default:
        return state;
    }
  };
}

function getFilteredCards(
  allCards: Flashcard[],
  category: Category | "all",
  isShuffled: boolean,
  shuffledCards: Flashcard[]
): Flashcard[] {
  if (isShuffled && shuffledCards.length > 0) {
    return category === "all"
      ? shuffledCards
      : shuffledCards.filter((c) => c.category === category);
  }
  return category === "all"
    ? allCards
    : allCards.filter((c) => c.category === category);
}

interface FlashcardProviderProps {
  cards: Flashcard[];
  children: React.ReactNode;
}

export function FlashcardProvider({ cards, children }: FlashcardProviderProps) {
  const reducer = useMemo(() => createReducer(cards), [cards]);

  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    isAnswerRevealed: false,
    direction: "left" as const,
    selectedCategory: "all" as const,
    isShuffled: false,
    shuffledCards: [],
  });

  // SSR hydration 이후 랜덤 모드 활성화 (Math.random은 서버/클라이언트 결과가 다름)
  useEffect(() => {
    dispatch({ type: "TOGGLE_SHUFFLE" });
  }, []);

  const filteredCards = useMemo(
    () =>
      getFilteredCards(
        cards,
        state.selectedCategory,
        state.isShuffled,
        state.shuffledCards
      ),
    [cards, state.selectedCategory, state.isShuffled, state.shuffledCards]
  );

  const currentCard = filteredCards[state.currentIndex] ?? null;
  const totalCards = filteredCards.length;

  const nextCard = useCallback(() => dispatch({ type: "NEXT_CARD" }), []);
  const prevCard = useCallback(() => dispatch({ type: "PREV_CARD" }), []);
  const toggleAnswer = useCallback(
    () => dispatch({ type: "TOGGLE_ANSWER" }),
    []
  );
  const setCategory = useCallback(
    (category: Category | "all") => dispatch({ type: "SET_CATEGORY", category }),
    []
  );
  const toggleShuffle = useCallback(
    () => dispatch({ type: "TOGGLE_SHUFFLE" }),
    []
  );
  const navigateToCard = useCallback(
    (cardId: number, category: Category) =>
      dispatch({ type: "NAVIGATE_TO_CARD", cardId, category }),
    []
  );

  const value = useMemo(
    () => ({
      state,
      filteredCards,
      currentCard,
      totalCards,
      dispatch,
      nextCard,
      prevCard,
      toggleAnswer,
      setCategory,
      toggleShuffle,
      navigateToCard,
    }),
    [
      state,
      filteredCards,
      currentCard,
      totalCards,
      nextCard,
      prevCard,
      toggleAnswer,
      setCategory,
      toggleShuffle,
      navigateToCard,
    ]
  );

  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
}

export function useFlashcard() {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error("useFlashcard must be used within a FlashcardProvider");
  }
  return context;
}
