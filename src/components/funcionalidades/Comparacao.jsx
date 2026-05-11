import { Link } from "react-router-dom";

export default function Comparacao() {
  const antes = [
    "Processos manuais e demorados",
    "Erros frequentes na emissão de faturas",
    "Falta de controlo de stock",
    "Dificuldade no acompanhamento financeiro",
    "Relatórios confusos e pouco confiáveis",
    "Risco elevado de não conformidade fiscal",
  ];

  const depois = [
    "Faturação rápida e automatizada",
    "Documentos certificados e sem erros",
    "Stock atualizado em tempo real",
    "Controlo financeiro centralizado",
    "Relatórios claros para decisões estratégicas",
    "Total conformidade com as exigências da AGT",
  ];

  return (
    <section className="bg-white py-24 text-neutral-900 relative overflow-hidden">
      {/* Linha técnica superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Impacto Operacional
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Antes vs <span className="text-amber-700 italic">Depois</span>
          </h2>

          <div className="w-16 h-1 bg-neutral-900 mx-auto mt-6 rounded-full"></div>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            A evolução necessária para o seu negócio prosperar no atual cenário económico angolano.
          </p>
        </div>

        {/* Grid de Comparação */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Card Antes - Visual "Desgastado/Burocrático" */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-4xl p-10 lg:p-12 transition-all duration-500 hover:border-neutral-300">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:bg-red-50 group-hover:border-red-100 transition-colors duration-500">
                <i className="fas fa-times text-neutral-300 group-hover:text-red-500 text-lg transition-colors duration-500"></i>
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                  Cenário Atual
                </p>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
                  Gestão Tradicional
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {antes.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
                  <p className="text-neutral-500 font-medium leading-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card Depois - Visual "Industrial Premium" */}
          <div className="group bg-neutral-900 text-white rounded-4xl p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-neutral-900/20">
            {/* Glow Interno */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-700/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-700 flex items-center justify-center shadow-lg shadow-amber-700/30 group-hover:scale-110 transition-transform duration-500">
                  <i className="fas fa-check text-white text-lg"></i>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500/80">
                    Com HossFatura
                  </p>
                  <h3 className="text-2xl font-black tracking-tight">
                    Futuro Digital
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {depois.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="mt-1 shrink-0 w-5 h-5 bg-amber-700/10 rounded-md flex items-center justify-center group-hover/item:bg-amber-700 transition-colors duration-300">
                      <i className="fas fa-check text-amber-500 text-[8px] group-hover/item:text-white transition-colors duration-300"></i>
                    </div>
                    <p className="text-zinc-300 font-bold leading-tight group-hover/item:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA Principal de Transição - Ajustado para Preto */}
        <div className="text-center mt-24">
          <Link
            to="/demonstracao"
            className="group inline-flex items-center justify-center gap-5 bg-neutral-900 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1"
          >
            <span>Quero modernizar minha empresa</span>

            <div className="bg-white/10 p-1.5 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-arrow-right text-[10px]"></i>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
             {["Implementação Local", "Suporte 24/7", "Conformidade AGT"].map((badge, bIdx) => (
               <div key={bIdx} className="flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-amber-700"></div>
                 <span className="text-[10px] uppercase font-black tracking-widest text-neutral-400">{badge}</span>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
