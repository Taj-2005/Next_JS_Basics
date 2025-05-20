'use client';

import { signInWithGithub, signOutFromGithub } from '@/app/lib/actions/route';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-10">
      <h1 className="text-2xl font-bold">NextAuth + GitHub Auth</h1>

      {session ? (
        <>
          <p className="text-lg">Signed in as {session.user?.email}</p>
          <button
            onClick={signOutFromGithub}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={signInWithGithub}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Sign In with GitHub
        </button>
      )}
    </main>
  );
}