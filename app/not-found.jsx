
// app/not-found.tsx or app/404.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchHandler() {
  const params = useSearchParams();
  const query = params.get("q");

  return <p>Search: {query}</p>;
}

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHandler />
      </Suspense>
    </div>
  );
}
