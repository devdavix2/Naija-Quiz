import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/landing/hero-section"
import FeatureSection from "@/components/landing/feature-section"
import QuizCategoriesSection from "@/components/landing/quiz-categories-section"
import TestimonialsSection from "@/components/landing/testimonials-section"
import StatsSection from "@/components/landing/stats-section"
import FaqSection from "@/components/landing/faq-section"
import NewsletterSection from "@/components/landing/newsletter-section"
import QuizPreviewSection from "@/components/landing/quiz-preview-section"
import { getServerSessionMock } from "@/lib/auth"
import { getUserStats } from "@/lib/user-service"
import { getTopCategories } from "@/lib/quiz-service"

export default async function HomePage() {
  // Get mock session for dummy data
  const session = await getServerSessionMock()

  // Get user stats if logged in
  const userStats = session?.user?.id ? await getUserStats(session.user.id) : null

  // Get top categories
  const topCategories = await getTopCategories()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Quiz Categories Section */}
      <QuizCategoriesSection />

      {/* Quiz Preview Section */}
      <QuizPreviewSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Test Your Nigerian Knowledge?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of users exploring Nigerian culture through our interactive quizzes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz/nigerian-culture">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
                Start a Quiz <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/api/auth/signin">
              <Button size="lg" variant="outline" className="text-lg">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

