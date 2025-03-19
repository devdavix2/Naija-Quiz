"use client"

import { Suspense } from "react"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">Sorry, we couldn’t find the page you’re looking for.</p>
        <Link href="/" className="text-green-600 hover:underline">
          Go back home
        </Link>
      </div>
    </Suspense>
  )
}
