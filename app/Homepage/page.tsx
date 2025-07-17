"use client";

import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="flex flex-col items-center justify-start px-4 py-12 text-center min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 font-serif">
        Welcome back, {user?.firstName || "Trader"}! 
        {/* replace with SQL First Name later. */}
      </h1>


      {/* Example placeholder cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mt-8">
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

    </main>
  );
}
