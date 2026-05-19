"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store/cartStore";
import toast from "react-hot-toast";

const allProducts = [
  { id:"1", name:"Camiseta Urban Sketch", description:"Camiseta oversize con ilustración a línea. Algodón 100%.", price:65, image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80", slug:"camiseta-urban-sketch", category:"camisetas", emoji:"👕" },
  { id:"2", name:"Camiseta Abstract Wave", description:"Diseño abstracto con ondas en tonos tierra. Unisex.", price:65, image:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80", slug:"camiseta-abstract-wave", category:"camisetas", emoji:"👕" },
  { id:"3", name:"Camiseta Minimal Type", description:"Tipografía minimalista bordada al frente. Edición limitada.", price:70, image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80", slug:"camiseta-minimal-type", category:"camisetas", emoji:"👕" },
  { id:"4", name:"Camiseta Personalizada", description:"Tu diseño, tu nombre, tu historia. Envíanos el arte.", price:80, image:"https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80", slug:"camiseta-personalizada", category:"camisetas", emoji:"🎨" },
  { id:"5", name:"Hoodie Studio Classic", description:"Hoodie negro oversize con logo bordado. Fleece premium.", price:145, image:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80", slug:"hoodie-studio-classic", category:"hoodies", emoji:"🧥" },
  { id:"6", name:"Hoodie Ink Drop", description:"Estampado de manchas de tinta en blanco y negro.", price:155, image:"https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&q=80", slug:"hoodie-ink-drop", category:"hoodies", emoji:"🧥" },
  { id:"7", name:"Hoodie Crop Personalizado", description:"Crop hoodie con tu diseño estampado full color.", price:135, image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", slug:"hoodie-crop-personalizado", category:"hoodies", emoji:"🎨" },
  { id:"8", name:"Gorra VS Signature", description:"Gorra dad cap negra con logo bordado VERO STUDIO.", price:55, image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80", slug:"gorra-vs-signature", category:"gorras", emoji:"🧢" },
  { id:"9", name:"Gorra Bordada Custom", description:"Gorra con tu texto o logo bordado. Varios colores.", price:65, image:"https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80", slug:"gorra-bordada-custom", category:"gorras", emoji:"🎨" },
  { id:"10", name:"Gorra Bucket Estampada", description:"Bucket hat con estampado de patterns geométricos.", price:60, image:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?w=600&q=80", slug:"gorra-bucket-estampada", category:"gorras", emoji:"🎩" },
  { id:"11", name:"Polo Clásico Blanco", description:"Polo básico 100% algodón peinado. El lienzo perfecto.", price:45, image:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80", slug:"polo-clasico-blanco", category:"polos-basicos", emoji:"👕" },
  { id:"12", name:"Polo Clásico Negro", description:"Polo básico negro. Corte regular, talla inclusive.", price:45, image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80", slug:"polo-clasico-negro", category:"polos-basicos", emoji:"👕" },
  { id:"13", name:"Pack 3 Polos Básicos", description:"3 polos básicos en colores neutros. Descuento especial.", price:120, image:"https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=600&q=80", slug:"pack-3-polos-basicos", category:"polos-basicos", emoji:"👕" },
  { id:"14", name:"Camiseta Vintage Floral", description:"Estampado botánico vintage sobre tela stonewashed.", price:85, image:"https://images.unsplash.com/photo-1581791534721-e599a74a0f67?w=600&q=80", slug:"camiseta-vintage-floral", category:"estampados", emoji:"🌸" },
  { id:"15", name:"Camiseta Grunge Typography", description:"Lettering grunge con efecto envejecido.", price:80, image:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80", slug:"camiseta-grunge-typography", category:"estampados", emoji:"✍️" },
  { id:"16", name:"Camiseta Celestial", description:"Estampado de luna, estrellas y constelaciones.", price:80, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80", slug:"camiseta-celestial", category:"estampados", emoji:"🌙" },
  { id:"17", name:"Camiseta Abstract Art", description:"Reproducción de arte abstracto en tela premium.", price:95, image:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80", slug:"camiseta-abstract-art", category:"estampados", emoji:"🎨" },
  { id:"18", name:"Tote Bag Estampada", description:"Bolsa de tela orgánica con diseño exclusivo VERO.", price:40, image:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=600&q=80", slug:"tote-bag-estampada", category:"accesorios", emoji:"👜" },
  { id:"19", name:"Calcetines Diseño VS", description:"Pack de 3 calcetines con patrones exclusivos.", price:35, image:"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&q=80", slug:"calcetines-diseno-vs", category:"accesorios", emoji:"🧦" },
  { id:"20", name:"Parche Bordado", description:"Parche bordado a mano con diseño personalizado.", price:25, image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80", slug:"parche-bordado", category:"accesorios", emoji:"🪡" },
  { id:"21", name:"Drop #01 — Monochrome", description:"Drop exclusivo monocromático. Solo 30 unidades. Numeradas.", price:120, image:"https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80", slug:"drop-01-monochrome", category:"edicion-limitada", emoji:"⚡" },
  { id:"22", name:"Drop #02 — Gold Series", description:"Estampado con tinta dorada. 20 unidades. Certificado.", price:150, image:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", slug:"drop-02-gold-series", category:"edicion-limitada", emoji:"✨" },
  { id:"23", name:"Collab Artista Local", description:"Colaboración con artista trujillano. Arte en tu prenda.", price:110, image:"https://images.unsplash.com/photo-1558171813-4fcb6fc14fa3?w=600&q=80", slug:"collab-artista-local", category:"edicion-limitada", emoji:"🎨" },
  { id:"24", name:"Diseño Fotográfico", description:"Imprime tu foto favorita en cualquier prenda.", price:90, image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80", slug:"diseno-fotografico", category:"personalizacion", emoji:"📸" },
  { id:"25", name:"Bordado Nombre/Texto", description:"Bordado de hasta 20 caracteres en la prenda que elijas.", price:30, image:"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80", slug:"bordado-nombre-texto", category:"personalizacion", emoji:"✍️" },
  { id:"26", name:"Pack Pareja Personalizado", description:"2 prendas coordinadas con diseño exclusivo de pareja.", price:160, image:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&q=80", slug:"pack-pareja-personalizado", category:"personalizacion", emoji:"💑" },
];

const filters = [
  { slug:"all", label:"Todo" },
  { slug:"camisetas", label:"Camisetas" },
  { slug:"hoodies", label:"Hoodies" },
  { slug:"gorras", label:"Gorras" },
  { slug:"polos-basicos", label:"Básicos" },
  { slug:"estampados", label:"Estampados" },
  { slug:"accesorios", label:"Accesorios" },
  { slug:"edicion-limitada", label:"Limitada" },
  { slug:"personalizacion", label:"Personalizar" },
];

function ProductCard({ p }: { p: (typeof allProducts)[0] }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id:p.id, name:p.name, price:p.price, image:p.image, slug:p.slug });
    setAdded(true);
    toast.success(`${p.name} agregado`, {
      icon: "✦",
      style: { background:"#0a0a0f", color:"#c9a84c", border:"1px solid #c9a84c30" },
    });
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="group bg-white overflow-hidden flex flex-col" style={{ borderRadius:"4px", boxShadow:"0 2px 16px rgba(10,10,15,0.06)" }}>
      {/* Image */}
      <Link href={`/productos/${p.slug}`} className="block relative overflow-hidden bg-[#f5f0eb] flex-shrink-0" style={{ aspectRatio:"4/5" }}>
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80"; }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Mobile quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => { e.preventDefault(); handleAdd(); }}
            className={`w-full py-3 text-[10px] font-semibold tracking-widest uppercase transition-colors ${added ? "bg-[#c9a84c] text-[#0a0a0f]" : "bg-[#0a0a0f] text-[#f5f0eb] hover:bg-[#c9a84c] hover:text-[#0a0a0f]"}`}
          >
            {added ? "✦ Agregado" : "Agregar a la bolsa"}
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/productos/${p.slug}`}>
          <h3 className="font-display text-base text-[#0a0a0f] mb-1 leading-tight group-hover:text-[#c9a84c] transition-colors line-clamp-1">{p.name}</h3>
          <p className="text-[#0a0a0f]/50 text-xs leading-relaxed mb-3 line-clamp-2">{p.description}</p>
        </Link>
        <div className="flex items-center justify-between mt-auto">
          <p className="font-accent text-xl text-[#0a0a0f]">S/ {p.price.toFixed(2)}</p>
          <button
            onClick={handleAdd}
            className={`px-3 py-1.5 text-[9px] font-semibold tracking-widest uppercase transition-colors ${added ? "bg-[#c9a84c] text-[#0a0a0f]" : "bg-[#0a0a0f] text-[#f5f0eb] hover:bg-[#c9a84c] hover:text-[#0a0a0f]"}`}
            style={{ borderRadius:"2px" }}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductosPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      {/* Header */}
      <div className="bg-[#0a0a0f] py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-3">Colección</p>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-3 leading-tight">
            Todos los<br /><em className="text-gradient-gold">Productos</em>
          </h1>
          <p className="text-white/40 text-sm max-w-sm">Prendas con diseño único, producidas con los mejores materiales.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-[#0a0a0f]/08 sticky top-[64px] sm:top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-0">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={`flex-shrink-0 px-5 py-4 text-[10px] font-semibold tracking-widest uppercase transition-all duration-200 border-b-2 ${
                  active === f.slug
                    ? "border-[#c9a84c] text-[#0a0a0f]"
                    : "border-transparent text-[#0a0a0f]/40 hover:text-[#0a0a0f] hover:border-[#0a0a0f]/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <p className="text-[#0a0a0f]/40 text-xs tracking-widest uppercase">
          {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          {active !== "all" && <span> · {filters.find(f=>f.slug===active)?.label}</span>}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
}