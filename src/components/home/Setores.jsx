import { Link } from "react-router-dom";

export default function Setores() {
  const setores = [
    { icon: "store", title: "Lojas" },
    { icon: "shopping-cart", title: "Supermercados" },
    { icon: "pills", title: "Farmácias" },
    { icon: "utensils", title: "Restaurantes" },
    { icon: "warehouse", title: "Armazéns" },
    { icon: "briefcase", title: "Empresas de Serviços" },
    { icon: "tools", title: "Oficinas" },
    { icon: "truck", title: "Distribuidoras" },
  ];

  return (
    <section className="bg-white text-neutral-900 py-24 relative overflow-hidden">
      
      {/* Detalhe de linha técnica no topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Versatilidade Industrial
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Setores que <span className="text-amber-700">atendemos</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Uma solução robusta que se adapta às particularidades de cada negócio em Angola,
            garantindo eficiência operacional e conformidade fiscal.
          </p>
        </div>

        {/* Grid de Setores */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {setores.map((item, index) => (
            <div
              key={index}
              className="group bg-neutral-50 border border-neutral-100 rounded-2xl p-8 text-center hover:bg-white hover:border-amber-700/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white border border-neutral-200 mb-5 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-500 shadow-xs">
                <i className={`fas fa-${item.icon} text-lg text-amber-700 group-hover:text-white transition-colors duration-500`}></i>
              </div>

              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800 group-hover:text-amber-700 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA - Padrão Industrial Dark */}
        <div className="text-center mt-20">
          <Link
            to="/demonstracao"
            className="group inline-flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-amber-700/20 hover:-translate-y-1"
          >
            <span>Ver como funciona no meu setor</span>
            <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-arrow-right text-[10px]"></i>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
