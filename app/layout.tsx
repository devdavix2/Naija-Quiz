import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/navbar"
<<<<<<< HEAD
import { getServerSessionMock } from "@/lib/auth"
=======
import { Analytics } from "@/components/analytics"
import { OfflineIndicator } from "@/components/offline-indicator"
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NaijaSpark Quiz",
  description: "Discover the vibrant culture of Nigeria through fun, interactive quizzes",
    generator: 'v0.dev'
}

<<<<<<< HEAD
export default async function RootLayout({
=======
export default function RootLayout({
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
  children,
}: {
  children: React.ReactNode
}) {
<<<<<<< HEAD
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar user={session?.user} />
          <main>{children}</main>
          <Toaster />
=======
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <div className="min-h-screen max-w-full overflow-x-hidden">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 break-words">{children}</main>
          </div>
          <OfflineIndicator />
          <Toaster />
          <Analytics />
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'