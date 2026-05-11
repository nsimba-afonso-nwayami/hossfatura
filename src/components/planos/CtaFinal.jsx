import { Link } from "react-router-dom";

export default function CtaPlanos() {
  return (
    <section className="bg-neutral-950 py-24 relative overflow-hidden">
      {/* Efeitos de Iluminação Técnica */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-700/10 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-zinc-800/30 rounded-full blur-[100px]"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl">
          
          {/* Tag de Urgência/Suporte */}
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-[10px] font-black tracking-[0.4em] uppercase text-amber-500 bg-amber-500/5 border border-amber-500/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Implementação Imediata
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter mb-8 text-white">
            Ainda tem dúvidas sobre o <br className="hidden lg:block" />
            plano ideal para <span className="text-amber-600 italic">si?</span>
          </h2>

          <p className="text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Fale com um dos nossos especialistas em gestão. Estamos prontos para analisar o seu cenário e recomendar a melhor configuração para o seu negócio em Angola.
          </p>

          {/* Ações Padronizadas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Botão Principal (Amber) */}
            <Link
              to="/contatos"
              className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(180,83,9,0.4)] hover:-translate-y-1"
            >
              <span>Falar com Consultor</span>
              <div className="bg-white/20 p-1.5 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-headset text-[10px]"></i>
              </div>
            </Link>

            {/* Botão Secundário (Glass Industrial) */}
            <Link
              to="/demonstracao"
              className="group w-full sm:w-auto flex items-center justify-center gap-4 border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm hover:border-amber-700/50 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1"
            >
              <span>Ver Demonstração</span>
              <div className="bg-white/5 p-1.5 rounded-md group-hover:bg-white/10 transition-colors">
                <i className="fas fa-play text-[10px] text-zinc-500 group-hover:text-amber-500"></i>
              </div>
            </Link>
          </div>

          {/* Rodapé do Bloco */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { icon: "whatsapp", text: "+244 9XX XXX XXX", color: "text-zinc-500" },
              { icon: "envelope", text: "comercial@hossidev.com", color: "text-zinc-500" }
            ].map((contact, idx) => (
              <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                <i className={`fab fa-${contact.icon} ${contact.color} group-hover:text-amber-500 transition-colors`}></i>
                <span className="text-xs font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors tracking-widest uppercase">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
