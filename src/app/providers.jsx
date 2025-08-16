'use client';

import { ClerkProvider } from '@clerk/clerk-react';
import { Toaster } from 'react-hot-toast';

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key');
}

export default function Providers({ children }) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {children}
      <Toaster position="top-right" />
    </ClerkProvider>
  );
}