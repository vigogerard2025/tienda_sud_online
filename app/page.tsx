import Hero from "@/components/Hero";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

const featuredProducts = [
  {
    id: "1",
    name: "Camiseta Urban Sketch",
    description: "Camiseta oversize con ilustración a línea. Algodón 100%.",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    slug: "camiseta-urban-sketch",
  },
  {
    id: "5",
    name: "Hoodie Studio Classic",
    description: "Hoodie negro oversize con logo bordado. Fleece premium.",
    price: 145.0,
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    slug: "hoodie-studio-classic",
  },
  {
    id: "21",
    name: "Drop #01 — Monochrome",
    description: "Drop exclusivo monocromático. Solo 30 unidades. Numeradas.",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80",
    slug: "drop-01-monochrome",
  },
  {
    id: "8",
    name: "Gorra VS Signature",
    description: "Dad cap negra con logo bordado VERO STUDIO.",
    price: 55.0,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    slug: "gorra-vs-signature",
  },
];

const categories = [
  { id:"1", name:"Camisetas", slug:"camisetas", icon:"👕", description:"Diseños únicos", color:"from-slate-900 to-slate-700", image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80" },
  { id:"2", name:"Hoodies", slug:"hoodies", icon:"🧥", description:"Abrigo con estilo", color:"from-zinc-900 to-zinc-700", image:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80" },
  { id:"3", name:"Gorras", slug:"gorras", icon:"🧢", description:"Complementa tu look", color:"from-stone-800 to-stone-600", image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
  { id:"4", name:"Básicos", slug:"polos-basicos", icon:"👕", description:"La base perfecta", color:"from-neutral-800 to-neutral-600", image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80" },
  { id:"5", name:"Estampados", slug:"estampados", icon:"🎨", description:"Arte que se lleva", color:"from-[#7c5cbf] to-[#4a3080]", image:"https://images.unsplash.com/photo-1581791534721-e599a74a0f67?w=600&q=80" },
  { id:"6", name:"Accesorios", slug:"accesorios", icon:"👜", description:"Detalles únicos", color:"from-[#c9a84c] to-[#8a6e2e]", image:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80" },
  { id:"7", name:"Edición Limitada", slug:"edicion-limitada", icon:"⚡", description:"Drops exclusivos", color:"from-[#d4607a] to-[#8a2840]", image:"https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80" },
  { id:"8", name:"Personalizar", slug:"personalizacion", icon:"✨", description:"Tu diseño", color:"from-[#2dd4bf] to-[#0d8f80]", image:"https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── MARQUEE CATEGORIES STRIP ── */}
      <div className="bg-[#0a0a0f] py-5 overflow-hidden border-y border-[#c9a84c]/10">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {Array(4).fill(categories).flat().map((cat, i) => (
            <Link
              key={i}
              href={`/categorias/${cat.slug}`}
              className="inline-flex items-center gap-3 px-8 text-sm font-semibold text-[#c8c8d8]/50 hover:text-[#c9a84c] tracking-widest uppercase transition-colors"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-[#c9a84c]/30">✦</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── CATEGORÍAS ── */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-3">Explorar</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0a0a0f] leading-tight">
                Nuestras<br /><em>Categorías</em>
              </h2>
            </div>
            <Link href="/categorias" className="hidden sm:inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-[#0a0a0f]/50 hover:text-[#c9a84c] transition-colors">
              Ver todo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {categories.map((category) => (
              <div key={category.id} className="w-[calc(50%-8px)] sm:w-[calc(33.333%-14px)] lg:w-[calc(25%-18px)]">
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-3">Destacados</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0a0a0f] leading-tight">
                Prendas<br /><em>Favoritas</em>
              </h2>
            </div>
            <Link href="/productos" className="hidden sm:inline-flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-[#0a0a0f]/50 hover:text-[#c9a84c] transition-colors">
              Toda la colección
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-3">¿Cómo funciona?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Tu prenda en<br /><em className="text-gradient-gold">3 pasos</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num:"01", title:"Elige tu prenda", desc:"Selecciona el modelo, talla y color que prefieras de nuestra colección.", icon:"👕" },
              { num:"02", title:"Envía tu diseño", desc:"Mándanos tu arte por WhatsApp o escoge uno de nuestros diseños exclusivos.", icon:"🎨" },
              { num:"03", title:"Recibe en casa", desc:"Producimos tu prenda en 48h y la enviamos directamente a tu puerta.", icon:"📦" },
            ].map((step) => (
              <div key={step.num} className="relative p-8 border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 transition-colors duration-300 group">
                <p className="font-accent text-7xl text-[#c9a84c]/15 leading-none mb-4 group-hover:text-[#c9a84c]/25 transition-colors">{step.num}</p>
                <p className="text-3xl mb-4">{step.icon}</p>
                <h3 className="font-display text-xl text-white mb-3">{step.title}</h3>
                <p className="text-[#c8c8d8]/50 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c9a84c] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PERSONALIZACIÓN ── */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="badge-luxury mb-6 mx-auto w-fit">✦ Personalización disponible</div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
            ¿Tienes una idea?<br />
            <em className="text-gradient-gold">Hazla realidad.</em>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
            Desde un logo de tu empresa hasta el arte de tu artista favorito — lo estampamos en cualquier prenda.
          </p>
          <Link
            href="/contacto"
            className="btn-gold inline-flex items-center gap-3"
          >
            Empezar ahora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-16 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon:"🧵", title:"Calidad Premium", desc:"100% algodón peinado" },
              { icon:"⚡", title:"Producción 48h", desc:"Rápido y eficiente" },
              { icon:"🚚", title:"Envío gratis", desc:"En pedidos +S/150" },
              { icon:"🔄", title:"Cambios gratis", desc:"Si no te convence" },
            ].map((item) => (
              <div key={item.title} className="group">
                <p className="text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{item.icon}</p>
                <p className="font-display text-lg text-[#0a0a0f] mb-1">{item.title}</p>
                <p className="text-[#0a0a0f]/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}