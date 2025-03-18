"use server"

import { dummyCommunityDiscussions } from "@/lib/dummy-data"
import type { Discussion } from "@/types/community"

// Create a new discussion
export async function createDiscussion(data: {
  userId: string
  title: string
  content: string
}): Promise<Discussion> {
  // In dummy mode, create a mock discussion
  const newDiscussion: Discussion = {
    id: `disc${dummyCommunityDiscussions.length + 1}`,
    title: data.title,
    content: data.content,
    likes: 0,
    comments: 0,
    date: new Date().toISOString(),
    userId: data.userId,
    userName: "You",
    userImage: "/placeholder.svg?height=40&width=40",
    userBadge: "Naija Novice",
  }

  return newDiscussion
}

// Submit feedback
export async function submitFeedback(data: {
  userId: string
  content: string
}) {
  // In dummy mode, just return success
  return { success: true }
}

