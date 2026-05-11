import { Link } from "react-router-dom";

export default function CardsPlanos() {
  const planos = [
    {
      icon: "seedling",
      title: "Plano Básico",
      price: "19.900",
      period: "/mês",
      desc: "Ideal para pequenos negócios que estão a começar e precisam de uma solução simples e eficiente.",
      features: [
        "Faturação essencial certificada",
        "Gestão de clientes",
        "Recibos e proformas",
        "Suporte técnico básico",
        "1 Utilizador incluído",
      ],
      highlight: false,
    },
    {
      icon: "chart-line",
      title: "Plano Profissional",
      price: "39.900",
      period: "/mês",
      desc: "Perfeito para empresas em crescimento que precisam de mais controlo e automação.",
      features: [
        "Tudo do Plano Básico",
        "Gestão completa de stock",
        "Relatórios avançados",
        "Fluxo de caixa e financeiro",
        "Até 5 utilizadores",
      ],
      highlight: true,
    },
    {
      icon: "building",
      title: "Plano Empresarial",
      price: "Sob consulta",
      period: "",
      desc: "Solução robusta para empresas maiores que exigem controlo avançado e escalabilidade total.",
      features: [
        "Tudo do Plano Profissional",
        "Multiutilizador avançado",
        "Permissões personalizadas",
        "Auditoria e backups automáticos",
        "Suporte prioritário",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-neutral-50 text-neutral-900 py-24 relative overflow-hidden">
      {/* Linha técnica superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Planos e Preços
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Invista no crescimento do seu{" "}
            <span className="text-amber-700">negócio</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg">
            Escolha o plano ideal para a sua empresa e tenha acesso a uma
            plataforma preparada para o mercado angolano.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {planos.map((plano, index) => (
            <div
              key={index}
              className={`group relative bg-white border rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2
              ${
                plano.highlight
                  ? "border-amber-700 shadow-[0_25px_50px_-12px_rgba(180,83,9,0.15)] z-10 scale-[1.05]"
                  : "border-neutral-200 hover:border-amber-700/30"
              }`}
            >
              {/* Badge destaque */}
              {plano.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-amber-700/20">
                  Mais Escolhido
                </div>
              )}

              {/* Ícone */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl border mb-8 transition-all duration-500
                ${
                  plano.highlight
                    ? "bg-amber-700 border-amber-600 text-white shadow-lg shadow-amber-700/20"
                    : "bg-neutral-50 border-neutral-100 text-amber-700 group-hover:bg-amber-700 group-hover:border-amber-700 group-hover:text-white"
                }`}
              >
                <i className={`fas fa-${plano.icon} text-xl`}></i>
              </div>

              {/* Nome */}
              <h3 className="text-2xl font-extrabold text-center mb-3 tracking-tight">
                {plano.title}
              </h3>

              {/* Preço */}
              <div className="text-center mb-6">
                <div className="flex items-end justify-center gap-1">
                  {plano.price !== "Sob consulta" ? (
                    <>
                      <span className="text-sm text-neutral-500 font-medium">
                        Kz
                      </span>
                      <span className="text-4xl font-black tracking-tight">
                        {plano.price}
                      </span>
                      <span className="text-sm text-neutral-500 font-medium">
                        {plano.period}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-black tracking-tight">
                      {plano.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Descrição */}
              <p className="text-sm text-neutral-500 text-center mb-8 leading-relaxed min-h-18">
                {plano.desc}
              </p>

              <div className="h-px bg-neutral-100 w-full mb-8"></div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plano.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-neutral-600"
                  >
                    <div className="shrink-0 w-5 h-5 bg-amber-700/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-amber-700 text-[8px]"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/demonstracao"
                className={`group/btn flex items-center justify-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl
                ${
                  plano.highlight
                    ? "bg-amber-700 hover:bg-amber-600 text-white shadow-amber-700/20"
                    : "bg-neutral-900 hover:bg-amber-700 text-white shadow-neutral-900/10"
                }`}
              >
                <span>Escolher Plano</span>

                <div
                  className={`p-1 rounded-md transition-colors ${
                    plano.highlight
                      ? "bg-white/20 group-hover/btn:bg-white/30"
                      : "bg-white/10 group-hover/btn:bg-white/20"
                  }`}
                >
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div className="text-center mt-20">
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            Sem taxas escondidas • Implementação local • Suporte técnico incluído
          </p>
        </div>

      </div>
    </section>
  );
}
