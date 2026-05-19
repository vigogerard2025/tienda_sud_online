"use client";

import Link from "next/link";

interface CategoryCardProps {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
  image: string;
}

export default function CategoryCard({ name, slug, icon, description, color, image }: CategoryCardProps) {
  return (
    <Link
      href={`/categorias/${slug}`}
      className="relative bg-[#0a0a0f] overflow-hidden group block aspect-[3/4] sm:aspect-[4/5]"
      style={{ borderRadius: "4px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

      {/* Gold accent top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <p className="text-3xl mb-2 group-hover:-translate-y-1 transition-transform duration-300">{icon}</p>
        <h3 className="font-display text-xl sm:text-2xl text-white leading-tight mb-1 group-hover:text-[#c9a84c] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-white/50 text-xs mb-3 leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Ver colección</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}