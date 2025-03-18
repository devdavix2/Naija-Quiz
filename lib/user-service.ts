import type { UserProfile } from "@/types/user"
import { dummyUserStats, dummyUserProfile, dummyUserBadges, dummyUserSession } from "@/lib/dummy-data"

// Create a new user
export async function createUser(userData: {
  id: string
  name: string
  email: string
  image?: string
}) {
  // In dummy mode, just return success
  return { success: true }
}

// Get user by ID
export async function getUserById(id: string) {
  // Return dummy user data
  return dummyUserSession.user
}

// Get user stats
export async function getUserStats(userId: string) {
  // Return dummy user stats
  return dummyUserStats
}

// Get user badges
export async function getUserBadges(userId: string): Promise<string[]> {
  // Return dummy user badges
  return dummyUserBadges
}

// Get user profile
export async function getUserProfile(userId: string): Promise<UserProfile> {
  // Return dummy user profile
  return dummyUserProfile
}

