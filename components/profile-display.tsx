"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Award, BarChart3, History, Settings, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { UserProfile } from "@/types/user"
import type { Session } from "next-auth"
import { LanguageSelector } from "@/components/language-selector"
import { updateUserPreferences } from "@/lib/user-actions"
import { useToast } from "@/hooks/use-toast"

interface ProfileDisplayProps {
  user: Session["user"]
  profile: UserProfile
}

export default function ProfileDisplay({ user, profile }: ProfileDisplayProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("history")
  const [preferredLanguage, setPreferredLanguage] = useState(profile.preferences?.language || "english")
  const [isSaving, setIsSaving] = useState(false)

  const handleSavePreferences = async () => {
    setIsSaving(true)
    try {
      await updateUserPreferences({
        userId: user.id,
        language: preferredLanguage,
      })

      toast({
        title: "Preferences saved",
        description: "Your preferences have been updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center">
        <Button variant="outline" onClick={() => router.push("/")} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold flex items-center">
          <User className="mr-2 h-6 w-6 text-green-600" /> Your Profile
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">{user.email}</p>

              <div className="w-full mt-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <h3 className="font-medium mb-2">Stats</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Quizzes Completed</span>
                      <span className="font-medium">{profile.stats.quizzesCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Average Score</span>
                      <span className="font-medium">{profile.stats.averageScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Total Points</span>
                      <span className="font-medium">{profile.stats.totalPoints}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.badges.map((badge, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300"
                      >
                        {badge}
                      </Badge>
                    ))}
                    {profile.badges.length === 0 && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">Complete quizzes to earn badges!</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <Tabs defaultValue="history" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="history">Quiz History</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="mr-2 h-5 w-5 text-green-600" /> Your Quiz History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profile.quizHistory.length > 0 ? (
                  <div className="space-y-4">
                    {profile.quizHistory.map((result, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{result.quizTitle}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {new Date(result.date).toLocaleDateString()} at{" "}
                                {new Date(result.date).toLocaleTimeString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge className="mb-1 bg-green-600">
                                {Math.round((result.score / result.totalQuestions) * 100)}%
                              </Badge>
                              <p className="text-sm">
                                Score: {result.score}/{result.totalQuestions}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No quiz history yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Take a quiz to start building your profile and track your progress!
                    </p>
                    <Button onClick={() => router.push("/")} className="bg-green-600 hover:bg-green-700">
                      Take a Quiz
                    </Button>
                  </div>
                )}
              </CardContent>
            </TabsContent>

            <TabsContent value="settings">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5 text-green-600" /> Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Preferred Language</h3>
                  <LanguageSelector
                    languages={["english", "pidgin", "yoruba", "igbo", "hausa"]}
                    selectedLanguage={preferredLanguage}
                    onLanguageChange={setPreferredLanguage}
                  />
                </div>

                <Button onClick={handleSavePreferences} className="bg-green-600 hover:bg-green-700" disabled={isSaving}>
                  Save Preferences
                </Button>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-green-600" /> Your Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          {profile.categoryPerformance.length > 0 ? (
            <div className="space-y-4">
              {profile.categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{category.categoryName}</h3>
                    <span className="text-sm font-medium">{category.averageScore}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: `${category.averageScore}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No performance data yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Take quizzes in different categories to see your performance breakdown!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

