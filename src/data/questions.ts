import { algorithm } from "./algorithm";
import { cs } from "./cs";
import { dataStructure } from "./data-structure";
import { htmlCss } from "./html-css";
import { javascript } from "./javascript";
import { react } from "./react";

import type { Flashcard } from "@/types/flashcard";

export const flashcards: Flashcard[] = [
  ...cs,
  ...htmlCss,
  ...javascript,
  ...react,
  ...dataStructure,
  ...algorithm,
];
