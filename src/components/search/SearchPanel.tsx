"use client";

import { useMemo, useRef, useState, useEffect, useCallback } from "react";

import { Search, X } from "lucide-react";

import { CATEGORY_CONFIG } from "@/lib/constants";
import { useFlashcard } from "@/context/FlashcardContext";
import type { Category, Flashcard } from "@/types/flashcard";

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cards: Flashcard[];
}

export function SearchPanel({ isOpen, onClose, cards }: SearchPanelProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const { navigateToCard } = useFlashcard();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return cards.filter((c) => c.question.toLowerCase().includes(trimmed));
  }, [query, cards]);

  // 닫을 때 상태 초기화를 이벤트 핸들러에서 처리
  const handleClose = useCallback(() => {
    setQuery("");
    setActiveIndex(-1);
    onClose();
  }, [onClose]);

  const handleSelect = useCallback(
    (cardId: number, category: Category) => {
      navigateToCard(cardId, category);
      handleClose();
    },
    [navigateToCard, handleClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (results.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = prev < results.length - 1 ? prev + 1 : 0;
            // 활성 항목이 보이도록 스크롤
            listRef.current?.children[next]?.scrollIntoView({ block: "nearest" });
            return next;
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = prev > 0 ? prev - 1 : results.length - 1;
            listRef.current?.children[next]?.scrollIntoView({ block: "nearest" });
            return next;
          });
          break;
        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < results.length) {
            handleSelect(results[activeIndex].id, results[activeIndex].category);
          }
          break;
      }
    },
    [results, activeIndex, handleSelect, handleClose]
  );

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-white dark:bg-neutral-900">
      {/* 검색 입력 */}
      <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3 dark:border-neutral-800">
        <Search size={18} className="shrink-0 text-neutral-400 dark:text-neutral-500" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="질문 검색"
          className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 outline-none dark:text-neutral-100 dark:placeholder-neutral-500"
        />
        <button
          type="button"
          onClick={handleClose}
          className="shrink-0 cursor-pointer rounded-lg p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
          aria-label="검색 닫기"
        >
          <X size={18} />
        </button>
      </div>

      {/* 검색 결과 */}
      <div className="flex-1 overflow-y-auto">
        {query.trim() === "" ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              검색어를 입력하세요
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <ul ref={listRef} className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {results.map((card, index) => {
              const config = CATEGORY_CONFIG[card.category];
              const isActive = index === activeIndex;
              return (
                <li key={`${card.category}-${card.id}`}>
                  <button
                    type="button"
                    onClick={() => handleSelect(card.id, card.category)}
                    className={`flex w-full cursor-pointer items-start gap-3 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-800"
                        : "hover:bg-neutral-50 active:bg-neutral-100 dark:hover:bg-neutral-800 dark:active:bg-neutral-700"
                    }`}
                  >
                    <span className="flex-1 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                      {card.question}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${config.color} ${config.bgColor}`}
                    >
                      {config.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
