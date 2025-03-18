"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MessageSquare, Send, ThumbsUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import type { Discussion } from "@/types/community"
import type { Session } from "next-auth"
import { createDiscussion, submitFeedback } from "@/lib/community-actions"
import { useToast } from "@/hooks/use-toast"

interface CommunityDisplayProps {
  discussions: Discussion[]
  user?: Session["user"]
  isAuthenticated: boolean
}

export default function CommunityDisplay({
  discussions: initialDiscussions,
  user,
  isAuthenticated,
}: CommunityDisplayProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("discussions")
  const [comment, setComment] = useState("")
  const [topic, setTopic] = useState("")
  const [discussions, setDiscussions] = useState(initialDiscussions)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePostComment = async () => {
    if (!comment.trim() || isSubmitting) return

    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to submit feedback",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      await submitFeedback({
        userId: user!.id,
        content: comment,
      })

      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback!",
      })
      setComment("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCreateTopic = async () => {
    if (!topic.trim() || isSubmitting) return

    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to create a discussion",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      const newDiscussion = await createDiscussion({
        userId: user!.id,
        title: topic,
        content: "This is a new discussion topic.",
      })

      setDiscussions([newDiscussion, ...discussions])
      setTopic("")
      toast({
        title: "Discussion created",
        description: "Your discussion topic has been created successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create discussion. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center">
        <Button variant="outline" onClick={() => router.push("/")} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold flex items-center">
          <MessageSquare className="mr-2 h-6 w-6 text-green-600" /> Community
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connect with other quiz takers</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="discussions" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="space-y-6">
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="Create a new discussion topic..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleCreateTopic} className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  Create Topic
                </Button>
              </div>

              {!isAuthenticated && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-sm mb-4">
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">Not signed in</p>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    <a href="/api/auth/signin" className="underline">
                      Sign in
                    </a>{" "}
                    to participate in discussions and create topics.
                  </p>
                </div>
              )}

              {discussions.map((discussion) => (
                <Card key={discussion.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={discussion.userImage} alt={discussion.userName} />
                        <AvatarFallback>{discussion.userName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{discussion.userName}</h3>
                          <Badge className="bg-green-600">{discussion.userBadge}</Badge>
                          <span className="text-xs text-gray-500">
                            {new Date(discussion.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="font-medium mb-2">{discussion.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{discussion.content}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                            <ThumbsUp className="mr-1 h-4 w-4" /> {discussion.likes}
                          </Button>
                          <span className="text-gray-500">
                            <MessageSquare className="inline mr-1 h-4 w-4" /> {discussion.comments} comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="feedback">
              <div className="space-y-4">
                <p>We'd love to hear your thoughts on how we can improve NaijaSpark Quiz!</p>
                <Textarea
                  placeholder="Share your feedback or suggestions..."
                  className="min-h-[150px]"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                {!isAuthenticated && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-sm">
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">Not signed in</p>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      <a href="/api/auth/signin" className="underline">
                        Sign in
                      </a>{" "}
                      to submit feedback.
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button
                    onClick={handlePostComment}
                    className="bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting || !isAuthenticated}
                  >
                    <Send className="mr-2 h-4 w-4" /> Submit Feedback
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

