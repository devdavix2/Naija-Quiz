import { redirect } from "next/navigation"
import { getRecommendedQuizzes } from "@/lib/quiz-service"
import RecommendationsDisplay from "@/components/recommendations-display"
import { getServerSessionMock } from "@/lib/auth"

export default async function RecommendationsPage() {
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  if (!session?.user) {
    redirect("/api/auth/signin")
  }

  // Get recommended quizzes
  const recommendations = await getRecommendedQuizzes(session.user.id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <RecommendationsDisplay recommendations={recommendations} />
      </div>
    </div>
  )
}

