import { Link } from "react-router-dom";

export default function CtaFinal() {
  return (
    <section className="bg-neutral-950 text-white py-24 relative overflow-hidden">
      {/* Glows de profundidade técnica */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-700/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-amber-900/5 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[2.5rem] p-10 lg:p-20 text-center shadow-2xl overflow-hidden">
          
          {/* Grid Pattern sutil no fundo do card */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#52525b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10">
            {/* Label Industrial */}
            <div className="inline-block px-5 py-2 mb-8 text-[10px] font-black tracking-[0.4em] uppercase text-amber-500 bg-amber-500/5 border border-amber-500/20 rounded-full">
              Liderança Digital
            </div>

            {/* Headline com Tipografia Impactante */}
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter mb-8">
              Pronto para modernizar a sua{" "}
              <span className="text-amber-600 italic block lg:inline">empresa?</span>
            </h2>

            {/* Texto de Apoio */}
            <p className="text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Simplifique processos, aumente o controlo financeiro e leve a sua
              gestão para outro nível com a tecnologia do <span className="text-zinc-100 font-bold">HossFatura</span>.
            </p>

            {/* Botões - Selados no Padrão Industrial */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              
              {/* Botão Principal (Destaque) */}
              <Link
                to="/criar-conta"
                className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(180,83,9,0.5)] hover:-translate-y-1"
              >
                <span>Começar Gratuitamente</span>
                <div className="bg-white/20 p-1.5 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-rocket text-[10px]"></i>
                </div>
              </Link>

              {/* Botão Secundário (Glass Industrial) */}
              <Link
                to="/demonstracao"
                className="group w-full sm:w-auto flex items-center justify-center gap-4 border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm hover:border-amber-700/50 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1"
              >
                <span>Pedir Demonstração</span>
                <div className="bg-white/5 p-1.5 rounded-md group-hover:bg-white/10 transition-colors">
                  <i className="fas fa-desktop text-[10px] text-zinc-500 group-hover:text-amber-500"></i>
                </div>
              </Link>
            </div>

            {/* Trust Badges - Estilo Technical Footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-zinc-800/60">
              {[
                { icon: "shield-halved", text: "Faturação Certificada" },
                { icon: "landmark", text: "Conformidade AGT" },
                { icon: "map-marker-alt", text: "Suporte Local Luanda" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 text-[11px] text-zinc-500 font-bold uppercase tracking-[0.15em]"
                >
                  <i className={`fas fa-${item.icon} text-amber-700`}></i>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
