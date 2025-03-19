// 404/page.tsx or your layout component
"use client";
import { Suspense } from "react";
import NotFoundContent from "./NotFoundContent"; // Component that uses useSearchParams

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}