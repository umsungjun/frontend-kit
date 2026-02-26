"use client";

import { Code2, Settings, Sparkles } from "lucide-react";

interface HeaderProps {
  onSettingsToggle: () => void;
  isSettingsOpen: boolean;
  onChatToggle: () => void;
  isChatOpen: boolean;
}

export function Header({
  onSettingsToggle,
  isSettingsOpen,
  onChatToggle,
  isChatOpen,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-100 px-5 py-4 dark:border-neutral-800">
      <h1 className="flex items-center gap-2 text-lg font-bold tracking-tight">
        <Code2 size={20} className="text-orange-500" />
        Frontend Kit
      </h1>
      <div className="flex items-center gap-1">
        {/* AI 채팅 버튼 — 활성 시 무지개 그라디언트 */}
        <button
          onClick={onChatToggle}
          className={`flex h-9 cursor-pointer items-center gap-1.5 rounded-xl px-2.5 transition-all duration-200 ${
            isChatOpen
              ? "text-white shadow-md"
              : "text-violet-500 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-950/30"
          }`}
          style={
            isChatOpen
              ? { background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)" }
              : {}
          }
          aria-label="AI 질문하기"
        >
          <Sparkles size={15} strokeWidth={1.5} />
          <span className="text-xs font-bold tracking-wide">AI</span>
        </button>
        <button
          onClick={onSettingsToggle}
          className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl transition-colors ${
            isSettingsOpen
              ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
              : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
          aria-label="설정"
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
