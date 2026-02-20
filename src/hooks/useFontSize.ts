"use client";

import { FONT_SIZE_PRESETS } from "@/lib/constants";
import type { FontSizeKey } from "@/lib/constants";

import { useLocalStorage } from "./useLocalStorage";

export function useFontSize() {
  const [fontSize, setFontSize] = useLocalStorage<FontSizeKey>(
    "fe-kit-font-size",
    "medium"
  );

  const preset = FONT_SIZE_PRESETS[fontSize];

  return { fontSize, setFontSize, preset };
}
