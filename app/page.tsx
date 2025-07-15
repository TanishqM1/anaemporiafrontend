"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-tr from-black via-gray-900 to-purple-800 text-white flex flex-1 flex-col items-center justify-center text-center px-4 min-h-screen">
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight font-serif">
        Welcome to Anaemporia
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto font-light">
        Simulate trades, unlock AI-powered strategies, and master the markets in
        a safe, elegant sandbox.
      </p>

      <SignedOut>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SignInButton>
            <button
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-base h-12 px-8 transition 
                   hover:bg-white/20 hover:border-white/30 hover:shadow-inner hover:shadow-white/10"
            >
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-base h-12 px-8 transition 
                   hover:bg-white/20 hover:border-white/30 hover:shadow-inner hover:shadow-white/10"
            >
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <UserButton />
        <p className="mt-4 text-sm text-gray-300">
          You're signed in — visit your dashboard to start exploring!
        </p>
      </SignedIn>
    </main>
  );
}
