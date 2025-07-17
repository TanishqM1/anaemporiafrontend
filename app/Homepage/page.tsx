"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="flex flex-col items-center justify-start px-4 py-12 text-center min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 font-serif">
        Welcome back, {user?.firstName || "Trader"}!
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
        This is your Anaemporia dashboard. Track your mock portfolio, explore AI-powered insights, and start simulated trading.
      </p>

      {/* Example placeholder cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="rounded-xl bg-white/5 backdrop-blur p-6 border border-white/10">
          <h2 className="text-lg font-medium mb-2">Your Portfolio</h2>
          <p className="text-gray-400 text-sm">Monitor your current holdings and total value.</p>
        </div>
        <div className="rounded-xl bg-white/5 backdrop-blur p-6 border border-white/10">
          <h2 className="text-lg font-medium mb-2">Market Trends</h2>
          <p className="text-gray-400 text-sm">Check top gainers, losers, and news.</p>
        </div>
        <div className="rounded-xl bg-white/5 backdrop-blur p-6 border border-white/10">
          <h2 className="text-lg font-medium mb-2">AI Insights</h2>
          <p className="text-gray-400 text-sm">Discover personalized AI strategy recommendations.</p>
        </div>
      </div>

      <div className="mt-12">
        <UserButton />
      </div>
    </main>
  );
}
