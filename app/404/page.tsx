'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerNotFoundPage />
    </Suspense>
  );
}

function InnerNotFoundPage() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('error');

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
}
