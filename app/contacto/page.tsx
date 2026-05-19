"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const WHATSAPP_PEDIDOS   = "51973474568";
const WHATSAPP_CONSULTAS = "51900048096";

const INFO_ITEMS = [
  {
    icon: "📍",
    title: "Ubicación",
    value: "Trujillo, Perú",
    sub: "Envíos a todo el país",
  },
  {
    icon: "🕐",
    title: "Horario",
    value: "Lun — Dom",
    sub: "9:00 AM – 9:00 PM",
  },
  {
    icon: "⚡",
    title: "Producción",
    value: "48 horas",
    sub: "Desde que apruebas el diseño",
  },
];

export default function ContactoPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    setSending(true);
    const texto = `✦ *Nuevo mensaje — VERO STUDIO*\n\n👤 *Nombre:* ${form.name}\n📱 *Teléfono:* ${form.phone}\n\n💬 *Mensaje:*\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_CONSULTAS}?text=${encodeURIComponent(texto)}`, "_blank");
    toast.success("Redirigiendo a WhatsApp ✦");
    setForm({ name: "", phone: "", message: "" });
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">

      {/* ── HEADER ── */}
      <div className="relative py-28 px-6 overflow-hidden border-b border-white/06">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] text-[#c9a84c] uppercase font-semibold mb-4">
            Hablemos
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-5">
            Contacto &<br /><em className="text-gradient-gold">Pedidos</em>
          </h1>
          <p className="text-white/40 text-base max-w-sm leading-relaxed">
            Respuesta inmediata por WhatsApp. Coordinamos tu diseño personalizado desde el primer mensaje.
          </p>
        </div>

        <div className="absolute bottom-6 right-8 font-accent text-[160px] leading-none text-white/03 select-none hidden lg:block">
          VS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* ── COLUMNA IZQUIERDA ── */}
          <div>

            {/* Info cards */}
            <div className="space-y-px mb-12">
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-6 px-6 py-5 border border-white/06 hover:border-[#c9a84c]/20 bg-[#0a0a0f] transition-colors group"
                  style={{ borderRadius: "4px" }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-[10px] tracking-widest uppercase text-white/30 font-semibold mb-0.5">{item.title}</p>
                    <p className="text-white font-display text-lg leading-tight">{item.value}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                  </div>
                  <div className="w-px h-8 bg-white/05 group-hover:bg-[#c9a84c]/20 transition-colors" />
                </div>
              ))}
            </div>

            {/* Section title */}
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-5">
              WhatsApp directo
            </p>

            {/* WhatsApp buttons */}
            <div className="space-y-3">

              {/* Pedidos */}
              <a
                href={`https://wa.me/${WHATSAPP_PEDIDOS}?text=${encodeURIComponent(
                  "✦ Hola! Quiero hacer un pedido:\n\n👕 *Prenda:* \n🎨 *Diseño:* \n📐 *Talla:* \n📍 *Dirección:* "
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-[#25D366]/20 bg-[#25D366]/05 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 px-6 py-5 transition-all group"
                style={{ borderRadius: "4px" }}
              >
                <div className="w-11 h-11 bg-[#25D366]/10 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "4px" }}>
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">Pedidos & Personalización</p>
                  <p className="text-white/30 text-[11px] tracking-wide mt-0.5">+{WHATSAPP_PEDIDOS} · Respuesta inmediata</p>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Consultas */}
              <a
                href={`https://wa.me/${WHATSAPP_CONSULTAS}?text=${encodeURIComponent("✦ Hola! Tengo una consulta sobre VERO STUDIO:")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-white/06 hover:border-[#c9a84c]/20 px-6 py-5 transition-all group"
                style={{ borderRadius: "4px" }}
              >
                <div className="w-11 h-11 bg-white/05 flex items-center justify-center flex-shrink-0" style={{ borderRadius: "4px" }}>
                  <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 font-semibold text-sm group-hover:text-white transition-colors">Consultas Generales</p>
                  <p className="text-white/30 text-[11px] tracking-wide mt-0.5">+{WHATSAPP_CONSULTAS} · Lun–Dom 9am–9pm</p>
                </div>
                <svg className="w-4 h-4 text-white/20 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── COLUMNA DERECHA: FORMULARIO ── */}
          <div className="border border-white/06 p-8 sm:p-10" style={{ borderRadius: "4px" }}>
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-1">Formulario</p>
            <h2 className="font-display text-3xl text-white mb-8">Envíanos un mensaje</h2>

            <div className="space-y-5">
              {[
                { key: "name", label: "Nombre completo", placeholder: "Tu nombre", type: "text" },
                { key: "phone", label: "WhatsApp", placeholder: "+51 999 999 999", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-[10px] font-semibold text-white/40 tracking-widest uppercase mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(form as any)[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 bg-white/05 border border-white/10 focus:outline-none focus:border-[#c9a84c]/50 text-white text-sm placeholder-white/20 transition-colors"
                    style={{ borderRadius: "2px" }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] font-semibold text-white/40 tracking-widest uppercase mb-2">
                  Mensaje / Diseño que tienes en mente
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Cuéntanos tu idea: tipo de prenda, diseño, colores, talla..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white/05 border border-white/10 focus:outline-none focus:border-[#c9a84c]/50 text-white text-sm placeholder-white/20 transition-colors resize-none"
                  style={{ borderRadius: "2px" }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={sending}
                className="w-full bg-[#c9a84c] hover:bg-[#e8cc80] text-[#0a0a0f] font-bold py-4 text-[10px] tracking-widest uppercase transition-colors disabled:opacity-60 flex items-center justify-center gap-3"
                style={{ borderRadius: "2px" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {sending ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
              </button>

              <p className="text-white/20 text-[10px] text-center tracking-widest uppercase">
                Tu mensaje se abrirá directo en WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}