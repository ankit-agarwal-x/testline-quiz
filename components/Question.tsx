import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface QuestionProps {
  question: string
  options: {
    id: number
    description: string
  }[]
  onAnswer: (selectedOptionId: number) => void
  currentQuestion: number
  totalQuestions: number
}

export default function Question({ question, options, onAnswer, currentQuestion, totalQuestions }: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const handleOptionClick = (id: number) => {
    setSelectedOption(id)
  }

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption)
      setSelectedOption(null)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Question {currentQuestion} of {totalQuestions}
      </h2>
      <p className="text-xl mb-6 text-gray-700">{question}</p>
      <div className="space-y-4 mb-6">
        {options.map((option) => (
          <Button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
              selectedOption === option.id ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {option.description}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleSubmit}
        disabled={selectedOption === null}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Answer
      </Button>
    </motion.div>
  )
}

