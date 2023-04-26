export interface QuizQuestion {
  value: string;
  answers: QuizAnswer[];
  id: string;
}

export interface QuizAnswer {
  value: string;
  element: string;
}
