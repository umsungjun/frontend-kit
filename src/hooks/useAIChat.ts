"use client";

import { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: number;
}

interface CardContext {
  question: string;
  answer: string;
}

const MAX_MESSAGES = 50;

const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2);

export function useAIChat() {
  const [messages, setMessages] = useLocalStorage<ChatMessage[]>(
    "fe-kit-ai-messages",
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (text: string, cardContext?: CardContext) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setError(null);
    setIsLoading(true);

    const userMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      content: trimmed,
      timestamp: Date.now(),
    };

    // 사용자 메시지 추가 (50개 초과 시 가장 오래된 2개 제거)
    let currentMessages: ChatMessage[] = [];
    setMessages((prev) => {
      const updated = [...prev, userMsg];
      const result = updated.length > MAX_MESSAGES ? updated.slice(2) : updated;
      currentMessages = prev; // API 호출용 이전 메시지 저장
      return result;
    });

    try {
      // 최근 20개 메시지를 대화 기록으로 전달 (새 메시지 제외)
      const history = currentMessages.slice(-20).map((m) => ({
        role: m.role === "user" ? "user" : "model",
        text: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history, cardContext }),
      });

      const data: { answer?: string; code?: string; error?: string } =
        await res.json();

      if (!res.ok) {
        // 오류 발생 시 사용자 메시지 롤백
        setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));

        if (res.status === 429 || data.code === "QUOTA_EXCEEDED") {
          setError("요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.");
        } else {
          setError(data.error ?? "오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
        return;
      }

      const aiMsg: ChatMessage = {
        id: generateId(),
        role: "ai",
        content: data.answer ?? "답변을 생성할 수 없습니다.",
        timestamp: Date.now(),
      };

      // AI 메시지 추가 (50개 초과 시 가장 오래된 2개 제거)
      setMessages((prev) => {
        const updated = [...prev, aiMsg];
        return updated.length > MAX_MESSAGES ? updated.slice(2) : updated;
      });
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));
      setError("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => setMessages([]);
  const clearError = () => setError(null);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    clearError,
  };
}
