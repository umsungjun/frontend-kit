export type Category =
  | "CS"
  | "HTML/CSS"
  | "JavaScript"
  | "React"
  | "자료구조"
  | "알고리즘";

export interface Flashcard {
  id: number;
  category: Category;
  question: string;
  answer: string;
}
