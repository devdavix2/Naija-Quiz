import { getLeaderboard, getQuizCategories } from "@/lib/quiz-service"
import LeaderboardDisplay from "@/components/leaderboard-display"
import { getServerSessionMock } from "@/lib/auth"

export default async function LeaderboardPage() {
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  // Get leaderboard and categories
  const leaderboard = await getLeaderboard()
  const categories = await getQuizCategories()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <LeaderboardDisplay leaderboard={leaderboard} categories={categories} currentUserId={session?.user?.id} />
      </div>
    </div>
  )
}

