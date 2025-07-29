// app/not-found.jsx
'use client'; // This marks the file as a client component

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // Import Suspense

function NotFoundContent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get('code'); // Example of using search params

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>It seems the page you're looking for doesn't exist.</p>
      {errorCode && <p>Error Code: {errorCode}</p>} {/* Display optional error code */}
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
