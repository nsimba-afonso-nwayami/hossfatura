import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import ModalSmall from "./components/ModalSmall";
import { Link } from "react-router-dom";

export default function NotificacoesHossFatura() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notificacoes = [
    {
      titulo: "Nova fatura emitida",
      descricao: "Foi emitida uma nova fatura para Cliente Premium.",
      tempo: "Há 10 minutos",
      tipo: "Faturação",
      icon: "fa-file-invoice-dollar",
    },
    {
      titulo: "Produto com baixo stock",
      descricao: "O produto Papel Térmico está com stock reduzido.",
      tempo: "Há 1 hora",
      tipo: "Stock",
      icon: "fa-box-open",
    },
    {
      titulo: "Nova despesa registada",
      descricao: "Uma nova despesa operacional foi adicionada ao sistema.",
      tempo: "Hoje",
      tipo: "Despesas",
      icon: "fa-wallet",
    },
    {
      titulo: "Novo utilizador adicionado",
      descricao: "Foi adicionado um novo utilizador à equipa administrativa.",
      tempo: "Ontem",
      tipo: "Utilizadores",
      icon: "fa-users",
    },
  ];

  const openNotification = (item) => {
    setSelectedNotification(item);
    setOpenModal(true);
  };

  return (
    <>
      <title>Notificações | HossFatura</title>

      <HossFaturaLayout title="Notificações">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Central de Alertas
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                Suas{" "}
                <span className="text-amber-700 italic">
                  notificações
                </span>
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                Acompanhe atividades recentes, alertas importantes e
                atualizações do sistema em tempo real.
              </p>
            </div>
          </div>

          {/* RESUMO */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Total de Notificações
              </p>
              <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                24
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Não Lidas
              </p>
              <p className="text-2xl font-extrabold text-amber-700 mt-2">
                6
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Hoje
              </p>
              <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                12
              </p>
            </div>
          </div>

          {/* LISTA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">

            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-neutral-900">
                Notificações recentes
              </h2>

              <p className="text-neutral-500 mt-2">
                Clique numa notificação para visualizar os detalhes
              </p>
            </div>

            <div className="space-y-4">
              {notificacoes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => openNotification(item)}
                  className="w-full text-left border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>

                      <div>
                        <p className="text-sm uppercase font-black tracking-widest text-neutral-400">
                          {item.tipo}
                        </p>

                        <h3 className="font-bold text-neutral-900 mt-1">
                          {item.titulo}
                        </h3>

                        <p className="text-neutral-500 mt-2 text-sm">
                          {item.descricao}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm font-bold text-amber-700">
                      {item.tempo}
                    </div>

                  </div>
                </button>
              ))}
            </div>

          </div>

        </section>

        {/* MODAL DETALHE */}
        <ModalSmall
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Detalhes da Notificação"
          icon="fas fa-bell"
        >
          {selectedNotification && (
            <div className="space-y-5">

              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Categoria
                </p>
                <p className="font-bold text-neutral-900 mt-2">
                  {selectedNotification.tipo}
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Título
                </p>
                <p className="font-bold text-neutral-900 mt-2">
                  {selectedNotification.titulo}
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Descrição
                </p>
                <p className="text-neutral-700 mt-2 leading-relaxed">
                  {selectedNotification.descricao}
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Data
                </p>
                <p className="font-bold text-amber-700 mt-2">
                  {selectedNotification.tempo}
                </p>
              </div>

            </div>
          )}
        </ModalSmall>
      </HossFaturaLayout>
    </>
  );
}
