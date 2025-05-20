'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export const signInWithGithub = async () => {
  await signIn('github', { callbackUrl: '/' });
};

export const signOutFromGithub = async () => {
  await signOut({ callbackUrl: '/' });
};