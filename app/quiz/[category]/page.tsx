import { getQuizById } from "@/lib/quiz-service"
import { redirect } from "next/navigation"
import QuizInterface from "@/components/quiz-interface"
import { getServerSessionMock } from "@/lib/auth"

interface QuizPageProps {
  params: {
    category: string
  }
}

export default async function QuizPage({ params }: QuizPageProps) {
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  // Get quiz data
  const quiz = await getQuizById(params.category)

  if (!quiz) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <QuizInterface quiz={quiz} userId={session?.user?.id} isAuthenticated={!!session} />
      </div>
    </div>
  )
}

