import { redirect } from "next/navigation"
import { getUserProfile } from "@/lib/user-service"
import ProfileDisplay from "@/components/profile-display"
import { getServerSessionMock } from "@/lib/auth"

export default async function ProfilePage() {
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  if (!session?.user) {
    redirect("/api/auth/signin")
  }

  // Get user profile
  const userProfile = await getUserProfile(session.user.id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <ProfileDisplay user={session.user} profile={userProfile} />
      </div>
    </div>
  )
}

