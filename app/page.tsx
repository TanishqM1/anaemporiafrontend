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
    <main className="bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white flex flex-1 flex-col items-center justify-center text-center px-4 min-h-screen">
      <SignedOut>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight font-serif">
          Welcome to Anaemporia
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto font-light">
          Simulate trades, unlock AI-powered strategies, and master the markets
          in a safe, elegant sandbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SignInButton mode="redirect" forceRedirectUrl={"/Homepage"}>
            <button
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-base h-12 px-8 transition 
                   hover:bg-white/20 hover:border-white/30 hover:shadow-inner hover:shadow-white/10 hover:cursor-pointer"
            >
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="redirect" forceRedirectUrl={"/Homepage"}>
            <button
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-base h-12 px-8 transition 
                   hover:bg-white/20 hover:border-white/30 hover:shadow-inner hover:shadow-white/10 hover:cursor-pointer"
            >
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 tracking-tight font-serif">
          Already Logged In!
        </h1>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium text-base h-12 px-8 transition 
                   hover:bg-white/20 hover:border-white/30 hover:shadow-inner hover:shadow-white/10 hover:cursor-pointer mt-10"
                   onClick={() => (window.location.href = "/Homepage")}>
          Homepage
        </button>
      </SignedIn>
    </main>
  );
}
