import { Link } from "react-router-dom";

export default function ComoFunciona() {
  const passos = [
    {
      icon: "user-plus",
      title: "Criar Conta",
      desc: "Registe-se em poucos segundos e aceda ao painel de controlo imediatamente sem burocracias.",
    },
    {
      icon: "building-circle-check",
      title: "Configurar Empresa",
      desc: "Adicione o seu NIF e logótipo. O sistema configura automaticamente os parâmetros da AGT.",
    },
    {
      icon: "file-signature",
      title: "Começar a Faturar",
      desc: "Emita faturas certificadas e controle o seu stock em tempo real de forma profissional.",
    },
  ];

  return (
    <section className="bg-neutral-100 text-neutral-900 py-24 relative overflow-hidden">
      {/* Detalhe de fundo - Diagonal decorativa */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white clip-path-slant-down"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-700 text-xs font-black uppercase tracking-[0.3em] bg-amber-100 px-4 py-2 rounded-full">
            Passo a Passo
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-6 tracking-tight">
            Simplicidade no <span className="text-amber-700 italic">workflow</span>
          </h2>
          <p className="text-neutral-600 mt-4 text-lg">
            Desenhamos um processo intuitivo para que se foque no que importa: crescer o seu negócio em Angola.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-3 gap-12 relative">

          {/* Linha de conexão (Desktop) - Estilo Industrial */}
          <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-neutral-200">
            <div className="absolute inset-0 bg-amber-700/30 w-1/2 animate-pulse"></div>
          </div>

          
          {passos.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Círculo do Número */}
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-amber-500 flex items-center justify-center font-black text-xl mb-8 border-4 border-neutral-100 shadow-xl group-hover:bg-amber-700 group-hover:text-white transition-all duration-500 z-20">
                  {index + 1}
                </div>

                {/* Card Content */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm group-hover:shadow-xl group-hover:border-amber-700/20 transition-all duration-500 text-center w-full">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-neutral-50 mb-6 group-hover:rotate-6 transition-transform duration-500">
                    <i className={`fas fa-${item.icon} text-2xl text-amber-700`}></i>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-neutral-800">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Seta para mobile (apenas visual) */}
              {index < passos.length - 1 && (
                <div className="md:hidden flex justify-center my-4 text-neutral-300">
                  <i className="fas fa-chevron-down animate-bounce"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Profissional */}
        <div className="mt-20 flex flex-col items-center">
          <Link
            to="/criar-conta"
            className="group flex items-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:-translate-y-1"
          >
            <span>Criar minha conta agora</span>
            <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-arrow-right"></i>
            </div>
          </Link>
          <p className="text-neutral-500 text-xs mt-6 font-medium">
             <i className="fas fa-clock mr-2"></i>
             Configuração concluída em menos de 2 minutos
          </p>
        </div>

      </div>
    </section>
  );
}
