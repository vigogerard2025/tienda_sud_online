"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import CartSidebar from "./CartSidebar";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Colección" },
  { href: "/categorias", label: "Categorías" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f0eb]/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(10,10,15,0.08)] border-b border-[#c9a84c]/20"
          : "bg-[#f5f0eb]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-8 h-8 bg-[#0a0a0f] rounded-sm flex items-center justify-center shadow-md group-hover:bg-[#c9a84c] transition-colors duration-300">
              <span className="text-[#c9a84c] text-xs font-accent tracking-wider group-hover:text-[#0a0a0f] transition-colors">VS</span>
            </div>
            <div>
              <p className="font-accent text-xl text-[#0a0a0f] leading-none tracking-[0.15em]">VERO STUDIO</p>
              <p className="text-[9px] text-[#c9a84c] font-semibold tracking-[0.25em] uppercase leading-none mt-0.5">Diseño Personalizado</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-xs font-semibold text-[#0a0a0f]/70 hover:text-[#0a0a0f] tracking-widest uppercase transition-colors duration-200 rounded group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <CartSidebar />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded text-[#0a0a0f] hover:text-[#c9a84c] transition-colors flex-shrink-0"
              aria-label="Menú"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-[#c9a84c]/20 bg-[#f5f0eb]/98 backdrop-blur-md animate-fade-up">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-xs font-semibold text-[#0a0a0f]/70 hover:text-[#c9a84c] tracking-widest uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}