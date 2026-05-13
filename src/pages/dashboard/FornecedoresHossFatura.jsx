import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function FornecedoresHossFatura() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);

  const fornecedores = [
    {
      nome: "Distribuidora Angola LDA",
      categoria: "Equipamentos",
      telefone: "+244 923 111 222",
      email: "comercial@distribuidora.ao",
      status: "Ativo",
    },
    {
      nome: "Tech Solutions",
      categoria: "Software",
      telefone: "+244 924 333 444",
      email: "suporte@techsolutions.ao",
      status: "Ativo",
    },
    {
      nome: "Mercado Industrial",
      categoria: "Consumíveis",
      telefone: "+244 925 555 666",
      email: "vendas@mercadoindustrial.ao",
      status: "Pendente",
    },
    {
      nome: "Global Services",
      categoria: "Serviços",
      telefone: "+244 926 777 888",
      email: "info@globalservices.ao",
      status: "Inativo",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Ativo":
        return "bg-green-50 text-green-700 border-green-100";
      case "Pendente":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Inativo":
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  return (
    <>
      <title>Fornecedores | HossFatura</title>

      <HossFaturaLayout title="Fornecedores">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão de Fornecedores
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Controle de{" "}
                  <span className="text-amber-700 italic">
                    fornecedores e parceiros
                  </span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Organize contactos, categorias e histórico dos seus
                  fornecedores para manter a operação empresarial eficiente.
                </p>
              </div>

              <button
                onClick={() => setOpenCreateModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Novo Fornecedor</span>

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
                Total de Fornecedores
              </p>
              <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                148
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Ativos
              </p>
              <p className="text-2xl font-extrabold text-green-700 mt-2">
                126
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Pendentes
              </p>
              <p className="text-2xl font-extrabold text-amber-700 mt-2">
                22
              </p>
            </div>
          </div>

          {/* FILTROS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-6 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Pesquisar fornecedor..."
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

          {/* LISTA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  Fornecedores cadastrados
                </h2>

                <p className="text-neutral-500 mt-2">
                  Gestão completa da sua rede de fornecedores
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {fornecedores.map((item, index) => (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-5 gap-5 items-center">

                    <div className="lg:col-span-2">
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Fornecedor
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {item.nome}
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
                        Telefone
                      </p>
                      <p className="font-medium text-neutral-700 mt-1">
                        {item.telefone}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Email
                      </p>
                      <p className="font-medium text-neutral-700 mt-1 break-all">
                        {item.email}
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">

                    <span
                      className={`inline-flex px-4 py-2 rounded-full text-xs font-black border w-fit ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenEditModal(true)}
                        className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                      >
                        <i className="fas fa-pen"></i>
                      </button>

                      <button
                        onClick={() => setOpenViewModal(true)}
                        className="w-10 h-10 rounded-xl bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition cursor-pointer"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* MODAL NOVO FORNECEDOR */}
        <Modal
          isOpen={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          title="Novo Fornecedor"
          icon="fas fa-truck-field"
        >
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-bold mb-2">
                Nome do Fornecedor
              </label>
              <input
                type="text"
                placeholder="Digite o nome do fornecedor"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Categoria
              </label>
              <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Selecione</option>
                <option>Equipamentos</option>
                <option>Consumíveis</option>
                <option>Software</option>
                <option>Serviços</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Telefone
              </label>
              <input
                type="text"
                placeholder="+244"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="email@empresa.com"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white h-14 rounded-2xl font-bold transition-all duration-300 cursor-pointer"
            >
              Cadastrar Fornecedor

              <div className="bg-white/20 p-1 rounded-md">
                <i className="fas fa-arrow-right text-[10px]"></i>
              </div>
            </button>

          </form>
        </Modal>

        {/* MODAL EDITAR */}
        <Modal
          isOpen={openEditModal}
          onClose={() => setOpenEditModal(false)}
          title="Editar Fornecedor"
          icon="fas fa-pen"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                Nome do Fornecedor
              </label>
              <input
                type="text"
                defaultValue="Distribuidora Angola LDA"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700"
              />
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-2xl bg-amber-700 hover:bg-amber-600 text-white font-bold transition-all cursor-pointer"
            >
              Guardar Alterações
            </button>
          </form>
        </Modal>

        {/* MODAL VISUALIZAR */}
        <Modal
          isOpen={openViewModal}
          onClose={() => setOpenViewModal(false)}
          title="Detalhes do Fornecedor"
          icon="fas fa-eye"
        >
          <div className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">

              <div className="border border-amber-100 rounded-3xl p-6">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Fornecedor
                </p>
                <p className="text-lg font-bold text-neutral-900 mt-2">
                  Distribuidora Angola LDA
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-6">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Categoria
                </p>
                <p className="text-lg font-bold text-neutral-900 mt-2">
                  Equipamentos
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-6">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Telefone
                </p>
                <p className="text-lg font-bold text-amber-700 mt-2">
                  +244 923 111 222
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-6">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Email
                </p>
                <p className="text-lg font-bold text-amber-700 mt-2 break-all">
                  comercial@distribuidora.ao
                </p>
              </div>

            </div>

          </div>
        </Modal>
      </HossFaturaLayout>
    </>
  );
}
