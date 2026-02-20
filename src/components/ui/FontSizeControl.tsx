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
          className={`flex h-9 w-9 items-center justify-center rounded-lg font-medium transition-colors ${textClass} ${
            fontSize === key
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
          aria-label={`글자 크기 ${FONT_SIZE_PRESETS[key].label}`}
        >
          가
        </button>
      ))}
    </div>
  );
}
