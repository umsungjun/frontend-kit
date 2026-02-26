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

    // 실패 시 완전 롤백을 위해 원본 스냅샷 확보
    const snapshot = messages;

    // 사용자 메시지를 낙관적으로 추가 (pruning은 성공 시에만)
    setMessages([...snapshot, userMsg]);

    // 최근 20개 메시지를 대화 기록으로 전달
    const history = snapshot.slice(-20).map((m) => ({
      role: m.role === "user" ? "user" : "model",
      text: m.content,
    }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history, cardContext }),
      });

      const data: { answer?: string; code?: string; error?: string } =
        await res.json();

      if (!res.ok) {
        setMessages(snapshot);

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

      // 성공 시에만 pruning 적용
      const updated = [...snapshot, userMsg, aiMsg];
      setMessages(updated.slice(-MAX_MESSAGES));
    } catch {
      setMessages(snapshot);
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
