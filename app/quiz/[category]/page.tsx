"use client"

<<<<<<< HEAD
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Timer } from "lucide-react"
import { quizData } from "@/lib/quiz-data"
import { saveQuizResult } from "@/lib/local-storage"
=======
import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import QuizInterface from "@/components/quiz-interface"
import { useStore } from "@/lib/store"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964

export default function QuizPage() {
  const router = useRouter()
  const { category } = useParams() as { category: string }
<<<<<<< HEAD
  const [currentQuiz, setCurrentQuiz] = useState<any>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    const quiz = quizData.find((q) => q.id === category)
    if (quiz) {
      setCurrentQuiz(quiz)
      setTimeLeft(quiz.timeLimit)
    } else {
      router.push("/")
    }
  }, [category, router])

  useEffect(() => {
    if (!quizStarted || !timeLeft) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          finishQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizStarted, timeLeft])

  const startQuiz = () => {
    setQuizStarted(true)
    setAnswers(new Array(currentQuiz.questions.length).fill(""))
  }

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value)
  }

  const goToNextQuestion = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers]
      newAnswers[currentQuestionIndex] = selectedAnswer
      setAnswers(newAnswers)
      setSelectedAnswer(null)

      if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        finishQuiz()
      }
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(answers[currentQuestionIndex - 1])
    }
  }

  const finishQuiz = () => {
    const score = calculateScore()
    const result = {
      quizId: currentQuiz.id,
      quizTitle: currentQuiz.title,
      score,
      totalQuestions: currentQuiz.questions.length,
      date: new Date().toISOString(),
    }

    saveQuizResult(result)
    router.push(`/results?quizId=${currentQuiz.id}&score=${score}&total=${currentQuiz.questions.length}`)
  }

  const calculateScore = () => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].correctAnswer) {
        score++
      }
    })
    return score
  }

  if (!currentQuiz) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">{currentQuiz.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{currentQuiz.description}</p>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Timer className="h-5 w-5" />
              <span>Time Limit: {Math.floor(currentQuiz.timeLimit / 60)} minutes</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This quiz contains {currentQuiz.questions.length} questions about {currentQuiz.title.toLowerCase()}.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <Button onClick={startQuiz} className="bg-green-600 hover:bg-green-700">
              Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
=======

  // Get quiz data from store
  const getQuizById = useStore((state) => state.getQuizById)
  const quiz = getQuizById(category)

  // Redirect if quiz not found
  useEffect(() => {
    if (!quiz) {
      router.push("/")
    }
  }, [quiz, router])

  // Show loading state while checking if quiz exists
  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex justify-between pt-4">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
      </div>
    )
  }

<<<<<<< HEAD
  const currentQuestion = currentQuiz.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
            </span>
            <span className="flex items-center text-sm font-medium">
              <Timer className="mr-1 h-4 w-4" />
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{currentQuestion.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
              {currentQuestion.options.map((option: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="cursor-pointer flex-1 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button onClick={goToNextQuestion} disabled={!selectedAnswer} className="bg-green-600 hover:bg-green-700">
              {currentQuestionIndex === currentQuiz.questions.length - 1 ? "Finish" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
=======
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="container mx-auto px-4 py-8">
        <QuizInterface quiz={quiz} />
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
      </div>
    </div>
  )
}

