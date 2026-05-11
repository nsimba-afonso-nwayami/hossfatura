import { Link } from "react-router-dom";

export default function CtaFinal() {
  return (
    <section className="relative bg-neutral-950 text-white py-28 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-amber-700/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-zinc-800/20 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-4xl p-10 lg:p-16 text-center shadow-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-neutral-950 border border-zinc-800 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-amber-500">
              Modernização Empresarial
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Está pronto para elevar a gestão da sua empresa para outro{" "}
            <span className="text-amber-600 italic">nível?</span>
          </h2>

          {/* Texto */}
          <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-8">
            Automatize processos, elimine erros operacionais e tenha total
            controlo financeiro com uma solução criada para empresas angolanas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            {/* CTA Principal */}
            <Link
              to="/demonstracao"
              className="group flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(180,83,9,0.35)] hover:-translate-y-1"
            >
              <span>Agendar Demonstração</span>

              <div className="bg-white/20 p-1.5 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-calendar-check text-[10px]"></i>
              </div>
            </Link>

            {/* CTA Secundário */}
            <Link
              to="/planos"
              className="group flex items-center justify-center gap-4 border border-zinc-800 bg-zinc-900/50 hover:border-amber-700/50 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1"
            >
              <span>Ver Planos</span>

              <div className="bg-white/5 p-1.5 rounded-md group-hover:bg-white/10 transition-colors">
                <i className="fas fa-layer-group text-[10px] text-zinc-500 group-hover:text-amber-500"></i>
              </div>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-14 pt-8 border-t border-zinc-800">
            {[
              {
                icon: "shield-check",
                text: "Conformidade Fiscal",
              },
              {
                icon: "headset",
                text: "Suporte Técnico Local",
              },
              {
                icon: "bolt",
                text: "Implementação Rápida",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs text-zinc-500 font-semibold uppercase tracking-wider"
              >
                <i className={`fas fa-${item.icon} text-amber-600`}></i>
                {item.text}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
