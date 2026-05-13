import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function ProdutosHossFatura() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);

  const produtos = [
    {
      nome: "Impressora Fiscal Epson",
      categoria: "Equipamentos",
      stock: 12,
      preco: "AOA 185.000",
      status: "Disponível",
    },
    {
      nome: "Papel Térmico",
      categoria: "Consumíveis",
      stock: 85,
      preco: "AOA 3.500",
      status: "Disponível",
    },
    {
      nome: "Leitor de Código de Barras",
      categoria: "Equipamentos",
      stock: 4,
      preco: "AOA 65.000",
      status: "Baixo Stock",
    },
    {
      nome: "Licença Premium ERP",
      categoria: "Software",
      stock: 999,
      preco: "AOA 450.000",
      status: "Ativo",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Disponível":
        return "bg-green-50 text-green-700 border-green-100";
      case "Baixo Stock":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "Ativo":
        return "bg-blue-50 text-blue-700 border-blue-100";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  return (
    <>
      <title>Produtos | HossFatura</title>

      <HossFaturaLayout title="Produtos">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão de Stock
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Controle de{" "}
                  <span className="text-amber-700 italic">
                    produtos e inventário
                  </span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Organize produtos, acompanhe stock, preços e
                  disponibilidade com total eficiência operacional.
                </p>
              </div>

              <button
                onClick={() => setOpenCreateModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Novo Produto</span>

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
                Total de Produtos
              </p>
              <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                587
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Baixo Stock
              </p>
              <p className="text-2xl font-extrabold text-amber-700 mt-2">
                14
              </p>
            </div>

            <div className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-bold text-neutral-500">
                Valor em Stock
              </p>
              <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                AOA 12.8M
              </p>
            </div>
          </div>

          {/* LISTA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  Produtos cadastrados
                </h2>

                <p className="text-neutral-500 mt-2">
                  Gestão completa do inventário empresarial
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {produtos.map((item, index) => (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-5 gap-5 items-center">

                    <div className="lg:col-span-2">
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Produto
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
                        Stock
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {item.stock}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Preço
                      </p>
                      <p className="font-bold text-amber-700 mt-1">
                        {item.preco}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <span
                      className={`inline-flex px-4 py-2 rounded-full text-xs font-black border ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>

                    {/* BOTÕES DE AÇÃO */}
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

        {/* MODAL */}
        <Modal
          isOpen={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
          title="Novo Produto"
          icon="fas fa-box-open"
        >
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-bold mb-2">
                Nome do Produto
              </label>
              <input
                type="text"
                placeholder="Digite o nome do produto"
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
                Quantidade em Stock
              </label>
              <input
                type="number"
                placeholder="0"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Preço
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
              Cadastrar Produto

              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-arrow-right text-[10px]"></i>
              </div>
            </button>

          </form>
        </Modal>

        {/* MODAL EDITAR PRODUTO */}
        <Modal
          isOpen={openEditModal}
          onClose={() => setOpenEditModal(false)}
          title="Editar Produto"
          icon="fas fa-pen"
        >
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-bold mb-2">
                Nome do Produto
              </label>
              <input
                type="text"
                defaultValue="Impressora Fiscal Epson"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Categoria
              </label>
              <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all">
                <option>Equipamentos</option>
                <option>Consumíveis</option>
                <option>Software</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Quantidade em Stock
              </label>
              <input
                type="number"
                defaultValue="12"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Preço
              </label>
              <input
                type="text"
                defaultValue="AOA 185.000"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
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

        {/* MODAL VISUALIZAR PRODUTO */}
        <Modal
          isOpen={openViewModal}
          onClose={() => setOpenViewModal(false)}
          title="Detalhes do Produto"
          icon="fas fa-eye"
        >
          <div className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">

              <div className="border border-amber-100 rounded-3xl p-6">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Produto
                </p>
                <p className="text-lg font-bold text-neutral-900 mt-2">
                  Impressora Fiscal Epson
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
                  Stock
                </p>
                <p className="text-lg font-bold text-amber-700 mt-2">
                  12 unidades
                </p>
              </div>

              <div className="border border-amber-100 rounded-3xl p-6">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Preço
                </p>
                <p className="text-lg font-bold text-amber-700 mt-2">
                  AOA 185.000
                </p>
              </div>

            </div>

          </div>
        </Modal>
      </HossFaturaLayout>
    </>
  );
}