import { algorithm } from "./algorithm";
import { buildTools } from "./build-tools";
import { cs } from "./cs";
import { dataStructure } from "./data-structure";
import { htmlCss } from "./html-css";
import { javascript } from "./javascript";
import { react } from "./react";
import { typescript } from "./typescript";

import type { Flashcard } from "@/types/flashcard";

export const flashcards: Flashcard[] = [
  ...cs,
  ...htmlCss,
  ...javascript,
  ...typescript,
  ...react,
  ...dataStructure,
  ...algorithm,
  ...buildTools,
];
