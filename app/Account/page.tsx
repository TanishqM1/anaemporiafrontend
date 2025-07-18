"use client";

import { useUser } from "@clerk/nextjs";

export default function AccountPage() {
  const { user } = useUser();

  return (
    <main className="bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white flex flex-col items-center px-4 pb-16 min-h-screen pt-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 font-serif drop-shadow-lg text-center">
        Your Account
      </h1>

      {/* Top Row: Personal Info + Account Stats */}
      <div className="w-full max-w-8xl flex flex-col lg:flex-row gap-6 px-44">
        {/* Personal Info */}
        <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Personal Information</h2>
          <div className="space-y-2 text-sm text-gray-200">
            <p>
              <span className="font-medium text-white">First Name:</span>{" "}
              {user?.firstName || "—"}
            </p>
            <p>
              <span className="font-medium text-white">Last Name:</span>{" "}
              {user?.lastName || "—"}
            </p>
            <p>
              <span className="font-medium text-white">Email:</span>{" "}
              {user?.emailAddresses?.[0]?.emailAddress || "—"}
            </p>
          </div>
        </div>

        {/* Account Stats */}
        <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Account Stats</h2>
          <div className="space-y-2 text-sm text-gray-200">
            <p>
              <span className="font-medium text-white">Net Buy:</span> $12,500.00
            </p>
            <p>
              <span className="font-medium text-white">Delta Change:</span> +$1,240.32
            </p>
            <p>
              <span className="font-medium text-white">% Change:</span> +9.92%
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row: Portfolio View + Distribution */}
      <div className="w-full max-w-8xl mt-10 flex flex-col lg:flex-row gap-6 px-44 text-left">
        {/* Portfolio + Stocks */}
        <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 shadow-2xl h-[500px] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-white">Your Portfolio</h2>
          <div className="space-y-2 text-sm text-gray-200">
            <p>📈 AAPL – 10 shares @ $190</p>
            <p>📈 TSLA – 5 shares @ $250</p>
            <p>📈 GOOGL – 8 shares @ $135</p>
            <p>📈 NVDA – 3 shares @ $1,100</p>
            <p>📈 AMZN – 12 shares @ $140</p>
            <p>📈 META – 7 shares @ $310</p>
            <p>📈 SHOP – 15 shares @ $85</p>
            <p>📈 MSFT – 4 shares @ $370</p>
            <p>📈 AMD – 6 shares @ $160</p>
          </div>
        </div>

        {/* Purchase Distribution */}
        <div className="flex-1 rounded-2xl bg-black/40 backdrop-blur-md p-6 border border-white/30 shadow-2xl h-[500px] flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4 text-white">Purchase Distribution</h2>
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm border border-white/10 rounded-lg bg-white/5">
            Pie chart placeholder
          </div>
        </div>
      </div>
    </main>
  );
}
