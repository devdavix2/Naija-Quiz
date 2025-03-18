import { getCommunityDiscussions } from "@/lib/community-service"
import CommunityDisplay from "@/components/community-display"
import { getServerSessionMock } from "@/lib/auth"

export default async function CommunityPage() {
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  // Get community discussions
  const discussions = await getCommunityDiscussions()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <CommunityDisplay discussions={discussions} user={session?.user} isAuthenticated={!!session} />
      </div>
    </div>
  )
}

