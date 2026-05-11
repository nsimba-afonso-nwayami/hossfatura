import { Link } from "react-router-dom";

export default function FuncionalidadesCategoria() {
  const categorias = [
    {
      icon: "file-invoice-dollar",
      title: "Faturação",
      items: [
        "Faturas e Notas de Débito",
        "Recibos e Adiantamentos",
        "Proformas e Orçamentos",
        "Notas de Crédito e Retificações",
      ],
    },
    {
      icon: "boxes-stacked",
      title: "Stock",
      items: [
        "Gestão de Entradas e Saídas",
        "Inventário em Tempo Real",
        "Alertas de Stock Mínimo",
        "Gestão de Lotes e Validades",
      ],
    },
    {
      icon: "users",
      title: "Clientes",
      items: [
        "Cadastro Unificado",
        "Histórico de Transações",
        "Gestão de Conta Corrente",
        "Análise de Crédito",
      ],
    },
    {
      icon: "wallet",
      title: "Financeiro",
      items: [
        "Fluxo de Caixa Diário",
        "Gestão de Despesas Externas",
        "Conciliação Bancária",
        "Receitas Projetadas",
      ],
    },
    {
      icon: "chart-line",
      title: "Relatórios",
      items: [
        "Vendas por Categoria",
        "Cálculo de Lucro Real",
        "Mapas de Impostos (AGT)",
        "Dashboards de Desempenho",
      ],
    },
    {
      icon: "shield-halved",
      title: "Segurança",
      items: [
        "Permissões por Utilizador",
        "Backups Automáticos na Cloud",
        "Logs de Auditoria",
        "Acesso via Autenticação 2FA",
      ],
    },
  ];

  return (
    <section className="bg-neutral-50 py-24 text-neutral-900 relative overflow-hidden">
      {/* Linha técnica superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Arquitetura de Gestão
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tudo organizado para máxima{" "}
            <span className="text-amber-700 italic">eficiência.</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Um ecossistema modular desenvolvido para responder às necessidades críticas do mercado angolano.
          </p>
        </div>

        {/* Grid de Módulos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="group relative bg-white border border-neutral-200 rounded-3xl p-10 transition-all duration-500 hover:border-amber-700/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              {/* Overlay sutil de fundo no hover */}
              <div className="absolute inset-0 bg-linear-to-b from-amber-50/0 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 mb-8 group-hover:bg-amber-700 group-hover:border-amber-700 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <i
                    className={`fas fa-${categoria.icon} text-xl text-amber-700 group-hover:text-white transition-colors duration-500`}
                  ></i>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-neutral-900 mb-6 group-hover:text-amber-700 transition-colors">
                  {categoria.title}
                </h3>

                {/* Items List */}
                <div className="space-y-4">
                  {categoria.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-neutral-600 group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-amber-700 transition-colors duration-300"></div>
                      <span className="text-sm font-semibold tracking-tight group-hover/item:text-neutral-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Unificado para Fundo Claro */}
        <div className="text-center mt-24">
          <Link
            to="/demonstracao"
            className="group inline-flex items-center justify-center gap-5 bg-neutral-900 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1"
          >
            <span>Solicitar Demonstração</span>

            <div className="bg-white/10 p-1.5 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-arrow-right text-[10px]"></i>
            </div>
          </Link>
          
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-8">
            Sem compromisso • Implementação Local
          </p>
        </div>

      </div>
    </section>
  );
}
