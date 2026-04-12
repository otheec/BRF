"use client";

import ErrorState from "@/components/ErrorState";

export default function NewsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorState retry={reset} />;
}
