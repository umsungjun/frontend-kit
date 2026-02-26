"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Send, Sparkles, Trash2, X } from "lucide-react";

import { useAIChat } from "@/hooks/useAIChat";
import { useFontSize } from "@/hooks/useFontSize";
import type { FontSizeKey } from "@/lib/constants";
import { FONT_SIZE_PRESETS } from "@/lib/constants";
import { useFlashcard } from "@/context/FlashcardContext";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";

import { AIChatMessage } from "./AIChatMessage";

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const { currentCard } = useFlashcard();
  const { fontSize } = useFontSize();
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    clearError,
  } = useAIChat();
  const [input, setInput] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const MAX_INPUT = 500;

  const preset = FONT_SIZE_PRESETS[fontSize as FontSizeKey];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }, 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(clearError, 6000);
    return () => clearTimeout(timer);
  }, [error, clearError]);

  const handleSend = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const text = input;
    setInput("");

    const cardContext = currentCard
      ? { question: currentCard.question, answer: currentCard.answer }
      : undefined;

    await sendMessage(text, cardContext);
  };

  // 한글 IME 조합 중 Enter 방지
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleConfirmClear = () => {
    clearMessages();
    setShowConfirm(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 z-50 flex flex-col bg-neutral-50 dark:bg-neutral-950"
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)" }}
              >
                <Sparkles size={15} strokeWidth={1.5} />
              </span>
              <span className="text-base font-semibold">AI 질문하기</span>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={() => setShowConfirm(true)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                  aria-label="대화 기록 삭제"
                >
                  <Trash2 size={17} />
                </button>
              )}
              <button
                onClick={onClose}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                aria-label="닫기"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* 현재 카드 컨텍스트 배지 */}
          {currentCard && (
            <div className="border-b border-neutral-200 bg-blue-50 px-5 py-2.5 dark:border-neutral-800 dark:bg-blue-950/30">
              <p className="line-clamp-1 text-xs text-blue-600 dark:text-blue-400">
                <span className="font-medium">현재 카드:</span>{" "}
                {currentCard.question}
              </p>
            </div>
          )}

          {/* 메시지 영역 */}
          <div className="relative flex-1 overflow-y-auto">
            <div className="relative p-4">
              {/* 메시지 없을 때 중앙 안내 */}
              {messages.length === 0 && !isLoading && (
                <div className="flex h-48 flex-col items-center justify-center gap-3 text-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)",
                    }}
                  >
                    <Sparkles size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className={`font-medium text-neutral-700 dark:text-neutral-300 ${preset.answerClass}`}
                    >
                      무엇이든 질문해 보세요!
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      개념, 예시, 심화 내용 등을 물어보세요.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {messages.map((msg) => (
                  <AIChatMessage
                    key={msg.id}
                    message={msg}
                    fontSize={fontSize as FontSizeKey}
                  />
                ))}

                {/* AI 응답 로딩 인디케이터 */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-2.5 rounded-2xl rounded-tl-sm border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800">
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        답변 생성 중
                      </span>
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="inline-block h-2 w-2 animate-bounce rounded-full"
                            style={{
                              animationDelay: `${i * 0.18}s`,
                              background:
                                i === 0
                                  ? "#8b5cf6"
                                  : i === 1
                                    ? "#ec4899"
                                    : "#f97316",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* 에러 메시지 */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="bg-red-50 px-5 py-2.5 text-xs text-red-600 dark:bg-red-950/30 dark:text-red-400">
                  {error}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 입력 영역 */}
          <div className="border-t border-neutral-200 px-4 pb-4 pt-3 dark:border-neutral-800">
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="궁금한 것을 입력하세요"
                disabled={isLoading}
                maxLength={MAX_INPUT}
                className={`flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 outline-none transition-colors focus:border-violet-400 focus:ring-1 focus:ring-violet-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:focus:border-violet-500 dark:focus:ring-violet-500 ${preset.answerClass}`}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-white shadow-sm transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)" }}
                aria-label="전송"
              >
                <Send size={17} />
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">
                Gemma 3 27B
              </span>
              {input.length > 0 ? (
                <span className={`text-[10px] ${input.length >= MAX_INPUT ? "text-red-400" : "text-neutral-400 dark:text-neutral-500"}`}>
                  {input.length}/{MAX_INPUT}
                </span>
              ) : (
                <span />
              )}
            </div>
          </div>

          {/* 대화 기록 삭제 확인 팝업 */}
          <ConfirmDialog
            isOpen={showConfirm}
            title="대화 기록을 삭제하시겠습니까?"
            description="삭제된 기록은 복구할 수 없습니다."
            confirmLabel="삭제"
            cancelLabel="취소"
            variant="danger"
            onConfirm={handleConfirmClear}
            onCancel={() => setShowConfirm(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
