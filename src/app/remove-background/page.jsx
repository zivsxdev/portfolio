'use client';

import RemoveBackground from '../../components/RemoveBackground';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function RemoveBackgroundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">AI Background Remover</h1>
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6">
        <SignedIn>
          <RemoveBackground />
        </SignedIn>
        <SignedOut>
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Please sign in to use the background remover
            </h2>
            <SignInButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium">
                Sign In to Continue
              </button>
            </SignInButton>
          </div>
        </SignedOut>
      </main>
    </div>
  );
}