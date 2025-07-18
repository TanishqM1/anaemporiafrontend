"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function StockDetailPage() {
  const { symbol } = useParams();
  const [quantity, setQuantity] = useState(0);

  const stockInfo = {
    name: "Sample Company",
    currentPrice: 123.45,
    description:
      "This is a placeholder stock detail description. In a real app, pull this from an API.",
    history: [100, 105, 110, 115, 120, 123], // Placeholder
  };

  return (
    <main className="pt-32 px-10 pb-20 min-h-screen text-white bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900">
      <h1 className="text-4xl font-bold mb-4 font-serif drop-shadow-lg">
        {symbol}
      </h1>
      <p className="text-lg text-gray-300 mb-6">{stockInfo.name}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Chart and Info */}
        <div className="rounded-2xl bg-black/40 border border-white/20 p-6 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">Stock Overview</h2>
          <p className="text-sm text-gray-300 mb-4">{stockInfo.description}</p>
          <p className="text-md font-bold mb-2">
            Current Price: ${stockInfo.currentPrice.toFixed(2)}
          </p>
          <div className="text-sm text-gray-400">
            (Graph of historical prices will go here)
          </div>
        </div>

        {/* Right side - Buy/Sell Interface */}
        <div className="rounded-2xl bg-black/40 border border-white/20 p-6 shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">Buy / Sell</h2>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="bg-white/10 text-white"
            />
            <div className="flex gap-4">
              <Button className="bg-green-600 hover:bg-green-700 w-full">
                Buy
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                Sell
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
