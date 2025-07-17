"use client";

import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <main className="bg-gradient-to-tr from-black via-gray-900 to-purple-800 text-white flex flex-col items-center justify-center text-center px-4 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-bold m-12 font-serif drop-shadow-lg">
        Welcome back, {user?.firstName || "[Name]"}!
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-8xl px-44">
        {/* Larger card for lifetime graph */}
        <div className="flex-1 rounded-2xl bg-white/30 backdrop-blur-md p-6 border border-black/60 h-[700px] shadow-xl">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Lifetime Performance
          </h2>
          <p className="text-gray-200 text-sm">
            Graph showing your total value, selected portfolio, and timeline.
          </p>
        </div>

        {/* Smaller card for bought stocks list */}
        <div className="w-full sm:w-[300px] rounded-2xl bg-white/30 backdrop-blur-md p-6 border border-black/60 h-[600px] overflow-y-auto mt-14 shadow-xl">
          <h2 className="text-xl font-semibold mb-2 text-white">Your Stocks</h2>
          <p className="text-gray-200 text-sm">
            Scrollable view of stocks you've bought.
          </p>
        </div>
      </div>

      {/* Account Cards Section - Rectangular full-width */}
      <div className="w-full max-w-8xl mt-10 flex flex-col gap-6 px-44 text-left m-10">
        {/* Account 1 */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg w-full">
          <h3 className="text-xl font-semibold text-white mb-1">
            Growth Portfolio
          </h3>
          <p className="text-gray-300 text-sm">
            Focused on tech and emerging markets. The rest of this card should show value, net change, last modified, and percentage gain or loss.
          </p>
        </div>

        {/* Account 2 */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg w-full">
          <h3 className="text-xl font-semibold text-white mb-1">
            Dividend Portfolio
          </h3>
          <p className="text-gray-300 text-sm">
            Stable income from blue-chip dividends.
          </p>
        </div>

        {/* Account 3 */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg w-full">
          <h3 className="text-xl font-semibold text-white mb-1">
            TFSA Portfolio
          </h3>
          <p className="text-gray-300 text-sm">Tax-free savings investments.</p>
        </div>
      </div>

    </main>
  );
}
