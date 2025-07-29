"use client";

import { useSearchParams } from "next/navigation";

export default function SearchHandler() {
  const params = useSearchParams();
  const query = params.get("q");

  return <p>Search: {query}</p>;
}
