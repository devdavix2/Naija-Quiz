// NotFoundContent.tsx
"use client";
import { useSearchParams } from "next/navigation";

export default function NotFoundContent() {
  const searchParams = useSearchParams();
  // You can now use searchParams safely.
  return <div>Error: Page Not Found. Query: {searchParams.get("q")}</div>;
}