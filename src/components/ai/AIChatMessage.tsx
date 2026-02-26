"use client";

import ReactMarkdown from "react-markdown";

import type { FontSizeKey } from "@/lib/constants";
import { FONT_SIZE_PRESETS } from "@/lib/constants";
import type { ChatMessage } from "@/hooks/useAIChat";

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
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                return isBlock ? (
                  <code className="block">{children}</code>
                ) : (
                  <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-[0.85em] text-violet-600 dark:bg-neutral-700 dark:text-violet-400">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="my-2 overflow-x-auto rounded-xl bg-neutral-100 p-3 font-mono text-[0.85em] text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="mb-2 list-disc pl-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-2 list-decimal pl-4">{children}</ol>
              ),
              li: ({ children }) => <li className="mb-0.5">{children}</li>,
              h1: ({ children }) => (
                <h1 className="mb-1 text-base font-bold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mb-1 text-sm font-bold">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-1 text-sm font-semibold">{children}</h3>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
