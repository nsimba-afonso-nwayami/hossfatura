import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function DocumentosHossFatura() {
  const [openModal, setOpenModal] = useState(false);

  const documentos = [
    {
      tipo: "Fatura",
      numero: "FT 2026/00124",
      cliente: "Cliente Premium LDA",
      valor: "AOA 450.000",
      status: "Pago",
      data: "12 Maio 2026",
    },
    {
      tipo: "Recibo",
      numero: "RC 2026/00089",
      cliente: "Mercado Central",
      valor: "AOA 180.000",
      status: "Pendente",
      data: "10 Maio 2026",
    },
    {
      tipo: "Proforma",
      numero: "PF 2026/00041",
      cliente: "Grupo Empresarial Alfa",
      valor: "AOA 920.000",
      status: "Em análise",
      data: "08 Maio 2026",
    },
    {
      tipo: "Nota de Crédito",
      numero: "NC 2026/00012",
      cliente: "Loja Comercial Sul",
      valor: "AOA 75.000",
      status: "Emitido",
      data: "05 Maio 2026",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pago":
        return "bg-green-50 text-green-700 border-green-100";
      case "Pendente":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Em análise":
        return "bg-blue-50 text-blue-700 border-blue-100";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  return (
    <>
      <title>Documentos | HossFatura</title>

      <HossFaturaLayout title="Documentos">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão Fiscal
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Controle de{" "}
                  <span className="text-amber-700 italic">
                    documentos fiscais
                  </span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Emita, acompanhe e organize faturas, recibos,
                  proformas e documentos fiscais da sua empresa
                  com total controlo e conformidade.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Novo Documento</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-plus text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* FILTROS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-6 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Pesquisar documento..."
                className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />

              <select className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Tipo de documento</option>
                <option>Fatura</option>
                <option>Recibo</option>
                <option>Proforma</option>
                <option>Nota de Crédito</option>
              </select>

              <select className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Status</option>
                <option>Pago</option>
                <option>Pendente</option>
                <option>Emitido</option>
              </select>

              <button className="h-14 rounded-2xl bg-neutral-900 hover:bg-amber-700 text-white font-bold transition-all duration-300 cursor-pointer">
                Filtrar
              </button>

            </div>
          </div>

          {/* TABELA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  Documentos recentes
                </h2>

                <p className="text-neutral-500 mt-2">
                  Últimos documentos emitidos no sistema
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {documentos.map((doc, index) => (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-6 gap-5 items-center">

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Tipo
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {doc.tipo}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Número
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {doc.numero}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Cliente
                      </p>
                      <p className="font-medium text-neutral-700 mt-1">
                        {doc.cliente}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Valor
                      </p>
                      <p className="font-bold text-amber-700 mt-1">
                        {doc.valor}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`inline-flex px-4 py-2 rounded-full text-xs font-black border ${getStatusStyle(
                          doc.status
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 justify-start lg:justify-end">
                      <button className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer">
                        <i className="fas fa-eye"></i>
                      </button>

                      <button className="w-10 h-10 rounded-xl bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition cursor-pointer">
                        <i className="fas fa-download"></i>
                      </button>
                    </div>

                  </div>

                  <p className="text-xs text-neutral-400 mt-4">
                    Emitido em {doc.data}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Novo Documento"
          icon="fas fa-file-circle-plus"
        >
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-bold mb-2">
                Tipo de Documento
              </label>
              <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all">
                <option>Selecione</option>
                <option>Fatura</option>
                <option>Recibo</option>
                <option>Proforma</option>
                <option>Nota de Crédito</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Cliente
              </label>
              <input
                type="text"
                placeholder="Nome do cliente"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Valor Total
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
              Criar Documento

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
