"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <>
      {!isLanding && <Navbar />}
      {children}
      {!isLanding && <Footer />}
    </>
  );
}
