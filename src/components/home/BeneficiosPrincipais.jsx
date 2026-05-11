import { Link } from "react-router-dom";

export default function BeneficiosPrincipais() {
  const beneficios = [
    {
      icon: "file-invoice-dollar",
      title: "Emissão de Faturas",
      desc: "Documentos certificados e em total conformidade com as normas da AGT em segundos.",
    },
    {
      icon: "boxes-stacked",
      title: "Controlo de Stock",
      desc: "Gestão inteligente de inventário com alertas de rutura e entradas automatizadas.",
    },
    {
      icon: "users-gear",
      title: "Gestão de Clientes",
      desc: "Base de dados organizada com histórico de compras e limites de crédito integrados.",
    },
    {
      icon: "chart-pie",
      title: "Relatórios Avançados",
      desc: "Análises detalhadas de vendas, lucros e impostos para decisões estratégicas.",
    },
    {
      icon: "user-lock",
      title: "Multiutilizador",
      desc: "Níveis de acesso personalizados para cada membro da sua equipa com total segurança.",
    },
    {
      icon: "shield-halved",
      title: "Segurança de Dados",
      desc: "Backups automáticos e proteção de alto nível para as informações do seu negócio.",
    },
  ];

  return (
    <section className="bg-neutral-50 text-neutral-900 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-zinc-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-6">
            <span className="text-amber-700 text-[10px] uppercase tracking-widest font-bold">Ecossistema HossFatura</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight mb-6">
            Tudo o que precisa para gerir o seu negócio <span className="text-amber-700 italic">com excelência</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Uma solução robusta e intuitiva, desenhada especificamente para enfrentar os desafios do mercado angolano.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:border-amber-600/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 mb-6 group-hover:bg-amber-700 group-hover:border-amber-600 transition-all duration-500 shadow-sm">
                <i className={`fas fa-${item.icon} text-xl text-amber-700 group-hover:text-white transition-colors duration-500`}></i>
              </div>

              <h3 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-amber-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Botão de Ação Inferior Atualizado para o Padrão Premium */}
        <div className="mt-20 flex flex-col items-center">
          <Link
            to="/demonstracao"
            className="group flex items-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:-translate-y-1"
          >
            <span>Pedir demonstração gratuita</span>
            <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-arrow-right"></i>
            </div>
          </Link>
          <p className="mt-6 text-xs text-neutral-400 font-medium uppercase tracking-tighter">
            <i className="fas fa-shield-alt mr-2 text-amber-700"></i>
            Sem necessidade de cartão de crédito • Suporte em Luanda
          </p>
        </div>
      </div>
    </section>
  );
}
