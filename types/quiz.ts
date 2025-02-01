export interface Question {
  id: number
  description: string
  options: {
    id: number
    description: string
    is_correct: boolean
  }[]
}

export interface QuizData {
  id: number
  title: string
  description: string
  questions: Question[]
}

