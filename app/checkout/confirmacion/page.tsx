// app/checkout/confirmacion/page.tsx
import Link from "next/link";

export default function ConfirmacionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] px-4 text-center">
      <div className="badge-luxury mb-8 animate-fade-up">✦ Pedido enviado</div>
      <h1 className="font-display text-5xl sm:text-6xl text-white mb-4 animate-fade-up delay-100">
        ¡Gracias por tu<br /><em className="text-gradient-gold">confianza!</em>
      </h1>
      <p className="text-white/40 text-base max-w-sm mb-10 animate-fade-up delay-200">
        Tu pedido fue enviado por WhatsApp. Nos pondremos en contacto contigo pronto para coordinar tu prenda personalizada.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
        <Link href="/" className="btn-gold">Volver al inicio</Link>
        <Link href="/productos" className="btn-primary border border-white/10">Ver más prendas</Link>
      </div>
    </div>
  );
}