import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function DespesasHossFatura() {
  const [openModal, setOpenModal] = useState(false);

  const despesas = [
    {
      descricao: "Internet empresarial",
      categoria: "Serviços",
      valor: "AOA 85.000",
      status: "Pago",
      data: "10 Maio 2026",
    },
    {
      descricao: "Compra de materiais de escritório",
      categoria: "Operacional",
      valor: "AOA 45.000",
      status: "Pendente",
      data: "08 Maio 2026",
    },
    {
      descricao: "Energia elétrica",
      categoria: "Utilidades",
      valor: "AOA 120.000",
      status: "Pago",
      data: "05 Maio 2026",
    },
    {
      descricao: "Manutenção de sistema",
      categoria: "TI",
      valor: "AOA 200.000",
      status: "Emitido",
      data: "02 Maio 2026",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pago":
        return "bg-green-50 text-green-700 border-green-100";
      case "Pendente":
        return "bg-amber-50 text-amber-700 border-amber-100";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  return (
    <>
      <title>Despesas | HossFatura</title>

      <HossFaturaLayout title="Despesas">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Controlo Financeiro
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Gestão de{" "}
                  <span className="text-amber-700 italic">
                    despesas empresariais
                  </span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Registe e acompanhe todas as despesas da sua empresa com
                  clareza, organização e controlo financeiro em tempo real.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Nova Despesa</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-plus text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* RESUMO */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Total de Despesas
              </p>
              <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                AOA 450.000
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Despesas Pagas
              </p>
              <p className="text-2xl font-extrabold text-green-700 mt-2">
                AOA 205.000
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Pendentes
              </p>
              <p className="text-2xl font-extrabold text-amber-700 mt-2">
                AOA 245.000
              </p>
            </div>
          </div>

          {/* LISTA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  Despesas recentes
                </h2>
                <p className="text-neutral-500 mt-2">
                  Histórico de gastos da empresa
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {despesas.map((item, index) => (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-5 gap-5 items-center">

                    <div className="lg:col-span-2">
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Descrição
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {item.descricao}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Categoria
                      </p>
                      <p className="font-medium text-neutral-700 mt-1">
                        {item.categoria}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Valor
                      </p>
                      <p className="font-bold text-amber-700 mt-1">
                        {item.valor}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`inline-flex px-4 py-2 rounded-full text-xs font-black border ${getStatusStyle(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>

                  </div>

                  <p className="text-xs text-neutral-400 mt-4">
                    Registado em {item.data}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* MODAL */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Nova Despesa"
          icon="fas fa-receipt"
        >
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-bold mb-2">
                Descrição
              </label>
              <input
                type="text"
                placeholder="Ex: Internet, energia, transporte"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Categoria
              </label>
              <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Selecione</option>
                <option>Serviços</option>
                <option>Operacional</option>
                <option>Utilidades</option>
                <option>TI</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Valor
              </label>
              <input
                type="text"
                placeholder="AOA 0,00"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white h-14 rounded-2xl font-bold transition-all duration-300 cursor-pointer"
            >
              Registar Despesa

              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-arrow-right text-[10px]"></i>
              </div>
            </button>

          </form>
        </Modal>

      </HossFaturaLayout>
    </>
  );
}