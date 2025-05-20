'use client';
import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="p-4 text-red-600">
      Auth error: <strong>{error}</strong>
    </div>
  );
}
