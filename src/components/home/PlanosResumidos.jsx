import { Link } from "react-router-dom";

export default function PlanosResumidos() {
  const planos = [
    {
      icon: "seedling",
      title: "Plano Básico",
      desc: "Ideal para pequenos negócios que estão a começar.",
      features: [
        "Faturação essencial",
        "Gestão de clientes",
        "Suporte básico",
      ],
      highlight: false,
    },
    {
      icon: "chart-line",
      title: "Plano Profissional",
      desc: "Perfeito para empresas em crescimento.",
      features: [
        "Tudo do Básico",
        "Gestão de stock",
        "Relatórios avançados",
      ],
      highlight: true,
    },
    {
      icon: "building",
      title: "Plano Empresarial",
      desc: "Solução completa para empresas de maior dimensão.",
      features: [
        "Tudo do Profissional",
        "Multiutilizador",
        "Acesso avançado e permissões",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-neutral-50 text-neutral-900 py-24 relative overflow-hidden">
      {/* Detalhe técnico no topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Escalabilidade Real
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Escolha o plano ideal para o seu <span className="text-amber-700">negócio</span>
          </h2>
          <p className="text-neutral-500 mt-6 text-lg">
            Comece simples e evolua à medida que o seu negócio cresce com tecnologia de ponta.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`group relative bg-white border rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2
              ${plano.highlight 
                ? "border-amber-700 shadow-[0_25px_50px_-12px_rgba(180,83,9,0.15)] z-10 scale-[1.05]" 
                : "border-neutral-200 hover:border-amber-700/30"
              }`}
            >
              {/* Badge de Destaque */}
              {plano.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-amber-700/20">
                  Mais Escolhido
                </div>
              )}

              {/* Ícone Padronizado */}
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl border mb-8 transition-all duration-500
                ${plano.highlight 
                  ? "bg-amber-700 border-amber-600 text-white shadow-lg shadow-amber-700/20" 
                  : "bg-neutral-50 border-neutral-100 text-amber-700 group-hover:bg-amber-700 group-hover:border-amber-700 group-hover:text-white"
                }`}
              >
                <i className={`fas fa-${plano.icon} text-xl`}></i>
              </div>

              <h3 className="text-2xl font-extrabold text-center mb-3 tracking-tight">
                {plano.title}
              </h3>

              <p className="text-sm text-neutral-500 text-center mb-8 leading-relaxed h-10">
                {plano.desc}
              </p>

              <div className="h-px bg-neutral-100 w-full mb-8"></div>

              {/* Lista de Funcionalidades */}
              <ul className="space-y-4 mb-10">
                {plano.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-600">
                    <div className="shrink-0 w-5 h-5 bg-amber-700/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-amber-700 text-[8px]"></i>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA - Seguindo Estritamente o Padrão Unificado */}
              <Link
                to="/planos"
                className={`group/btn flex items-center justify-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl
                ${plano.highlight
                  ? "bg-amber-700 hover:bg-amber-600 text-white shadow-amber-700/20"
                  : "bg-neutral-900 hover:bg-amber-700 text-white shadow-neutral-900/10"
                }`}
              >
                <span>Ver Plano</span>
                <div className={`p-1 rounded-md transition-colors ${plano.highlight ? "bg-white/20 group-hover/btn:bg-white/30" : "bg-white/10 group-hover/btn:bg-white/20"}`}>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div className="text-center mt-20">
          <Link
            to="/planos"
            className="group inline-flex items-center gap-2 text-neutral-500 font-bold hover:text-amber-700 transition-colors uppercase text-xs tracking-widest"
          >
            <span>Comparar todos os planos detalhadamente</span>
            <i className="fas fa-chevron-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

      </div>
    </section>
  );
}
