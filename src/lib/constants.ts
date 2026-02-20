import {
  Binary,
  Braces,
  Code,
  Cpu,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Category } from "@/types/flashcard";

export const CATEGORIES: Category[] = [
  "CS",
  "HTML/CSS",
  "JavaScript",
  "React",
  "자료구조",
  "알고리즘",
];

export const CATEGORY_CONFIG: Record<
  Category,
  { label: string; icon: LucideIcon; color: string; bgColor: string }
> = {
  CS: {
    label: "CS",
    icon: Cpu,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  "HTML/CSS": {
    label: "HTML/CSS",
    icon: Code,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
  },
  JavaScript: {
    label: "JavaScript",
    icon: Braces,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  React: {
    label: "React",
    icon: Braces,
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-100 dark:bg-sky-900/30",
  },
  자료구조: {
    label: "자료구조",
    icon: Network,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  알고리즘: {
    label: "알고리즘",
    icon: Binary,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
};

export const FONT_SIZE_PRESETS = {
  small: {
    label: "소",
    questionClass: "text-base",
    answerClass: "text-sm",
  },
  medium: {
    label: "중",
    questionClass: "text-lg",
    answerClass: "text-base",
  },
  large: {
    label: "대",
    questionClass: "text-xl",
    answerClass: "text-lg",
  },
} as const;

export type FontSizeKey = keyof typeof FONT_SIZE_PRESETS;
