import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { useEffect } from "react"

interface SummaryProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function Summary({ score, totalQuestions, onRestart }: SummaryProps) {
  const percentage = (score / totalQuestions) * 100

  useEffect(() => {
    if (percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }, [percentage])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiz Completed!</h2>
      <p className="text-xl mb-6 text-gray-700">
        You scored {score} out of {totalQuestions}
      </p>
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <motion.div
            className="bg-blue-500 h-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-lg font-semibold text-gray-700">{percentage.toFixed(1)}%</p>
      </div>
      {percentage >= 70 && <p className="text-xl font-bold text-green-500 mb-6">Congratulations! You did great!</p>}
      <Button
        onClick={onRestart}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105"
      >
        Restart Quiz
      </Button>
    </motion.div>
  )
}

