"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartSidebar() {
  const [mounted, setMounted] = useState(false);
  const getTotalItems = useCartStore((s) => s.getTotalItems);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <Link
        href="/cart"
        className="relative flex items-center gap-2 bg-[#0a0a0f] text-[#f5f0eb] px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase border border-transparent hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0f] transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span className="hidden sm:inline">Bolsa</span>
      </Link>
    );
  }

  const count = getTotalItems();

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 bg-[#0a0a0f] text-[#f5f0eb] px-4 py-2.5 text-[10px] font-semibold tracking-widest uppercase border border-transparent hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0f] transition-all duration-300 group"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span className="hidden sm:inline">Bolsa</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-[#c9a84c] text-[#0a0a0f] text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-[#f5f0eb]">
          {count}
        </span>
      )}
    </Link>
  );
}