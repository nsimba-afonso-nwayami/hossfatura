import { Link } from "react-router-dom";

export default function CardsComparativos() {
  const comparativos = [
    {
      title: "Plano Básico",
      icon: "seedling",
      destaque: false,
      itens: {
        faturacao: "Essencial",
        stock: "Limitado",
        relatorios: "Básicos",
        utilizadores: "1 Utilizador",
        suporte: "Suporte Básico",
        backup: "Manual",
      },
    },
    {
      title: "Plano Profissional",
      icon: "chart-line",
      destaque: true,
      itens: {
        faturacao: "Completa",
        stock: "Completo",
        relatorios: "Avançados",
        utilizadores: "Até 5 Utilizadores",
        suporte: "Prioritário",
        backup: "Automático",
      },
    },
    {
      title: "Plano Empresarial",
      icon: "building",
      destaque: false,
      itens: {
        faturacao: "Completa + Multiempresa",
        stock: "Avançado + Lotes",
        relatorios: "Executivos + BI",
        utilizadores: "Ilimitados",
        suporte: "VIP Dedicado",
        backup: "Cloud + Auditoria",
      },
    },
  ];

  const linhas = [
    { key: "faturacao", label: "Faturação" },
    { key: "stock", label: "Gestão de Stock" },
    { key: "relatorios", label: "Relatórios" },
    { key: "utilizadores", label: "Utilizadores" },
    { key: "suporte", label: "Suporte Técnico" },
    { key: "backup", label: "Backup e Segurança" },
  ];

  return (
    <section className="bg-white py-24 text-neutral-900 relative overflow-hidden">
      {/* Linha superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.35em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Comparação Estratégica
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Compare e escolha com{" "}
            <span className="text-amber-700 italic">clareza</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Veja rapidamente qual plano entrega o melhor equilíbrio entre
            investimento, controlo e crescimento para a sua empresa.
          </p>
        </div>

        {/* Cards comparativos */}
        <div className="grid lg:grid-cols-3 gap-8">
          {comparativos.map((plano, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border p-10 transition-all duration-500 hover:-translate-y-2
                ${
                  plano.destaque
                    ? "bg-neutral-900 text-white border-amber-700 shadow-[0_25px_50px_-12px_rgba(180,83,9,0.18)] scale-[1.03]"
                    : "bg-neutral-50 border-neutral-200 hover:border-amber-700/20"
                }
              `}
            >
              {/* Badge */}
              {plano.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                  Recomendado
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-8 border
                  ${
                    plano.destaque
                      ? "bg-amber-700 border-amber-600 text-white"
                      : "bg-white border-neutral-200 text-amber-700"
                  }
                `}
              >
                <i className={`fas fa-${plano.icon} text-xl`}></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold text-center mb-10">
                {plano.title}
              </h3>

              {/* Linhas */}
              <div className="space-y-5">
                {linhas.map((linha, i) => (
                  <div
                    key={i}
                    className={`pb-4 border-b ${
                      plano.destaque
                        ? "border-zinc-800"
                        : "border-neutral-200"
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-widest mb-2
                        ${
                          plano.destaque
                            ? "text-zinc-400"
                            : "text-neutral-400"
                        }
                      `}
                    >
                      {linha.label}
                    </p>

                    <p
                      className={`font-semibold leading-relaxed
                        ${
                          plano.destaque
                            ? "text-white"
                            : "text-neutral-800"
                        }
                      `}
                    >
                      {plano.itens[linha.key]}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  to="/demonstracao"
                  className={`group flex items-center justify-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300
                    ${
                      plano.destaque
                        ? "bg-amber-700 hover:bg-amber-600 text-white"
                        : "bg-neutral-900 hover:bg-amber-700 text-white"
                    }
                  `}
                >
                  <span>Selecionar</span>

                  <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div className="text-center mt-20">
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.25em] font-bold">
            Cresça sem trocar de sistema • Escale no seu ritmo
          </p>
        </div>

      </div>
    </section>
  );
}
