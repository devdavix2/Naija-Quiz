"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, CheckCircle, Timer, XCircle } from "lucide-react"
import type { Quiz, QuizQuestion } from "@/types/quiz"
import { LanguageSelector } from "@/components/language-selector"
import { submitQuizResult } from "@/lib/quiz-actions"
import { useToast } from "@/hooks/use-toast"
import confetti from "canvas-confetti"
import { motion, AnimatePresence } from "framer-motion"

interface QuizInterfaceProps {
  quiz: Quiz
  userId?: string
  isAuthenticated: boolean
}

export default function QuizInterface({ quiz, userId, isAuthenticated }: QuizInterfaceProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [language, setLanguage] = useState<string>("english")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!quizStarted || !timeLeft) return

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          finishQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [quizStarted, timeLeft])

  // Add timer animation
  useEffect(() => {
    if (!quizStarted || !timeLeft || !progressBarRef.current) return

    const totalTime = quiz.timeLimit
    const percentLeft = (timeLeft / totalTime) * 100

    progressBarRef.current.style.width = `${percentLeft}%`

    if (percentLeft < 30) {
      progressBarRef.current.style.backgroundColor = "#ef4444" // red-500
    } else if (percentLeft < 60) {
      progressBarRef.current.style.backgroundColor = "#f59e0b" // amber-500
    } else {
      progressBarRef.current.style.backgroundColor = "#22c55e" // green-500
    }
  }, [timeLeft, quizStarted, quiz.timeLimit])

  const startQuiz = () => {
    setQuizStarted(true)
    setTimeLeft(quiz.timeLimit)
    setAnswers(new Array(quiz.questions.length).fill(""))
  }

  const handleAnswerSelect = (value: string) => {
    if (isAnswered) return
    setSelectedAnswer(value)
  }

  const checkAnswer = () => {
    if (!selectedAnswer || isAnswered) return

    const correct = selectedAnswer === quiz.questions[currentQuestionIndex].correctAnswer
    setIsCorrect(correct)
    setIsAnswered(true)
    setShowFeedback(true)

    if (correct) {
      // Trigger confetti for correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }

    // Save answer
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = selectedAnswer
    setAnswers(newAnswers)

    // Show feedback for 1.5 seconds
    setTimeout(() => {
      setShowFeedback(false)

      // Wait for animation to complete before moving to next question
      setTimeout(() => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
          setSelectedAnswer(null)
          setIsAnswered(false)
          setIsCorrect(false)
        } else {
          finishQuiz()
        }
      }, 300)
    }, 1500)
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0 && !isAnswered) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(answers[currentQuestionIndex - 1])
    }
  }

  const finishQuiz = async () => {
    if (isSubmitting) return

    setIsSubmitting(true)
    const score = calculateScore()
    const percentage = Math.round((score / quiz.questions.length) * 100)

    try {
      if (isAuthenticated && userId) {
        // Submit result to the server if user is authenticated
        await submitQuizResult({
          quizId: quiz.id,
          userId,
          score,
          totalQuestions: quiz.questions.length,
          timeSpent: quiz.timeLimit - timeLeft,
          language,
        })
      }

      // Trigger celebration confetti
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      })

      // Redirect to results page
      router.push(`/results?quizId=${quiz.id}&score=${score}&total=${quiz.questions.length}&language=${language}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quiz results. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  const calculateScore = () => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) {
        score++
      }
    })
    return score
  }

  const getLocalizedQuestion = (question: QuizQuestion) => {
    if (language === "english" || !question.translations) {
      return question
    }

    const translation = question.translations[language]
    if (!translation) return question

    return {
      ...question,
      question: translation.question || question.question,
      options: translation.options || question.options,
    }
  }

  if (!quizStarted) {
    return (
      <motion.div
        className="flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">{quiz.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{quiz.description}</p>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Timer className="h-5 w-5" />
              <span>Time Limit: {Math.floor(quiz.timeLimit / 60)} minutes</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This quiz contains {quiz.questions.length} questions about {quiz.title.toLowerCase()}.
            </p>

            {quiz.availableLanguages && quiz.availableLanguages.length > 0 && (
              <div className="mt-4">
                <p className="mb-2 font-medium">Select Language:</p>
                <LanguageSelector
                  languages={quiz.availableLanguages}
                  selectedLanguage={language}
                  onLanguageChange={setLanguage}
                />
              </div>
            )}

            {!isAuthenticated && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-sm">
                <p className="font-medium text-yellow-800 dark:text-yellow-200">Not signed in</p>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Your results won't be saved to your profile.
                  <a href="/api/auth/signin" className="underline ml-1">
                    Sign in
                  </a>{" "}
                  to track your progress.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
            <Button
              onClick={startQuiz}
              className="bg-green-600 hover:bg-green-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }

  const currentQuestion = getLocalizedQuestion(quiz.questions[currentQuestionIndex])
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="p-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </span>
            <span className="flex items-center text-sm font-medium">
              <Timer className="mr-1 h-4 w-4" />
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>
          <Progress value={progress} className="h-2" />

          {/* Timer progress bar */}
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 mt-2 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-green-500 transition-all duration-1000 ease-linear"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{currentQuestion.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
                  {currentQuestion.options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 mb-4 ${
                        showFeedback && option === currentQuestion.correctAnswer ? "animate-pulse" : ""
                      }`}
                    >
                      <RadioGroupItem value={option} id={`option-${index}`} disabled={isAnswered} />
                      <Label
                        htmlFor={`option-${index}`}
                        className={`cursor-pointer flex-1 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          showFeedback && option === currentQuestion.correctAnswer
                            ? "border-2 border-green-500 bg-green-50 dark:bg-green-900/20"
                            : showFeedback && option === selectedAnswer && !isCorrect
                              ? "border-2 border-red-500 bg-red-50 dark:bg-red-900/20"
                              : ""
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{option}</span>
                          {showFeedback && option === currentQuestion.correctAnswer && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {showFeedback && option === selectedAnswer && !isCorrect && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-md mt-4 ${
                      isCorrect
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                    }`}
                  >
                    <div className="flex items-center">
                      {isCorrect ? <CheckCircle className="h-5 w-5 mr-2" /> : <XCircle className="h-5 w-5 mr-2" />}
                      <p>
                        {isCorrect
                          ? "Correct! Well done!"
                          : `Incorrect. The correct answer is "${currentQuestion.correctAnswer}".`}
                      </p>
                    </div>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0 || isAnswered}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                {!isAnswered ? (
                  <Button
                    onClick={checkAnswer}
                    disabled={!selectedAnswer || isSubmitting}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setShowFeedback(false)
                      setTimeout(() => {
                        if (currentQuestionIndex < quiz.questions.length - 1) {
                          setCurrentQuestionIndex(currentQuestionIndex + 1)
                          setSelectedAnswer(null)
                          setIsAnswered(false)
                          setIsCorrect(false)
                        } else {
                          finishQuiz()
                        }
                      }, 300)
                    }}
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {currentQuestionIndex === quiz.questions.length - 1 ? "Finish" : "Next"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

