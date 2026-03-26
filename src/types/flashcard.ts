export type Category =
  | "CS"
  | "HTML/CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "자료구조"
  | "알고리즘"
  | "빌드도구";

export interface Flashcard {
  id: number;
  category: Category;
  question: string;
  answer: string;
}
