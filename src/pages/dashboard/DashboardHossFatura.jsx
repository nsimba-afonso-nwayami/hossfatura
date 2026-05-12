import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import ModalSmall from "./components/ModalSmall";
import { Link } from "react-router-dom";

export default function DashboardHossFatura() {
  const [openModal, setOpenModal] = useState(false);

  const stats = [
    {
      title: "Faturas Emitidas",
      value: "1.248",
      icon: "file-invoice-dollar",
      desc: "Este mês",
    },
    {
      title: "Clientes Ativos",
      value: "342",
      icon: "users",
      desc: "Base atual",
    },
    {
      title: "Produtos",
      value: "587",
      icon: "box-open",
      desc: "Em stock",
    },
    {
      title: "Despesas",
      value: "AOA 2.4M",
      icon: "wallet",
      desc: "Últimos 30 dias",
    },
  ];

  const quickActions = [
    {
      title: "Nova Fatura",
      icon: "plus",
      link: "/hossfatura/dashboard/documentos",
    },
    {
      title: "Novo Cliente",
      icon: "user-plus",
      link: "/hossfatura/dashboard/clientes",
    },
    {
      title: "Novo Produto",
      icon: "cube",
      link: "/hossfatura/dashboard/produtos",
    },
    {
      title: "Nova Despesa",
      icon: "receipt",
      link: "/hossfatura/dashboard/despesas",
    },
  ];

  return (
    <>
      <title>Painel Administrativo | HossFatura</title>

      <HossFaturaLayout title="Painel de Controle">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão Inteligente
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Bem-vindo ao seu painel{" "}
                  <span className="text-amber-700 italic">
                    HossFatura
                  </span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Controle faturação, clientes, despesas, produtos e toda
                  a gestão empresarial da sua operação em um único lugar.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Resumo Financeiro</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-chart-line text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700">
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    HossFatura
                  </span>
                </div>

                <h3 className="text-sm font-bold text-neutral-500">
                  {item.title}
                </h3>

                <p className="text-3xl font-extrabold text-neutral-900 mt-2">
                  {item.value}
                </p>

                <p className="text-sm text-neutral-400 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* AÇÕES RÁPIDAS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-neutral-900">
                Ações rápidas
              </h2>

              <p className="text-neutral-500 mt-2">
                Execute tarefas frequentes com mais rapidez.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="group border border-neutral-200 rounded-3xl p-6 hover:border-amber-300 hover:bg-amber-50/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 group-hover:bg-amber-100 border border-neutral-200 group-hover:border-amber-200 flex items-center justify-center text-amber-700 transition-all duration-300">
                    <i className={`fas fa-${action.icon}`}></i>
                  </div>

                  <h3 className="font-bold text-neutral-900 mt-5">
                    {action.title}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-2">
                    Acesso rápido ao módulo
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* ATIVIDADE RECENTE */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  Atividade recente
                </h2>

                <p className="text-neutral-500 mt-2">
                  Últimas movimentações do sistema
                </p>
              </div>

              <Link
                to="/hossfatura/dashboard/documentos"
                className="text-sm font-bold text-amber-700 hover:text-amber-600 transition-colors"
              >
                Ver tudo
              </Link>
            </div>

            <div className="space-y-4">
              {[
                "Nova fatura emitida para Cliente Premium",
                "Produto atualizado no stock principal",
                "Nova despesa registrada no sistema",
                "Fornecedor adicionado com sucesso",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                    <i className="fas fa-check"></i>
                  </div>

                  <p className="text-neutral-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

        <ModalSmall
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Resumo Financeiro"
          icon="fas fa-chart-line"
        >
          <div className="space-y-6">
            <p className="text-neutral-600 leading-relaxed">
              Aqui poderá visualizar indicadores financeiros,
              faturação mensal, despesas operacionais e análises
              completas de desempenho empresarial.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="border border-amber-100 rounded-3xl p-6">
                <h3 className="font-bold text-neutral-900">
                  Receita Mensal
                </h3>
                <p className="text-2xl font-extrabold text-amber-700 mt-2">
                  AOA 8.450.000
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-6">
                <h3 className="font-bold text-neutral-900">
                  Despesas Totais
                </h3>
                <p className="text-2xl font-extrabold text-amber-700 mt-2">
                  AOA 2.400.000
                </p>
              </div>
            </div>
          </div>
        </ModalSmall>
      </HossFaturaLayout>
    </>
  );
}
