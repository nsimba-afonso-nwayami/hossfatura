import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import { Link } from "react-router-dom";

export default function EmpresaHossFatura() {
  const cards = [
    {
      title: "Subscrição",
      desc: "Gerencie o seu plano, pagamentos e renovação do serviço.",
      icon: "fa-solid fa-crown",
      link: "/hossfatura/dashboard/empresa/subscricao/escolher-pacote",
    },
    {
      title: "Configurações Gerais",
      desc: "Defina preferências do sistema, dados fiscais e parâmetros.",
      icon: "fa-solid fa-gear",
      link: "/hossfatura/dashboard/empresa/configuracoes",
    },
    {
      title: "Relatórios",
      desc: "Acompanhe faturação, despesas, desempenho e análises.",
      icon: "fa-solid fa-chart-column",
      link: "/hossfatura/dashboard/empresa/relatorios",
    },
    {
      title: "Utilizadores",
      desc: "Controle acessos, permissões e membros da sua equipa.",
      icon: "fa-solid fa-users",
      link: "/hossfatura/dashboard/empresa/utilizadores",
    },
    {
      title: "Contas Bancárias",
      desc: "Gerencie contas para recebimentos e operações financeiras.",
      icon: "fa-solid fa-building-columns",
      link: "/hossfatura/dashboard/empresa/contas-bancarias",
    },
    {
      title: "FAQ",
      desc: "Perguntas frequentes e respostas rápidas sobre o sistema.",
      icon: "fa-solid fa-circle-question",
      link: "/perguntas-frequentes",
    },
    {
      title: "Termos e Condições",
      desc: "Consulte políticas, regras de uso e condições contratuais.",
      icon: "fa-solid fa-file-contract",
      link: "/termos",
    },
  ];

  return (
    <>
      <title>Empresa | HossFatura</title>

      <HossFaturaLayout title="Empresa">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Gestão Empresarial
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                Centro de controlo da{" "}
                <span className="text-amber-700 italic">
                  sua empresa
                </span>
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                Gerencie definições importantes do seu negócio,
                utilizadores, relatórios, subscrição e toda a
                estrutura administrativa da plataforma.
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {cards.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                target={
                  item.title === "FAQ" || item.title === "Termos e Condições"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.title === "FAQ" || item.title === "Termos e Condições"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group bg-white border border-amber-100 rounded-4xl p-7 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                  <i className={`${item.icon} text-lg`}></i>
                </div>

                <h2 className="text-xl font-extrabold text-neutral-900 mt-6">
                  {item.title}
                </h2>

                <p className="text-neutral-500 mt-3 leading-relaxed text-sm">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 mt-6 text-sm font-bold text-amber-700 group-hover:gap-3 transition-all duration-300">
                  Acessar
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </Link>
            ))}
          </div>

        </section>
      </HossFaturaLayout>
    </>
  );
}
