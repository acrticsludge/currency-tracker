"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Currency", href: "/currency" },
  { name: "Crypto", href: "/crypto" },
  { name: "Currency Converter", href: "/convert" },
];
export default function NavBar() {
  return (
    <nav className="w-full border-b bg-white backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex text-xl text-black font-semibold">
          <Image
            src="/logo-light.ico"
            alt="Currency Tracker Logo"
            width={32}
            height={32}
            priority
          />
          <div>CurrencyTracker</div>
        </Link>

        <div className="flex gap-6 text-black font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
