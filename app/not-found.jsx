import { Suspense } from "react";
import SearchHandler from "./SearchHandler";
// import SearchHandler from "./components/SearchHandler"; // adjust path if needed

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
