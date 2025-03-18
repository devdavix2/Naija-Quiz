"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ShareResultCardProps {
  quizTitle: string
  score: number
  total: number
  percentage: number
  badge: string
}

export function ShareResultCard({ quizTitle, score, total, percentage, badge }: ShareResultCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 600
    canvas.height = 315

    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, "#22c55e")
    gradient.addColorStop(1, "#15803d")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw white card background
    ctx.fillStyle = "#ffffff"
    ctx.beginPath()
    ctx.roundRect(30, 30, canvas.width - 60, canvas.height - 60, 10)
    ctx.fill()

    // Draw quiz title
    ctx.fillStyle = "#000000"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.fillText(quizTitle, canvas.width / 2, 80)

    // Draw score
    ctx.font = "bold 48px Arial"
    ctx.fillText(`${score}/${total}`, canvas.width / 2, 160)

    // Draw percentage
    ctx.font = "24px Arial"
    ctx.fillText(`${percentage}% Correct`, canvas.width / 2, 200)

    // Draw badge
    ctx.fillStyle = "#22c55e"
    ctx.beginPath()
    ctx.roundRect(canvas.width / 2 - 100, 220, 200, 40, 20)
    ctx.fill()

    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 20px Arial"
    ctx.fillText(badge, canvas.width / 2, 247)

    // Draw logo/branding
    ctx.fillStyle = "#000000"
    ctx.font = "16px Arial"
    ctx.fillText("NaijaSpark Quiz", canvas.width / 2, 290)
  }, [quizTitle, score, total, percentage, badge])

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <canvas ref={canvasRef} className="w-full h-auto" />
      </CardContent>
    </Card>
  )
}

