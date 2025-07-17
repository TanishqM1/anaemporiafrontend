import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import LayoutWrapper from "../componenets/LayoutWrapper";

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
        <body className="bg-black text-white min-h-screen flex flex-col font-serif h-full">
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
