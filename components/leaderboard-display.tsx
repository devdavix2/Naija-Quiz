"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Trophy, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { LeaderboardEntry } from "@/types/leaderboard"
import type { QuizCategory } from "@/types/quiz"

interface LeaderboardDisplayProps {
  leaderboard: LeaderboardEntry[]
  categories: QuizCategory[]
  currentUserId?: string
}

export default function LeaderboardDisplay({ leaderboard, categories, currentUserId }: LeaderboardDisplayProps) {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredLeaderboard =
    selectedCategory === "all" ? leaderboard : leaderboard.filter((entry) => entry.quizCategory === selectedCategory)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center">
        <Button variant="outline" onClick={() => router.push("/")} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold flex items-center">
          <Trophy className="mr-2 h-6 w-6 text-yellow-500" /> Leaderboard
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="mb-4 flex flex-wrap">
              <TabsTrigger value="all">All Quizzes</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              {filteredLeaderboard.length > 0 ? (
                <div className="space-y-4">
                  {filteredLeaderboard.map((entry, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-4 rounded-lg ${
                        index === 0
                          ? "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800"
                          : index === 1
                            ? "bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700"
                            : index === 2
                              ? "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
                              : "bg-white dark:bg-gray-800"
                      } ${entry.userId === currentUserId ? "border-2 border-green-500" : ""}`}
                    >
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-bold mr-4">
                        {index + 1}
                      </div>
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={entry.userImage} alt={entry.userName} />
                        <AvatarFallback>{entry.userName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="font-medium">
                            {entry.userName}
                            {entry.userId === currentUserId && (
                              <span className="ml-2 text-sm text-gray-500">(You)</span>
                            )}
                          </h3>
                          <Badge className="ml-2 bg-green-600">{entry.badge}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Score: {entry.score}/{entry.totalQuestions} (
                          {Math.round((entry.score / entry.totalQuestions) * 100)}%)
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(entry.date).toLocaleDateString()}
                        </div>
                        {selectedCategory === "all" && <div className="text-xs text-gray-400">{entry.quizTitle}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No entries yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Complete a quiz to see your name on the leaderboard!
                  </p>
                  <Button onClick={() => router.push("/")} className="bg-green-600 hover:bg-green-700">
                    Take a Quiz
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

