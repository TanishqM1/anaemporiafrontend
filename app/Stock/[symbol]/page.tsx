"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function StockDetailPage() {
  const { symbol } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [mode, setMode] = useState<"buy" | "sell">("buy");

  const stockInfo = {
    name: "Sample Company",
    currentPrice: 123.45,
    description:
      "This is a placeholder stock detail description. In a real app, pull this from an API.",
    midPrice: 122.87,
    high52: 150.12,
    low52: 95.33,
    dividendYield: "1.8%",
    marketCap: "2.1T",
    peRatio: "31.2",
    history: [100, 105, 110, 115, 120, 123],
  };

  const newsHeadlines = [
    "Apple stock hits all-time high as iPhone sales soar.",
    "Tesla misses delivery targets; shares dip 3%.",
    "NVIDIA announces new AI chip; investors bullish.",
    "Meta to launch AI research hub in Europe.",
    "Amazon expands logistics footprint in Canada.",
    "Google facing antitrust investigation in EU.",
  ];

  return (
    <main className="pt-32 px-10 pb-20 min-h-screen text-white bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 space-y-12">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold font-serif drop-shadow-lg mb-2">
          {symbol}
        </h1>
        <p className="text-lg text-gray-300">{stockInfo.name}</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Symbol + Overview + Graph */}
        <div className="lg:col-span-2 bg-black/40 border border-white/20 p-6 rounded-2xl shadow-2xl backdrop-blur-md space-y-6 h-full">
          <div>
            <h2 className="text-xl font-semibold mb-2">Stock Overview</h2>
            <p className="text-sm text-gray-300">{stockInfo.description}</p>
          </div>
          <div>
            <p className="text-md font-bold mb-1">
              Current Price: ${stockInfo.currentPrice.toFixed(2)}
            </p>
            <div className="text-sm text-gray-400">
              (Graph of historical prices will go here)
            </div>
            <div className="h-[200px] border border-white/10 mt-4 rounded-lg bg-white/5 flex items-center justify-center text-sm text-gray-400">
              [Chart Placeholder]
            </div>
          </div>
        </div>

        {/* Right: Buy/Sell Card */}
        <div className="hey"><p>create and place card to buy/sell here.</p></div>
      </div>

      {/* Bottom: Stock Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-black/40 border border-white/20 p-6 rounded-2xl shadow-xl backdrop-blur-md space-y-3">
          <h2 className="text-xl font-semibold mb-2">Key Stats</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>📉 Mid Price: ${stockInfo.midPrice}</li>
            <li>📈 52-Week High: ${stockInfo.high52}</li>
            <li>📉 52-Week Low: ${stockInfo.low52}</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-black/40 border border-white/20 p-6 rounded-2xl shadow-xl backdrop-blur-md space-y-3">
          <h2 className="text-xl font-semibold mb-2">Fundamentals</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>🏦 Market Cap: {stockInfo.marketCap}</li>
            <li>💸 Dividend Yield: {stockInfo.dividendYield}</li>
            <li>📊 P/E Ratio: {stockInfo.peRatio}</li>
          </ul>
        </div>
      </div>

      {/* NEWS */}

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        {/* Card 1 */}
        <div className="bg-black/40 border border-white/20 p-6 rounded-2xl shadow-xl backdrop-blur-md space-y-3">
          <h2 className="text-xl font-semibold mb-4">{stockInfo.name} News</h2>
          <ScrollArea className="h-[285px] pr-4">
            <ul className="space-y-3 text-md">
              {newsHeadlines.map((headline, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl cursor-pointer font-bold"
                >
                  {headline}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
