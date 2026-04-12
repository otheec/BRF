"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const bottomLinks = [
  { href: "/catalog", label: "Katalog", icon: "sports_bar" },
  { href: "/breweries", label: "Pivovary", icon: "factory" },
  { href: "/venues", label: "Místa", icon: "location_on" },
  { href: "/log", label: "Deník", icon: "book" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 flex justify-around items-center h-16 px-4 z-50">
      {bottomLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center gap-1 ${isActive ? "text-orange-700" : "text-stone-500"}`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {link.icon}
            </span>
            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
