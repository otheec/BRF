"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/catalog", label: "Catalog" },
  { href: "/breweries", label: "Breweries" },
  { href: "/venues", label: "Venues" },
  { href: "/beers", label: "Beers" },
  { href: "/log", label: "My Log" },
  { href: "/news", label: "News" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="bg-stone-50 border-b border-stone-200 sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto font-sans tracking-tight">
        <div className="flex items-center gap-8">
          <Link href="/catalog" className="text-2xl font-black text-orange-600 italic tracking-tighter">
            Brewfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-orange-600 font-bold border-b-2 border-orange-600 pb-1 transition-colors duration-200"
                      : "text-stone-600 font-medium hover:text-orange-500 transition-colors duration-200 ease-in-out"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-lg">search</span>
            <input
              className="pl-10 pr-4 py-2 bg-stone-100 border-none rounded-full text-sm focus:ring-2 focus:ring-orange-500 w-64"
              placeholder="Search brews..."
              type="text"
            />
          </div>
          <button className="p-2 text-stone-600 hover:text-orange-500 transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}
