"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clearCart = useCartStore((s) => s.clearCart);
  const getTotalItems = useCartStore((s) => s.getTotalItems);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb]">
      <div className="font-accent text-4xl text-[#c9a84c] tracking-wider animate-pulse">VS</div>
    </div>
  );

  const total = getTotalPrice();
  const count = getTotalItems();

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      {/* Header */}
      <div className="bg-[#0a0a0f] py-14 px-6">
        <div className="max-w-5xl mx-auto flex items-end gap-6">
          <button onClick={() => router.back()} className="text-white/30 hover:text-[#c9a84c] transition-colors mb-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M12 5l-7 7 7 7" /></svg>
          </button>
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-1">Tus Prendas</p>
            <h1 className="font-display text-4xl sm:text-5xl text-white leading-none">Mi Bolsa</h1>
          </div>
          <p className="text-white/30 text-sm ml-auto mb-1">{count} {count !== 1 ? "artículos" : "artículo"}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 gap-6">
            <div className="w-20 h-20 border-2 border-dashed border-[#c9a84c]/30 flex items-center justify-center" style={{ borderRadius:"4px" }}>
              <svg className="w-8 h-8 text-[#c9a84c]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <div className="text-center">
              <h2 className="font-display text-2xl text-[#0a0a0f] mb-2">Tu bolsa está vacía</h2>
              <p className="text-[#0a0a0f]/40 text-sm">Explora nuestra colección y encuentra tu prenda perfecta</p>
            </div>
            <Link href="/productos" className="btn-primary">Explorar colección</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] tracking-[0.2em] text-[#0a0a0f]/50 uppercase font-semibold">Artículos</p>
                <button onClick={() => clearCart?.()} className="text-[9px] tracking-[0.15em] text-[#0a0a0f]/30 hover:text-[#d4607a] uppercase font-semibold transition-colors">Vaciar bolsa</button>
              </div>
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 flex gap-4" style={{ borderRadius:"4px", boxShadow:"0 2px 16px rgba(10,10,15,0.05)" }}>
                  <div className="w-20 h-24 bg-[#f5f0eb] overflow-hidden flex-shrink-0" style={{ borderRadius:"2px" }}>
                    {item.image?.startsWith("http") ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl opacity-30">👕</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-[#0a0a0f] text-base leading-tight line-clamp-2 flex-1">{item.name}</p>
                      <button onClick={() => removeItem(item.id)} className="text-[#0a0a0f]/20 hover:text-[#d4607a] transition-colors p-1 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <p className="font-accent text-lg text-[#c9a84c] mt-1">S/ {item.price.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-[#0a0a0f]/10" style={{ borderRadius:"2px" }}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 text-[#0a0a0f]/60 hover:text-[#0a0a0f] hover:bg-[#f5f0eb] transition font-semibold text-sm">−</button>
                        <span className="text-sm font-semibold w-6 text-center text-[#0a0a0f]">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 text-[#0a0a0f]/60 hover:text-[#0a0a0f] hover:bg-[#f5f0eb] transition font-semibold text-sm">+</button>
                      </div>
                      <p className="font-semibold text-[#0a0a0f] text-sm">S/ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#0a0a0f] p-6 sticky top-24" style={{ borderRadius:"4px" }}>
                <p className="text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase font-semibold mb-5">Resumen</p>
                <div className="space-y-3 mb-5">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs">
                      <span className="text-white/40 truncate flex-1 mr-2">{item.name} ×{item.quantity}</span>
                      <span className="text-white/70 flex-shrink-0">S/ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 my-5" />
                <div className="flex justify-between items-end mb-6">
                  <span className="text-white/50 text-xs tracking-widest uppercase">Total</span>
                  <span className="font-accent text-3xl text-[#c9a84c]">S/ {total.toFixed(2)}</span>
                </div>
                <div className="bg-white/5 px-4 py-3 mb-5 flex items-center gap-3">
                  <span className="text-lg">🚚</span>
                  <div>
                    <p className="text-[10px] font-semibold text-white/70 tracking-widest uppercase">Envío por WhatsApp</p>
                    <p className="text-white/30 text-[10px]">Coordinamos el envío contigo</p>
                  </div>
                </div>
                <Link href="/checkout" className="block w-full bg-[#c9a84c] hover:bg-[#e8cc80] text-[#0a0a0f] font-bold py-4 text-center text-[10px] tracking-widest uppercase transition-colors mb-3">
                  Finalizar Pedido →
                </Link>
                <Link href="/productos" className="block w-full text-center text-white/30 text-[9px] tracking-widest uppercase hover:text-[#c9a84c] transition-colors py-2">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}