import { Link } from "react-router-dom";
import Perguntas from "../../assets/img/perguntas.jpg";

export default function Banner() {
  return (
    <section className="relative bg-neutral-950 text-white pt-44 pb-24 overflow-hidden">
      {/* Elementos Atmosféricos */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-amber-700/10 rounded-full blur-[140px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-zinc-800/20 rounded-full blur-[120px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Conteúdo Esquerdo */}
          <div className="flex flex-col gap-8">

            {/* Breadcrumb Técnico */}
            <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <Link
                to="/"
                className="hover:text-amber-500 transition-colors"
              >
                Início
              </Link>

              <i className="fas fa-chevron-right text-[8px] text-zinc-700"></i>

              <span className="text-amber-600">Perguntas Frequentes</span>
            </nav>

            {/* Badge Industrial */}
            <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full w-fit shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-amber-500">
                Central de Ajuda
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter">
              Tire todas as suas{" "}
              <span className="text-amber-600 italic">dúvidas.</span>
            </h1>

            {/* Texto */}
            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-xl">
              Reunimos as perguntas mais frequentes sobre faturação,
              demonstrações, planos e funcionamento do HossFatura para ajudar
              a sua empresa a tomar a melhor decisão.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5">

              {/* Botão Principal */}
              <Link
                to="/demonstracao"
                className="group flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(180,83,9,0.4)] hover:-translate-y-1"
              >
                <span>Agendar Demonstração</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-calendar-check text-[10px]"></i>
                </div>
              </Link>

              {/* Botão Secundário */}
              <Link
                to="/contatos"
                className="group flex items-center justify-center gap-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-700/50 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1"
              >
                <span>Falar com Suporte</span>

                <div className="bg-white/5 p-1 rounded-md group-hover:bg-white/10 transition-colors">
                  <i className="fas fa-headset text-[10px] text-zinc-500 group-hover:text-amber-500"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* Área Visual */}
          <div className="relative group">
            {/* Glow externo */}
            <div className="absolute -inset-4 bg-amber-700/10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 p-3 shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02]">
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-transparent z-10 pointer-events-none"></div>

              <img
                src={Perguntas}
                alt="Perguntas Frequentes HossFatura"
                className="w-full h-auto rounded-[1.8rem] object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Badge Flutuante */}
              <div className="absolute bottom-8 left-8 z-20 bg-neutral-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                <div className="w-10 h-10 bg-amber-700 rounded-xl flex items-center justify-center">
                  <i className="fas fa-circle-question text-white"></i>
                </div>

                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">
                    Suporte
                  </p>
                  <p className="text-sm font-bold text-white">
                    Respostas Rápidas
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
