import { Button } from "@/components/ui/button"

interface StartProps {
  onStart: () => void
  quizTitle: string
}

export default function Start({ onStart, quizTitle }: StartProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{quizTitle}</h2>
      <p className="text-xl text-white mb-8">Ready to test your knowledge?</p>
      <Button
        onClick={onStart}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 transform hover:scale-105"
      >
        Start Quiz
      </Button>
    </div>
  )
}

