import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERO STUDIO – Ropa con Diseño Personalizado",
  description:
    "Prendas únicas con diseños personalizados. Camisetas, hoodies, accesorios y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${bebasNeue.variable} font-body antialiased`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>

        {/* Announcement bar at bottom */}
        <div className="bg-[#0a0a0f] text-[#c9a84c] py-2 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(3).fill(null).map((_, i) => (
              <span key={i} className="flex items-center gap-8 px-6 text-[11px] tracking-[0.2em] uppercase font-semibold">
                <span>✦ Envío gratis en pedidos +S/150</span>
                <span>✦ Diseños exclusivos</span>
                <span>✦ Personalización en 48h</span>
                <span>✦ Tela premium 100% algodón</span>
                <span>✦ Envío gratis en pedidos +S/150</span>
                <span>✦ Diseños exclusivos</span>
                <span>✦ Personalización en 48h</span>
                <span>✦ Tela premium 100% algodón</span>
              </span>
            ))}
          </div>
        </div>

        <footer className="bg-[#0a0a0f] text-[#c8c8d8] py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <p className="font-accent text-3xl text-white tracking-wider mb-3">VERO STUDIO</p>
                <p className="text-[#c8c8d8]/60 text-sm leading-relaxed max-w-xs">
                  Ropa con diseño personalizado para quienes no se conforman con lo ordinario. Cada prenda es una obra de arte.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Tienda</p>
                <ul className="space-y-2 text-[#c8c8d8]/60 text-sm">
                  <li><a href="/productos" className="hover:text-[#c9a84c] transition-colors">Todos los Productos</a></li>
                  <li><a href="/categorias" className="hover:text-[#c9a84c] transition-colors">Categorías</a></li>
                  <li><a href="/nosotros" className="hover:text-[#c9a84c] transition-colors">Nuestra Historia</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Contacto</p>
                <ul className="space-y-2 text-[#c8c8d8]/60 text-sm">
                  <li><a href="/contacto" className="hover:text-[#c9a84c] transition-colors">WhatsApp</a></li>
                  <li><span>verostudio@email.com</span></li>
                  <li><span>Trujillo, Perú</span></li>
                </ul>
              </div>
            </div>
            <hr className="border-white/10 mb-6" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#c8c8d8]/40 text-xs">
              <p>© 2025 VERO STUDIO. Todos los derechos reservados.</p>
              <p className="tracking-widest uppercase">Hecho con ✦ en Trujillo</p>
            </div>
          </div>
        </footer>

        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: { background: "#0a0a0f", color: "#f5f0eb", border: "1px solid #c9a84c" },
            success: { style: { background: "#0a0a0f", color: "#c9a84c" } },
            error: { style: { background: "#0a0a0f", color: "#d4607a" } },
          }}
        />
      </body>
    </html>
  );
}