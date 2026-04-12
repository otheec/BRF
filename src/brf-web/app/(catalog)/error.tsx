"use client";

import ErrorState from "@/components/ErrorState";

export default function CatalogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorState retry={reset} />;
}
