"use client";

import Link from "next/link";

const categories = [
  {
    id: "1",
    name: "Camisetas",
    slug: "camisetas",
    icon: "👕",
    description: "Diseños únicos en algodón 100%.",
    color: "from-slate-800 to-slate-600",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80",
    tag: "Bestseller",
  },
  {
    id: "2",
    name: "Hoodies",
    slug: "hoodies",
    icon: "🧥",
    description: "Abrigo con estilo, fleece premium.",
    color: "from-zinc-800 to-zinc-600",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=700&q=80",
    tag: "",
  },
  {
    id: "3",
    name: "Gorras",
    slug: "gorras",
    icon: "🧢",
    description: "Dad caps y bucket hats bordados.",
    color: "from-stone-800 to-stone-600",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&q=80",
    tag: "",
  },
  {
    id: "4",
    name: "Básicos",
    slug: "polos-basicos",
    icon: "👕",
    description: "El lienzo perfecto para tu estilo.",
    color: "from-neutral-800 to-neutral-600",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=700&q=80",
    tag: "",
  },
  {
    id: "5",
    name: "Estampados",
    slug: "estampados",
    icon: "🎨",
    description: "Arte que se lleva puesto.",
    color: "from-[#7c5cbf] to-[#4a3080]",
    image: "https://images.unsplash.com/photo-1581791534721-e599a74a0f67?w=700&q=80",
    tag: "Nuevo",
  },
  {
    id: "6",
    name: "Accesorios",
    slug: "accesorios",
    icon: "👜",
    description: "Tote bags, parches y más detalles.",
    color: "from-[#8a6e2e] to-[#c9a84c]",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=700&q=80",
    tag: "",
  },
  {
    id: "7",
    name: "Edición Limitada",
    slug: "edicion-limitada",
    icon: "⚡",
    description: "Drops exclusivos. Pocas unidades.",
    color: "from-[#8a2840] to-[#d4607a]",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=700&q=80",
    tag: "Limitado",
  },
  {
    id: "8",
    name: "Personalizar",
    slug: "personalizacion",
    icon: "✨",
    description: "Tu diseño, tu prenda, tu historia.",
    color: "from-[#0d8f80] to-[#2dd4bf]",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=80",
    tag: "Popular",
  },
];

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">

      {/* ── HEADER ── */}
      <div className="relative overflow-hidden py-28 px-6 border-b border-white/06">
        {/* background pattern */}
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase font-semibold mb-4">
            Explorar
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-5">
            Todas las<br /><em className="text-gradient-gold">Categorías</em>
          </h1>
          <p className="text-white/40 text-base max-w-sm leading-relaxed">
            Desde básicos esenciales hasta drops exclusivos — encuentra tu prenda perfecta.
          </p>
        </div>

        {/* decorative number */}
        <div className="absolute bottom-6 right-8 font-accent text-[160px] leading-none text-white/03 select-none hidden lg:block">
          VS
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/06">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="relative group bg-[#0a0a0f] overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              {/* BG image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-[#0a0a0f]/10 group-hover:via-[#0a0a0f]/40 transition-all duration-500" />

              {/* Gold line top on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Tag */}
              {cat.tag && (
                <div className="absolute top-4 right-4 badge-luxury text-[9px] py-1 px-3">
                  {cat.tag}
                </div>
              )}

              {/* Number watermark */}
              <div className="absolute top-4 left-5 font-accent text-6xl text-white/05 leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-2xl mb-3 group-hover:-translate-y-1 transition-transform duration-300">
                  {cat.icon}
                </p>
                <h2 className="font-display text-2xl text-white mb-1 group-hover:text-[#c9a84c] transition-colors duration-300 leading-tight">
                  {cat.name}
                </h2>
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase font-semibold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span>Ver colección</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── CUSTOM ORDER BANNER ── */}
        <div className="mt-12 border border-[#c9a84c]/20 p-10 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-[#c9a84c]/40 transition-colors" style={{ borderRadius: "4px" }}>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-2">Servicio especial</p>
            <h3 className="font-display text-3xl text-white mb-2">¿Tienes un diseño en mente?</h3>
            <p className="text-white/40 text-sm max-w-md">
              Enviamos cualquier arte, logo o ilustración a tu prenda favorita. Coordina por WhatsApp y lo hacemos realidad en 48 horas.
            </p>
          </div>
          <Link
            href="/contacto"
            className="btn-gold flex-shrink-0 whitespace-nowrap inline-flex items-center gap-2"
          >
            Empezar ahora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}