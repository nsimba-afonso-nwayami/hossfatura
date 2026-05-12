import { Link } from "react-router-dom";

export default function BeneficiosDemo() {
  const beneficios = [
    {
      icon: "display",
      title: "Demonstração Completa",
      desc: "Veja o sistema em funcionamento real e entenda como ele se adapta ao seu negócio.",
    },
    {
      icon: "user-tie",
      title: "Consultoria Especializada",
      desc: "Um especialista apresenta as melhores soluções para a sua empresa e responde todas as dúvidas.",
    },
    {
      icon: "building-circle-check",
      title: "Adaptado ao Mercado Angolano",
      desc: "Processos pensados para a realidade fiscal e operacional das empresas em Angola.",
    },
    {
      icon: "chart-line",
      title: "Análise de Crescimento",
      desc: "Descubra como automatizar processos e aumentar a produtividade da sua equipa.",
    },
    {
      icon: "headset",
      title: "Suporte Local",
      desc: "Atendimento rápido com suporte especializado e acompanhamento durante a implementação.",
    },
    {
      icon: "shield",
      title: "Segurança e Confiança",
      desc: "Dados protegidos, backups automáticos e total controlo das operações da sua empresa.",
    },
  ];

  return (
    <section className="bg-white py-24 text-neutral-900 relative overflow-hidden">
      {/* Linha superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Valor Real
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            O que ganha com a sua{" "}
            <span className="text-amber-700 italic">demonstração</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Mais do que uma apresentação, oferecemos uma visão estratégica
            para transformar a gestão da sua empresa com tecnologia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="group bg-neutral-50 border border-neutral-200 rounded-3xl p-8 hover:bg-white hover:border-amber-700/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-neutral-200 mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-500">
                <i
                  className={`fas fa-${item.icon} text-xl text-amber-700 group-hover:text-white transition-colors duration-500`}
                ></i>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-amber-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Informação final */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center bg-neutral-50 border border-neutral-200 rounded-3xl px-10 py-8">
            <div className="w-14 h-14 rounded-2xl bg-amber-700/10 flex items-center justify-center mb-5">
              <i className="fas fa-clock text-amber-700 text-xl"></i>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              Processo rápido e sem burocracia
            </h3>

            <p className="text-neutral-500 max-w-xl leading-relaxed">
              Após preencher o formulário acima, a nossa equipa entra em contacto
              consigo rapidamente para agendar a melhor data e horário da sua
              demonstração personalizada.
            </p>

            <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-6">
              Resposta rápida • Atendimento profissional • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
