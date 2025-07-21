"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { toZonedTime } from "date-fns-tz";

function MarketStatus() {
  const now: Date = new Date();
  const time = toZonedTime(now, "America/New_York");

  const day = time.getDay();
  const hours = time.getHours();
  const mins = time.getMinutes();

  const isWeekday = day >= 1 && day <= 5;
  const isOpen = (hours > 9 || (hours == 9 && mins >= 30)) && hours < 16;

  const status = isWeekday && isOpen;

  // The market is open if it is 1) a weekday, 2) between 9:30 and 4:00 PM
  if (status) {
    return (
      <div
        className="h-3 w-3 rounded-full bg-green-500"
        title="Market Open"
      ></div>
    );
  } else {
    return (
      <div
        className="h-3 w-3 rounded-full bg-red-500"
        title="Market Closed"
      ></div>
    );
  }
}

export default function Navbar() {
  return (
    // <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
    <nav className="bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 w-full px-12 py-5 flex items-center justify-between border-2 border-white/10 backdrop-blur-md bg-black/50 fixed top-0 left-0 z-50 border-b-grey shadow-xl">
      {/* Left side: Logo and nav links */}
      <div className="flex items-center gap-8">
        {/* Placeholder logo */}
        <Link href="/Homepage">
          <span className="text-2xl font-bold tracking-tight">Anaemporia</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-lg font-bold">
          <Link href="/Homepage" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/Account" className="hover:text-gray-300 transition">
            Account
          </Link>
          <Link href="/Trade" className="hover:text-gray-300 transition">
            Trade
          </Link>
          <Link href="/Insights" className="hover:text-gray-300 transition">
            Insights
          </Link>
        </div>
      </div>

      {/* Right side: Search, status, user */}
      <div className="flex items-center gap-4">
        {/* Placeholder status indicator */}
        <div>
          <MarketStatus />
        </div>

        {/* Search bar placeholder */}
        <input
          type="text"
          placeholder="Search stocks..."
          className="hidden sm:block w-64 sm:w-96 rounded-full bg-black/40 backdrop-blur border-2 border-transparent bg-clip-padding text-white placeholder-white px-6 py-2 text-sm focus:outline-none"
        />

        {/* Clerk user button */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
