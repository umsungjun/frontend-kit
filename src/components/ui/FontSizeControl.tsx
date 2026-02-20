"use client";

import { FONT_SIZE_PRESETS } from "@/lib/constants";
import type { FontSizeKey } from "@/lib/constants";

const SIZES: { key: FontSizeKey; textClass: string }[] = [
  { key: "small", textClass: "text-xs" },
  { key: "medium", textClass: "text-sm" },
  { key: "large", textClass: "text-base" },
];

interface FontSizeControlProps {
  fontSize: FontSizeKey;
  onChange: (size: FontSizeKey) => void;
}

export function FontSizeControl({ fontSize, onChange }: FontSizeControlProps) {
  return (
    <div className="flex items-center gap-1">
      {SIZES.map(({ key, textClass }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl font-medium transition-colors ${textClass} ${
            fontSize === key
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
          aria-label={`글자 크기 ${FONT_SIZE_PRESETS[key].label}`}
        >
          가
        </button>
      ))}
    </div>
  );
}
