import { dummyCommunityDiscussions } from "@/lib/dummy-data"
import type { Discussion } from "@/types/community"

// Get community discussions
export async function getCommunityDiscussions(): Promise<Discussion[]> {
  // Return dummy community discussions
  return dummyCommunityDiscussions
}

// Get discussion by ID
export async function getDiscussionById(id: string) {
  // Return dummy discussion by ID
  return dummyCommunityDiscussions.find((discussion) => discussion.id === id) || null
}

