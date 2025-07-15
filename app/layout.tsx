import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Anaemporia — Mock Trading, Real Insights",
  description: "Simulate trading, explore AI-powered strategies, and master the markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="bg-gradient-to-br from-black via-purple-900 to-purple-700 text-white min-h-screen flex flex-col font-serif h-full">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
