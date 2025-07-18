"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

const top25Stocks = Array.from({ length: 25 }, (_, i) => ({
  symbol: `STK${i + 1}`,
  name: `Company ${i + 1}`,
  price: Math.round(50 + Math.random() * 300),
}));

const topGainers = [
  { symbol: "NVDA", change: "+8.23%" },
  { symbol: "META", change: "+7.12%" },
  { symbol: "AMZN", change: "+6.85%" },
  { symbol: "NVDA", change: "+8.23%" },
  { symbol: "META", change: "+7.12%" },
  { symbol: "AMZN", change: "+6.85%" },
  { symbol: "NVDA", change: "+8.23%" },
  { symbol: "META", change: "+7.12%" },
  { symbol: "AMZN", change: "+6.85%" },

];

const topLosers = [
  { symbol: "INTC", change: "-5.44%" },
  { symbol: "BABA", change: "-4.98%" },
  { symbol: "NIO", change: "-4.50%" },
  { symbol: "INTC", change: "-5.44%" },
  { symbol: "BABA", change: "-4.98%" },
  { symbol: "NIO", change: "-4.50%" },
  { symbol: "INTC", change: "-5.44%" },
  { symbol: "BABA", change: "-4.98%" },
  { symbol: "NIO", change: "-4.50%" },
  { symbol: "NIO", change: "-4.50%" },

];

const newsHeadlines = [
  "Apple stock hits all-time high as iPhone sales soar.",
  "Tesla misses delivery targets; shares dip 3%.",
  "NVIDIA announces new AI chip; investors bullish.",
  "Meta to launch AI research hub in Europe.",
  "Amazon expands logistics footprint in Canada.",
  "Google facing antitrust investigation in EU.",
];

export default function TradePage() {
  const router = useRouter();

  return (
    <main className="pt-16 px-48 pb-20 min-h-screen text-white bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 space-y-10">
      <h1 className="text-4xl sm:text-5xl font-bold m-12 font-serif drop-shadow-lg text-center">
        Trade Center
      </h1>

      {/* Top 25 Stocks List */}
      <div className="rounded-2xl bg-black/40 border border-white/20 p-6 shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Top 25 Stocks</h2>
        <ScrollArea className="h-[485px] pr-4">
          <ul className="space-y-3 text-md">
            {top25Stocks.map((stock, i) => (
              <li
                key={stock.symbol}
                onClick={() => router.push(`/Stock/${stock.symbol}`)}
                className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl cursor-pointer"
              >
                <span className="font-medium">{i + 1}. {stock.symbol}</span>
                <span className="text-gray-300">{stock.name}</span>
                <span className="font-bold">${stock.price}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      {/* Gainers and Losers */}
      <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-2xl bg-black/40 border border-white/20 p-6 shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Top Gainers</h2>
        <ScrollArea className="h-[250px] pr-4">
          <ul className="space-y-3 text-md text-green-400">
            {topGainers.map((stock, i) => (
              <li
                key={stock.symbol}
                onClick={() => router.push(`/Stock/${stock.symbol}`)}
                className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl cursor-pointer"
              >
                <span className="font-medium">{i + 1}. {stock.symbol}</span>
                <span className="font-bold">{stock.change}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      <div className="rounded-2xl bg-black/40 border border-white/20 p-6 shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-red-400">Top Losers</h2>
        <ScrollArea className="h-[250px] pr-4">
          <ul className="space-y-3 text-md text-red-400">
            {topLosers.map((stock, i) => (
              <li
                key={stock.symbol}
                onClick={() => router.push(`/Stock/${stock.symbol}`)}
                className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl cursor-pointer"
              >
                <span className="font-medium">{i + 1}. {stock.symbol}</span>
                <span className="font-bold">{stock.change}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      </div>

      {/* News Headlines */}
      <div className="bg-black/40 border border-white/20 p-6 rounded-2xl shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4">Market News</h2>
        <ScrollArea className="h-[285px] pr-4">
          <ul className="space-y-3 text-md">
            {newsHeadlines.map((headline, i) => (
              <li key={i} className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl cursor-pointer font-bold">
                {headline}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </main>
  );
}

        // <ScrollArea className="h-[485px] pr-4">
        //   <ul className="space-y-3 text-md">
        //     {top25Stocks.map((stock, i) => (
        //       <li
        //         key={stock.symbol}
        //         onClick={() => router.push(`/Stock/${stock.symbol}`)}
        //         className="flex justify-between items-center bg-white/5 hover:bg-white/10 transition p-3 rounded-xl cursor-pointer"
        //       >
        //         <span className="font-medium">{i + 1}. {stock.symbol}</span>
        //         <span className="text-gray-300">{stock.name}</span>
        //         <span className="font-bold">${stock.price}</span>
        //       </li>
        //     ))}
        //   </ul>
        // </ScrollArea>
