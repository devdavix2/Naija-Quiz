"use server"

// Update user preferences
export async function updateUserPreferences(data: {
  userId: string
  language: string
}) {
  // In dummy mode, just return success
  return { success: true }
}

