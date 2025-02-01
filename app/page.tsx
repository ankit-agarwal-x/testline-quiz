import Quiz from "@/components/Quiz"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-8">QuizMaster</h1>
      <Quiz />
    </main>
  )
}

