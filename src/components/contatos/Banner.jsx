import { Link } from "react-router-dom";
import Contato from "../../assets/img/contato.jpg";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={Contato}
          alt="Contacto HossFatura"
          className="w-full h-full object-cover"
        />

        {/* Overlay escuro principal */}
        <div className="absolute inset-0 bg-neutral-950/15"></div>

        {/* Overlay gradiente premium */}
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/70 to-neutral-950/40"></div>
      </div>

      {/* Glow decorativo */}
      <div className="absolute top-20 right-20 w-120 h-120 bg-amber-700/10 rounded-full blur-[140px] z-10"></div>

      {/* Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-36 pb-24">
        <div className="max-w-3xl">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
            <Link
              to="/"
              className="hover:text-amber-500 transition-colors"
            >
              Início
            </Link>

            <i className="fas fa-chevron-right text-[8px] text-zinc-600"></i>

            <span className="text-amber-500">Contatos</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-zinc-900/70 border border-zinc-800 px-4 py-2 rounded-full shadow-2xl mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-amber-500">
              Atendimento Especializado
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter text-white">
            Estamos prontos para{" "}
            <span className="text-amber-600 italic">
              ajudar.
            </span>
          </h1>

          {/* Texto */}
          <p className="text-zinc-300 text-lg lg:text-xl leading-relaxed max-w-2xl mt-8">
            Fale com a nossa equipa comercial e técnica para esclarecer dúvidas,
            agendar demonstrações ou descobrir como o HossFatura pode transformar
            a gestão da sua empresa em Angola.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            {/* Botão principal */}
            <Link
              to="/demonstracao"
              className="group flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(180,83,9,0.4)] hover:-translate-y-1 cursor-pointer"
            >
              <span>Agendar Demonstração</span>

              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-calendar-check text-[10px]"></i>
              </div>
            </Link>

            {/* Botão secundário */}
            <a
              href="https://wa.me/244900000000"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-4 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm hover:border-amber-700/50 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <span>Falar no WhatsApp</span>

              <div className="bg-white/5 p-1 rounded-md group-hover:bg-white/10 transition-colors">
                <i className="fab fa-whatsapp text-[10px] text-zinc-400 group-hover:text-amber-500"></i>
              </div>
            </a>
          </div>

          {/* Indicadores de confiança */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10 mt-10 border-t border-zinc-800">
            {[
              {
                icon: "headset",
                text: "Suporte Local",
              },
              {
                icon: "shield-halved",
                text: "Atendimento Seguro",
              },
              {
                icon: "clock",
                text: "Resposta Rápida",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs text-zinc-400 font-medium uppercase tracking-wider"
              >
                <i
                  className={`fas fa-${item.icon} text-amber-600`}
                ></i>
                {item.text}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
