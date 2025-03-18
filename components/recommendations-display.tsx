"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { QuizRecommendation } from "@/types/quiz"

interface RecommendationsDisplayProps {
  recommendations: QuizRecommendation[]
}

export default function RecommendationsDisplay({ recommendations }: RecommendationsDisplayProps) {
  const router = useRouter()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-center">
        <Button variant="outline" onClick={() => router.push("/")} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold flex items-center">
          <Sparkles className="mr-2 h-6 w-6 text-yellow-500" /> Recommended Quizzes
        </h1>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          Based on your quiz history and preferences, we think you'll enjoy these quizzes:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((recommendation) => (
          <Card key={recommendation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-r from-green-500 to-green-700 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-16 w-16 text-white opacity-50" />
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{recommendation.title}</CardTitle>
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                >
                  {recommendation.matchPercentage}% Match
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{recommendation.description}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Recommendation reason: {recommendation.reason}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => router.push(`/quiz/${recommendation.id}`)}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

