"use client";

import { useUser } from "@clerk/nextjs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { format } from "date-fns";

type Insight = {
  id: number;
  date: Date;
  filters: string[];
  context: string;
  hyperparams: { risk: number; horizon: number };
  response: string;
};

export default function InsightsPage() {
  const { user } = useUser();

  const [context, setContext] = useState("");
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const dummyInsights: Insight[] = [
    {
      id: 1,
      date: new Date(),
      filters: ["Avoid Oil & Gas", "Focus on Tech"],
      context: "Looking for long-term ESG stocks.",
      hyperparams: { risk: 50, horizon: 120 },
      response: "Consider MSFT, NVDA, and TSLA for your profile...",
    },
  ];

  return (
    <main className="bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 text-white flex flex-col items-center px-6 pb-20 pt-24 min-h-screen">
      <div className="w-full max-w-7xl flex justify-center items-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif drop-shadow-lg mr-110">
          Investment Insights
        </h1>
        <Button className="bg-white/10 border border-white/20 rounded-full text-white px-6 py-2 hover:bg-white/20 hover:border-white/30 transition mr-4">
          Run Insights
        </Button>
        <Button className="bg-white/10 border border-white/20 rounded-full text-white px-6 py-2 hover:bg-white/20 hover:border-white/30 transition mr-4">
          Save Insight
        </Button>
      </div>

      {/* Controls */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mb-10">
        {/* Hyperparameters */}
        <div className="flex-1 rounded-2xl bg-black/40 p-6 border border-white/30 backdrop-blur-md shadow-2xl">
          <h2 className="text-xl font-semibold mb-6">Hyperparameters</h2>
          <div className="space-y-8 font-semi-bold">
            <div>
              <p className="text-sm mb-2">Risk Tolerance</p>
              <Slider defaultValue={[1]} max={10} step={1} />
            </div>
            <div>
              <p className="text-sm mb-2">Time Horizon (months)</p>
              <Slider defaultValue={[3]} max={12} step={1} />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex-1 rounded-2xl bg-black/40 p-6 border border-white/30 backdrop-blur-md shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Filters</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-40 bg-grey/40">
                  Select Filters
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-zinc-800 text-white max-h-[500px] overflow-y-auto">
                <DialogTitle className="sr-only">Select Filters</DialogTitle>
                <h3 className="text-lg font-semibold mb-4">
                  Avoid These Categories
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  {[
                    "Oil & Gas",
                    "Cigarettes & Tobacco",
                    "Weapons",
                    "Mining",
                    "Gambling",
                    "Fast Fashion",
                    "Airlines",
                    "Real Estate",
                    "Cryptocurrency",
                    "Fossil Fuels",
                    "Traditional Banks",
                    "Defense",
                  ].map((item, i) => (
                    <label key={i} className="flex gap-2 items-center">
                      <Checkbox
                        checked={selectedFilters.includes(item)}
                        onCheckedChange={() => toggleFilter(item)}
                      />{" "}
                      {item}
                    </label>
                  ))}
                </div>
                <DialogTrigger asChild>
                <Button
                  onClick={() => {}}
                  className="mt-2 w-full bg-white/10 hover:bg-white/20"
                >
                  Save Changes
                </Button>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* AI Output & Context */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 mb-10">
        <div className="flex-[3] rounded-2xl bg-black/40 p-6 border border-white/30 backdrop-blur-md shadow-2xl h-[400px] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">AI-Powered Insights</h2>
          <p className="text-sm text-gray-300">
            (Personalized GPT response will go here.)
          </p>
        </div>

        <div className="flex-1 rounded-2xl bg-black/40 p-6 border border-white/30 backdrop-blur-md shadow-2xl flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Add Context</h2>
          <ScrollArea className="w-full max-h-[250px] rounded-md border border-white/10 bg-white/5 p-1">
            <TextareaAutosize
              value={context}
              onChange={(e) => setContext(e.target.value)}
              minRows={3}
              maxRows={12}
              placeholder="Optional: Enter any specific goals or constraints..."
              className="w-full resize-none overflow-hidden p-2 text-sm text-white bg-transparent focus:outline-none"
            />
          </ScrollArea>
        </div>
      </div>

      {/* Insight History */}
      <div className="w-full max-w-7xl rounded-2xl bg-black/40 p-6 border border-white/30 backdrop-blur-md shadow-2xl h-[220px] overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Insight History</h2>
        <div className="flex gap-4 text-sm text-white">
          {dummyInsights.map((insight) => (
            <Dialog key={insight.id}>
              <DialogTrigger asChild>
                <div className="bg-white/10 rounded-xl px-4 py-3 min-w-[250px] hover:bg-white/20 cursor-pointer transition">
                  <p className="font-semibold mb-1">Insight {insight.id}</p>
                  <p className="text-xs text-gray-300">
                    {format(insight.date, "MMM d, yyyy, h:mm a")}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-zinc-800 text-white max-w-xl">
                <DialogTitle className="sr-only">Insight Details</DialogTitle>
                <h2 className="text-xl font-semibold mb-4">
                  Insight Details (#{insight.id})
                </h2>
                <p className="text-sm mb-2">
                  <strong>Filters:</strong> {insight.filters.join(", ")}
                </p>
                <p className="text-sm mb-2">
                  <strong>Context:</strong> {insight.context}
                </p>
                <p className="text-sm mb-2">
                  <strong>Hyperparameters:</strong> Risk{" "}
                  {insight.hyperparams.risk}, Horizon{" "}
                  {insight.hyperparams.horizon} days
                </p>
                <p className="text-sm mt-4">
                  <strong>Response:</strong> {insight.response}
                </p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  );
}
