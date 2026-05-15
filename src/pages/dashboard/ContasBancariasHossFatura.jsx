import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import ModalSmall from "./components/ModalSmall";

export default function ContasBancariasHossFatura() {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedConta, setSelectedConta] = useState(null);

  const contas = [
    {
      banco: "BAI",
      titular: "Hossidev Soluções Lda",
      conta: "AO06 0040 0000 1234 5678 1014 5",
      moeda: "AOA",
      tipo: "Corrente",
      status: "Ativa",
    },
    {
      banco: "BFA",
      titular: "Hossidev Soluções Lda",
      conta: "AO06 0006 0000 9876 5432 1019 2",
      moeda: "AOA",
      tipo: "Corrente",
      status: "Ativa",
    },
    {
      banco: "Standard Bank",
      titular: "Hossidev Soluções Lda",
      conta: "AO06 0010 0000 5544 3322 1012 0",
      moeda: "USD",
      tipo: "Poupança",
      status: "Em análise",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Ativa": return "bg-green-50 text-green-700 border-green-100";
      case "Em análise": return "bg-blue-50 text-blue-700 border-blue-100";
      case "Inativa": return "bg-red-50 text-red-700 border-red-100";
      default: return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  const handleEdit = (conta) => {
    setSelectedConta(conta);
    setOpenEditModal(true);
  };

  const handleDelete = (conta) => {
    setSelectedConta(conta);
    setOpenDeleteModal(true);
  };

  return (
    <>
      <title>Contas Bancárias | HossFatura</title>

      <HossFaturaLayout title="Contas Bancárias">
        <section className="space-y-8">
          
          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão de Tesouraria
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Configuração de <span className="text-amber-700 italic">contas bancárias</span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Gerencie as contas bancárias da sua empresa. Adicione novos IBANs, 
                  defina moedas de operação e organize os dados para emissão de faturas.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Vincular Conta</span>
                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-university text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* FILTROS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-6 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Pesquisar por banco ou IBAN..."
                className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />

              <select className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Filtrar por Banco</option>
                <option>BAI</option>
                <option>BFA</option>
                <option>BIC</option>
                <option>Standard Bank</option>
              </select>

              <select className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Status da Conta</option>
                <option>Ativa</option>
                <option>Em análise</option>
                <option>Inativa</option>
              </select>

              <button className="h-14 rounded-2xl bg-neutral-900 hover:bg-amber-700 text-white font-bold transition-all duration-300 cursor-pointer">
                Filtrar Contas
              </button>
            </div>
          </div>

          {/* LISTAGEM DE CONTAS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-neutral-900">Instituições Vinculadas</h2>
                <p className="text-neutral-500 mt-2">Listagem oficial de contas para recebimentos e pagamentos</p>
              </div>
            </div>

            <div className="space-y-4">
              {contas.map((item, index) => (
                <div key={index} className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300">
                  <div className="grid lg:grid-cols-6 gap-5 items-center">
                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">Banco</p>
                      <p className="font-bold text-neutral-900 mt-1">{item.banco}</p>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">IBAN / Número de Conta</p>
                      <p className="font-bold text-neutral-900 mt-1 font-mono text-sm tracking-tighter">{item.conta}</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">Moeda / Tipo</p>
                      <p className="font-bold text-amber-700 mt-1">{item.moeda} — <span className="text-neutral-500 font-medium text-xs">{item.tipo}</span></p>
                    </div>

                    <div>
                      <span className={`inline-flex px-4 py-2 rounded-full text-xs font-black border ${getStatusStyle(item.status)}`}>
                        {item.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 justify-start lg:justify-end">
                      <button onClick={() => handleEdit(item)} className="w-10 h-10 rounded-xl bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition cursor-pointer">
                        <i className="fas fa-pen-to-square text-xs"></i>
                      </button>
                      <button onClick={() => handleDelete(item)} className="w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer">
                        <i className="fas fa-trash-can text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL: NOVO */}
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title="Vincular Nova Conta" icon="fas fa-university">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-neutral-700">Instituição Bancária</label>
                <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                  <option>Selecione o Banco</option>
                  <option>BAI</option>
                  <option>BFA</option>
                  <option>BIC</option>
                  <option>Standard Bank</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-neutral-700">IBAN (Angola)</label>
                <input type="text" placeholder="AO06 0000 0000..." className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Moeda</label>
                  <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                    <option>AOA</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Tipo de Conta</label>
                  <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                    <option>Corrente</option>
                    <option>Poupança</option>
                    <option>DO</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white w-full h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1">
              <span>Vincular Conta Bancária</span>
              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-plus text-[10px]"></i>
              </div>
            </button>
          </form>
        </Modal>

        {/* MODAL: EDITAR */}
        <Modal isOpen={openEditModal} onClose={() => setOpenEditModal(false)} title="Editar Dados da Conta" icon="fas fa-edit">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-neutral-700">Banco</label>
              <input type="text" defaultValue={selectedConta?.banco} className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-neutral-700">IBAN</label>
              <input type="text" defaultValue={selectedConta?.conta} className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all" />
            </div>
            <button type="submit" className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white w-full h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1">
              <span>Salvar Alterações</span>
              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-check text-[10px]"></i>
              </div>
            </button>
          </form>
        </Modal>

        {/* MODAL: ELIMINAR */}
        <ModalSmall isOpen={openDeleteModal} onClose={() => setOpenDeleteModal(false)} title="Eliminar Conta">
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-5 text-xl border border-red-100">
              <i className="fas fa-trash-can"></i>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-2">Confirmar exclusão</h3>
            <p className="text-neutral-500 text-sm leading-relaxed px-4">
              Tem certeza que deseja remover a conta do <span className="font-bold text-neutral-900">{selectedConta?.banco}</span>? 
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <button onClick={() => setOpenDeleteModal(false)} className="h-12 rounded-xl border border-neutral-200 font-bold text-neutral-500 hover:bg-neutral-50 transition-all cursor-pointer">
                Cancelar
              </button>
              <button className="group cursor-pointer flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl font-bold transition-all">
                <span>Eliminar</span>
                <div className="bg-white/20 p-1 rounded-md">
                  <i className="fas fa-trash-can text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>
        </ModalSmall>

      </HossFaturaLayout>
    </>
  );
}