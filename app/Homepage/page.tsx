"use client";

import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white flex flex-col items-center justify-center text-center px-4 min-h-screen pt-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 font-serif drop-shadow-lg">
        Welcome back, {user?.firstName || "[Name]"}!
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-8xl px-44">
        {/* Larger card for lifetime graph */}
        <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 h-[700px] shadow-2xl">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Lifetime Performance
          </h2>
          <p className="text-gray-200 text-sm">
            Graph showing your total value, selected portfolio, and timeline.
          </p>
        </div>

        {/* Smaller card for bought stocks list */}
        <div className="w-full sm:w-[300px] rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 h-[600px] overflow-y-auto mt-14 shadow-2xl">
          <h2 className="text-xl font-semibold mb-2 text-white">Your Stocks</h2>
          <p className="text-gray-200 text-sm">
            Scrollable view of stocks you've bought.
          </p>
        </div>
      </div>

      {/* Account Cards Section - Rectangular full-width */}
      <div className="w-full max-w-8xl mt-10 flex flex-col gap-6 px-44 text-left m-10 mb-30">
        {/* Account  */}
        <div className="rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 shadow-xl w-full">
          <h3 className="text-xl font-semibold text-white mb-1">
            Growth Portfolio
          </h3>
          <p className="text-gray-300 text-sm">
            Focused on tech and emerging markets. The rest of this card should show value, net change, last modified, and percentage gain or loss.
          </p>
        </div>

      </div>
    </main>
  );
}
