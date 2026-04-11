import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Brewfolio",
  description: "Craft beer discovery and personal logging platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className="bg-stone-50 text-stone-900 min-h-screen">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
