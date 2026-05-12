import { Link } from "react-router-dom";

export default function WhatsappRapido() {
  return (
    <section className="bg-neutral-50 py-24 relative overflow-hidden">
      {/* Linha técnica superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      {/* Glow decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Conteúdo esquerdo */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-50 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-700">
                Atendimento Imediato
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Prefere falar no{" "}
              <span className="text-amber-700 italic">WhatsApp?</span>
            </h2>

            <p className="text-neutral-600 text-lg leading-relaxed mt-6 max-w-xl">
              A nossa equipa comercial está pronta para esclarecer dúvidas,
              apresentar o sistema e ajudar a escolher o melhor plano para o
              seu negócio em Angola.
            </p>

            {/* Benefícios rápidos */}
            <div className="mt-8 space-y-4">
              {[
                "Resposta rápida e atendimento humanizado",
                "Ajuda na escolha do plano ideal",
                "Suporte para agendamento imediato",
                "Especialistas preparados para o mercado angolano",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-700/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-[10px] text-amber-700"></i>
                  </div>

                  <span className="font-medium text-sm lg:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card direito */}
          <div className="relative">
            <div className="bg-white border border-neutral-200 rounded-3xl p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06)]">
              
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl mb-8 shadow-lg">
                <i className="fab fa-whatsapp"></i>
              </div>

              <h3 className="text-2xl font-extrabold text-neutral-900 mb-4">
                Atendimento Comercial Direto
              </h3>

              <p className="text-neutral-500 leading-relaxed mb-8">
                Fale agora com a nossa equipa e receba apoio personalizado para
                implementar o HossFatura no seu negócio.
              </p>

              {/* Número */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-5 mb-8">
                <p className="text-xs uppercase tracking-widest font-bold text-neutral-400 mb-2">
                  WhatsApp Comercial
                </p>

                <p className="text-xl font-extrabold text-neutral-900 tracking-tight">
                  +244 9XX XXX XXX
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/244900000000"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-4 bg-neutral-900 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <span>Falar no WhatsApp</span>

                <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </a>

              <p className="text-[11px] text-neutral-400 text-center mt-6 font-medium uppercase tracking-widest">
                Segunda a Sexta • 08h às 18h
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
