"use client";

import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

// 컴포넌트 맵은 렌더마다 재생성되지 않도록 모듈 스코프에 둔다
const MARKDOWN_COMPONENTS: Components = {
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
    <pre className="my-2 overflow-x-auto rounded-xl bg-neutral-100 p-3 font-mono text-[0.85em] leading-relaxed text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
      {children}
    </pre>
  ),
  ul: ({ children }) => <ul className="mb-2 list-disc pl-4">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 list-decimal pl-4">{children}</ol>,
  li: ({ children }) => <li className="mb-0.5">{children}</li>,
  h1: ({ children }) => (
    <h1 className="mb-1 text-base font-bold">{children}</h1>
  ),
  h2: ({ children }) => <h2 className="mb-1 text-sm font-bold">{children}</h2>,
  h3: ({ children }) => (
    <h3 className="mb-1 text-sm font-semibold">{children}</h3>
  ),
};

// remark-breaks: 단일 개행을 <br>로 변환. 플래시카드 답변이 \n 하나로 줄을 나누기 때문에 필수
const REMARK_PLUGINS = [remarkBreaks];
const REHYPE_PLUGINS_RAW = [rehypeRaw];

interface MarkdownContentProps {
  content: string;
  className?: string;
  // 원시 HTML 허용 여부. AI 응답은 <strong> 주입 때문에 필요하지만 정적 데이터는 꺼야 안전하다
  allowRawHtml?: boolean;
}

export default function MarkdownContent({
  content,
  className,
  allowRawHtml = false,
}: MarkdownContentProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={REMARK_PLUGINS}
        rehypePlugins={allowRawHtml ? REHYPE_PLUGINS_RAW : undefined}
        components={MARKDOWN_COMPONENTS}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
