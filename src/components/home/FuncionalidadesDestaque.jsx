import { Link } from "react-router-dom";

export default function FuncionalidadesDestaque() {
  const funcionalidades = [
    {
      icon: "file-invoice-dollar",
      title: "Faturação",
      desc: "Emita faturas certificadas de forma rápida e profissional.",
    },
    {
      icon: "receipt",
      title: "Recibos",
      desc: "Gere recibos automáticos ligados às suas vendas.",
    },
    {
      icon: "file-signature",
      title: "Proformas",
      desc: "Crie propostas comerciais prontas para envio ao cliente.",
    },
    {
      icon: "cash-register",
      title: "Caixa",
      desc: "Controlo total de entradas e saídas financeiras.",
    },
    {
      icon: "boxes-stacked",
      title: "Stock",
      desc: "Gestão completa de inventário em tempo real.",
    },
    {
      icon: "chart-line",
      title: "Relatórios",
      desc: "Análises detalhadas para decisões mais inteligentes.",
    },
  ];

  return (
    <section className="bg-neutral-50 text-neutral-900 py-24 relative overflow-hidden">
      {/* Detalhe técnico de fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Ecossistema Completo
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Funcionalidades em <span className="text-amber-700">destaque</span>
          </h2>
          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Tudo o que precisa para gerir o seu negócio em Angola num único sistema, 
            totalmente adaptado às exigências do mercado local.
          </p>
        </div>

        {/* Grid de Funcionalidades */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {funcionalidades.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:border-amber-700/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Overlay sutil de hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-500">
                <i className={`fas fa-${item.icon} text-xl text-amber-700 group-hover:text-white transition-colors duration-500`}></i>
              </div>

              <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-amber-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-600 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA - Aplicando o Padrão de Botão Dark com Ícone em Box */}
        <div className="text-center mt-20">
          <Link
            to="/funcionalidades"
            className="group inline-flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-amber-700/20 hover:-translate-y-1"
          >
            <span>Ver todas funcionalidades</span>
            <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-plus text-[10px]"></i>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
