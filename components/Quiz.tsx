"use client"

import { useState, useEffect } from "react"
import Start from "./Start"
import Question from "./Question"
import Summary from "./Summary"
import { Button } from "@/components/ui/button"
import type { QuizData } from "@/types/quiz"

export default function Quiz() {
  const [quizData, setQuizData] = useState<QuizData | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showSummary, setShowSummary] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchQuizData = async () => {
    try {
      setError(null)
      const response = await fetch("/api/quiz")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error("Invalid data format")
      }

      setQuizData(data)
    } catch (error) {
      console.error("Error fetching quiz data:", error)
      setError(`Failed to fetch quiz data: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  useEffect(() => {
    fetchQuizData()
  }, []) //Fixed: Added empty dependency array to useEffect

  const startQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setShowSummary(false)
  }

  const handleAnswer = (selectedOptionId: number) => {
    if (quizData) {
      const currentQuestionData = quizData.questions[currentQuestion]
      const correctOption = currentQuestionData.options.find((option) => option.is_correct)
      if (correctOption && selectedOptionId === correctOption.id) {
        setScore(score + 1)
      }

      if (currentQuestion + 1 < quizData.questions.length) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowSummary(true)
      }
    }
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500 text-xl mb-4">{error}</p>
        <p className="text-white mb-4">It seems there's an issue accessing the quiz data. Please try again later.</p>
        <Button
          onClick={fetchQuizData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Retry
        </Button>
      </div>
    )
  }

  if (!quizData) {
    return <div className="text-white text-2xl">Loading quiz...</div>
  }

  if (!quizStarted) {
    return <Start onStart={startQuiz} quizTitle={quizData.title} />
  }

  if (showSummary) {
    return <Summary score={score} totalQuestions={quizData.questions.length} onRestart={startQuiz} />
  }

  const currentQuestionData = quizData.questions[currentQuestion]

  return (
    <Question
      question={currentQuestionData.description}
      options={currentQuestionData.options}
      onAnswer={handleAnswer}
      currentQuestion={currentQuestion + 1}
      totalQuestions={quizData.questions.length}
    />
  )
}

