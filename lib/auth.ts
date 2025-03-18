import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { dummyUserSession } from "@/lib/dummy-data"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "dummy-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "dummy-client-secret",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Add user ID to token when signing in
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Add user ID to session
      if (token && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  // For dummy data, we'll use a mock session
  secret: "dummy-secret",
}

// Mock function to get server session
export async function getServerSessionMock() {
  // Return dummy user session
  return dummyUserSession
}

