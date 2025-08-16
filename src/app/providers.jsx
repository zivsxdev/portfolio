'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }) {
  return (
    <ClerkProvider>
      {children}
      <Toaster position="top-right" />
    </ClerkProvider>
  );
}