"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);
  const clearCart = useCartStore((s) => s.clearCart);
  const [form, setForm] = useState({ name:"", phone:"", address:"", notes:"", size:"" });

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen flex items-center justify-center bg-[#f5f0eb]"><div className="font-accent text-4xl text-[#c9a84c] animate-pulse">VS</div></div>;

  const total = getTotalPrice();

  const handleOrder = () => {
    if (!form.name || !form.phone) return alert("Por favor completa nombre y teléfono");
    const lines = items.map(i => `• ${i.name} ×${i.quantity} = S/ ${(i.price * i.quantity).toFixed(2)}`).join("\n");
    const msg = `✦ *Nuevo Pedido — VERO STUDIO*\n\n👤 *Nombre:* ${form.name}\n📱 *WhatsApp:* ${form.phone}\n📍 *Dirección:* ${form.address || "Por coordinar"}\n📐 *Talla:* ${form.size || "Por coordinar"}\n\n*Prendas:*\n${lines}\n\n💰 *Total: S/ ${total.toFixed(2)}*\n\n📝 *Notas:* ${form.notes || "Ninguna"}`;
    window.open(`https://wa.me/51900048096?text=${encodeURIComponent(msg)}`, "_blank");
    clearCart();
    router.push("/checkout/confirmacion");
  };

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      <div className="bg-[#0a0a0f] py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-1">Paso final</p>
          <h1 className="font-display text-4xl sm:text-5xl text-white">Finalizar Pedido</h1>
          <p className="text-white/30 text-sm mt-2">Completa tus datos y te contactamos por WhatsApp</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white p-8" style={{ borderRadius:"4px" }}>
          <p className="text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase font-semibold mb-6">Tus datos</p>
          <div className="space-y-5">
            {[
              { key:"name", label:"Nombre completo", placeholder:"Tu nombre", type:"text" },
              { key:"phone", label:"WhatsApp", placeholder:"+51 999 999 999", type:"tel" },
              { key:"address", label:"Dirección de entrega", placeholder:"Jr. Ejemplo 123, Trujillo", type:"text" },
              { key:"size", label:"Talla", placeholder:"XS / S / M / L / XL / XXL", type:"text" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-[10px] font-semibold text-[#0a0a0f]/60 tracking-widest uppercase mb-2">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={(form as any)[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 border border-[#0a0a0f]/10 focus:outline-none focus:border-[#c9a84c] text-[#0a0a0f] text-sm transition-colors bg-[#f5f0eb]"
                  style={{ borderRadius:"2px" }}
                />
              </div>
            ))}
            <div>
              <label className="block text-[10px] font-semibold text-[#0a0a0f]/60 tracking-widest uppercase mb-2">Notas de personalización</label>
              <textarea
                placeholder="Color, diseño específico, texto a bordar..."
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-4 py-3 border border-[#0a0a0f]/10 focus:outline-none focus:border-[#c9a84c] text-[#0a0a0f] text-sm transition-colors bg-[#f5f0eb] resize-none"
                style={{ borderRadius:"2px" }}
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="bg-[#0a0a0f] p-6 mb-4" style={{ borderRadius:"4px" }}>
            <p className="text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase font-semibold mb-5">Tu pedido</p>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-white/50">{item.name} × {item.quantity}</span>
                  <span className="text-white font-semibold">S/ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 mt-5 pt-5 flex justify-between items-end">
              <span className="text-white/40 text-xs tracking-widest uppercase">Total</span>
              <span className="font-accent text-3xl text-[#c9a84c]">S/ {total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleOrder}
            className="w-full bg-[#25D366] hover:bg-[#1ea855] text-white font-bold py-5 flex items-center justify-center gap-3 transition-colors text-sm tracking-widest uppercase"
            style={{ borderRadius:"4px" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar Pedido por WhatsApp
          </button>
          <Link href="/cart" className="block text-center text-[#0a0a0f]/30 text-[9px] tracking-widest uppercase hover:text-[#c9a84c] mt-4 transition-colors">← Volver a la bolsa</Link>
        </div>
      </div>
    </div>
  );
}