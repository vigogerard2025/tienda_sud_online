export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      {/* Header */}
      <div className="bg-[#0a0a0f] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80')",
          backgroundSize:"cover", backgroundPosition:"center"
        }}/>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-3">Quiénes somos</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4 leading-tight">
            Nuestra<br /><em className="text-gradient-gold">Historia</em>
          </h1>
          <p className="text-white/40 text-lg max-w-md">Una pasión por el diseño que se convirtió en identidad</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-4">La historia</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0a0a0f] mb-6 leading-tight">
              Nacimos de la necesidad de <em>vestir diferente</em>
            </h2>
            <p className="text-[#0a0a0f]/60 leading-relaxed mb-4">
              VERO STUDIO nació en Trujillo con una premisa simple: la ropa es el primer mensaje que das al mundo. No queremos que uses lo mismo que todos.
            </p>
            <p className="text-[#0a0a0f]/60 leading-relaxed">
              Cada prenda es diseñada, producida y revisada con atención al detalle. Trabajamos con artistas locales, ilustradores y creativos para traerte colecciones que realmente valen la pena.
            </p>
          </div>
          <div className="bg-[#0a0a0f] aspect-square flex items-center justify-center" style={{ borderRadius:"4px" }}>
            <span className="font-accent text-8xl text-[#c9a84c]/20 tracking-widest">VS</span>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <p className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-semibold mb-10 text-center">Nuestros pilares</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon:"✦", title:"Diseño", desc:"Cada estampado es pensado, no generado. Arte real en cada prenda." },
              { icon:"◈", title:"Calidad", desc:"Telas premium, tintas duraderas y acabados que resisten el tiempo." },
              { icon:"◉", title:"Identidad", desc:"Tu ropa debe contar quién eres. Ayudamos a que lo diga perfectamente." },
            ].map((v) => (
              <div key={v.title} className="p-8 border border-[#0a0a0f]/08 hover:border-[#c9a84c]/30 transition-colors group" style={{ borderRadius:"4px" }}>
                <p className="text-3xl text-[#c9a84c] mb-5 font-accent">{v.icon}</p>
                <h3 className="font-display text-2xl text-[#0a0a0f] mb-3">{v.title}</h3>
                <p className="text-[#0a0a0f]/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#0a0a0f] p-10" style={{ borderRadius:"4px" }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number:"2+", label:"Años creando" },
              { number:"500+", label:"Clientes felices" },
              { number:"80+", label:"Diseños únicos" },
              { number:"100%", label:"Personalizable" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-accent text-5xl text-[#c9a84c] mb-2">{s.number}</div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}