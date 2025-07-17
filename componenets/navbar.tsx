"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 backdrop-blur-md bg-black/30">
      {/* Left side: Logo and nav links */}
      <div className="flex items-center gap-8">
        {/* Placeholder logo */}
        <Link href="/">
          <span className="text-xl font-bold tracking-tight">Anaemporia</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/dashboard" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/trade" className="hover:text-gray-300 transition">Trade</Link>
          <Link href="/account" className="hover:text-gray-300 transition">Account</Link>
          <Link href="/insights" className="hover:text-gray-300 transition">Insights</Link>
        </div>
      </div>

      {/* Right side: Search, status, user */}
      <div className="flex items-center gap-4">
        {/* Placeholder status indicator */}
        <div className="h-3 w-3 rounded-full bg-green-500" title="Market Open"></div>

        {/* Search bar placeholder */}
        <input
          type="text"
          placeholder="Search stocks..."
          className="hidden sm:block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-700 transition"
        />

        {/* Clerk user button */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
