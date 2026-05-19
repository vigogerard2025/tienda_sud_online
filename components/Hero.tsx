"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const WHATSAPP_PEDIDOS = "51900048096";

const mensajePredefinido = encodeURIComponent(
  "✦ Hola! Quiero consultar sobre un diseño personalizado:\n\n👕 *Prenda:* \n🎨 *Diseño/idea:* \n📐 *Talla:* \n\n¿Podrían orientarme con el proceso? 🙏",
);

const DROPS = [
  { label: "Drop #03", sub: "Monochrome Series" },
  { label: "Hoodie Classic", sub: "Fleece Premium" },
  { label: "Custom Order", sub: "48h Production" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveSlide((s) => (s + 1) % DROPS.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] flex flex-col">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-transparent" />
      </div>

      {/* ── DIAGONAL GOLD LINE ── */}
      <div className="absolute top-0 right-[28%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent hidden lg:block" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 pt-28 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <div className="badge-luxury mb-8 w-fit animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              Diseño Personalizado · Trujillo, Perú
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-[0.92] tracking-tight mb-8 animate-fade-up delay-100">
              Viste lo que<br />
              <em className="text-gradient-gold not-italic">nadie más</em><br />
              tiene.
            </h1>

            {/* Subtext */}
            <p className="text-white/50 text-lg max-w-md leading-relaxed mb-10 animate-fade-up delay-200">
              Prendas únicas con diseños hechos a medida. Camisetas, hoodies y accesorios con tu identidad — producidos en 48h.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-300">
              <Link
                href="/productos"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Ver Colección
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_PEDIDOS}?text=${mensajePredefinido}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 border border-white/10"
              >
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Personalizar ahora
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-14 animate-fade-up delay-400">
              {[
                { n: "500+", l: "Clientes" },
                { n: "80+", l: "Diseños" },
                { n: "48h", l: "Entrega" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-accent text-3xl text-[#c9a84c] leading-none">{s.n}</p>
                  <p className="text-white/30 text-[10px] tracking-widest uppercase mt-1">{s.l}</p>
                </div>
              ))}
              <div className="w-px h-10 bg-white/10 mx-2 hidden sm:block" />
              <div className="hidden sm:flex -space-x-2">
                {["🧑","👩","🧔","👱"].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-[#1e1e2e] border border-[#c9a84c]/20 flex items-center justify-center text-sm">{e}</div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — rotating drops */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-3 animate-fade-up delay-200">
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c]/60 uppercase font-semibold mb-2">Últimas prendas</p>
            {DROPS.map((d, i) => (
              <div
                key={d.label}
                className={`relative border px-6 py-5 transition-all duration-500 cursor-pointer group ${
                  activeSlide === i
                    ? "border-[#c9a84c]/40 bg-[#c9a84c]/05"
                    : "border-white/06 hover:border-white/15"
                }`}
                style={{ borderRadius: "4px" }}
                onClick={() => setActiveSlide(i)}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 ${activeSlide === i ? "bg-[#c9a84c]" : "bg-transparent"}`} />
                <p className={`font-display text-xl transition-colors duration-300 ${activeSlide === i ? "text-white" : "text-white/40"}`}>{d.label}</p>
                <p className="text-[11px] text-white/30 tracking-widest uppercase mt-1">{d.sub}</p>
              </div>
            ))}

            {/* Hero product image */}
            <div className="relative mt-4 overflow-hidden" style={{ borderRadius: "4px", aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=700&q=80"
                alt="Drop exclusivo"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[9px] tracking-[0.25em] text-[#c9a84c] uppercase font-semibold">Drop Exclusivo</p>
                <p className="font-display text-2xl text-white">Monochrome #03</p>
              </div>
              <div className="absolute top-4 right-4 badge-luxury text-[9px]">Limitado</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM MARQUEE ── */}
      <div className="relative z-10 border-t border-[#c9a84c]/10 py-4 overflow-hidden bg-[#0a0a0f]/80 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8 text-[10px] tracking-[0.2em] text-white/20 uppercase font-semibold">
              <span className="text-[#c9a84c]/50">✦</span>
              <span>Diseño exclusivo</span>
              <span className="text-[#c9a84c]/50">✦</span>
              <span>100% algodón premium</span>
              <span className="text-[#c9a84c]/50">✦</span>
              <span>Producción en 48h</span>
              <span className="text-[#c9a84c]/50">✦</span>
              <span>Personalización total</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}