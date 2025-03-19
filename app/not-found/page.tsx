"use client"

import { Suspense } from "react"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Sorry, we couldn’t find the page you were looking for.</p>
        <Link href="/">
          <a className="text-green-600 hover:underline">Go back home</a>
        </Link>
      </div>
    </Suspense>
  )
}
