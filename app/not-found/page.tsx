'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorContent />
    </Suspense>
  )
}

function ErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      {error && <p>Error message: {error}</p>}
    </div>
  )
}
