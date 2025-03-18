import { getQuizById } from "@/lib/quiz-service"
import { getUserBadges } from "@/lib/user-service"
import { redirect } from "next/navigation"
import ResultsDisplay from "@/components/results-display"
import { getServerSessionMock } from "@/lib/auth"

interface ResultsPageProps {
  searchParams: {
    quizId: string
    score: string
    total: string
    language: string
  }
}

export default async function ResultsPage({ searchParams }: ResultsPageProps) {
  const { quizId, score, total, language = "english" } = searchParams

  if (!quizId || !score || !total) {
    redirect("/")
  }

  // Get mock session for dummy data
  const session = await getServerSessionMock()

  // Get quiz data
  const quiz = await getQuizById(quizId)

  if (!quiz) {
    redirect("/")
  }

  const scoreNum = Number.parseInt(score)
  const totalNum = Number.parseInt(total)
  const percentage = Math.round((scoreNum / totalNum) * 100)

  // Get user badges if authenticated
  const userBadges = session?.user?.id ? await getUserBadges(session.user.id) : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <ResultsDisplay
          quiz={quiz}
          score={scoreNum}
          total={totalNum}
          percentage={percentage}
          language={language}
          isAuthenticated={!!session}
          userBadges={userBadges}
        />
      </div>
    </div>
  )
}

