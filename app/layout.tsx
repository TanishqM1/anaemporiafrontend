import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import Navbar from "@/componenets/navbar";
import Footer from "@/componenets/Footer";

export const metadata: Metadata = {
  title: "Anaemporia — Mock Trading, Real Insights",
  description:
    "Simulate trading, explore AI-powered strategies, and master the markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen bg-gradient-to-tr from-black via-gray-900 to-purple-800 text-white">
          {/* NAVIGATION */}
          <Navbar/>

          {/* Main content grows to fill space */}
          <main className="flex-grow pt-15">{children}</main>

          {/* Footer stays at the bottom */}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
