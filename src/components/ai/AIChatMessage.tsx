"use client";

import type { ChatMessage } from "@/hooks/useAIChat";
import type { FontSizeKey } from "@/lib/constants";
import { FONT_SIZE_PRESETS } from "@/lib/constants";

import MarkdownContent from "../ui/MarkdownContent";

// CommonMark 파서가 **'text'** 같은 패턴을 bold로 인식하지 못하는 문제 보완
function preprocessBold(content: string): string {
  return content.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

interface AIChatMessageProps {
  message: ChatMessage;
  fontSize: FontSizeKey;
}

export function AIChatMessage({ message, fontSize }: AIChatMessageProps) {
  const preset = FONT_SIZE_PRESETS[fontSize];
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 leading-relaxed ${preset.answerClass} ${
          isUser
            ? "rounded-tr-sm bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
            : "rounded-tl-sm border border-neutral-200 bg-white text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        }`}
      >
        {isUser ? (
          <span className="whitespace-pre-line">{message.content}</span>
        ) : (
          // preprocessBold가 <strong>을 주입하므로 원시 HTML 허용이 필요
          <MarkdownContent
            content={preprocessBold(message.content)}
            allowRawHtml
          />
        )}
      </div>
    </div>
  );
}
