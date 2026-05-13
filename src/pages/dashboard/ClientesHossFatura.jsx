import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function ClientesHossFatura() {
  const [openNovoCliente, setOpenNovoCliente] = useState(false);
  const [openVerCliente, setOpenVerCliente] = useState(false);
  const [openEditarCliente, setOpenEditarCliente] = useState(false);

  const clientes = [
    {
      nome: "Empresa Premium LDA",
      nif: "5001234567",
      telefone: "+244 923 000 111",
      email: "financeiro@premium.ao",
      status: "Ativo",
    },
    {
      nome: "Comercial Luanda",
      nif: "5009876543",
      telefone: "+244 924 111 222",
      email: "geral@comercial.ao",
      status: "Ativo",
    },
    {
      nome: "Mercado Central",
      nif: "5004567891",
      telefone: "+244 925 333 444",
      email: "contacto@mercado.ao",
      status: "Pendente",
    },
  ];

  return (
    <>
      <title>Clientes | HossFatura</title>

      <HossFaturaLayout title="Clientes">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão de Clientes
                </div>

                <h1 className="text-3xl font-extrabold text-neutral-900">
                  Controle total dos seus clientes
                </h1>

                <p className="text-neutral-500 mt-3 max-w-2xl leading-relaxed">
                  Cadastre, acompanhe e organize todos os clientes da sua
                  empresa para emissão de documentos e gestão comercial.
                </p>
              </div>

              <button
                onClick={() => setOpenNovoCliente(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Novo Cliente</span>

                <div className="bg-white/20 p-1 rounded-md">
                  <i className="fas fa-user-plus text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Clientes Ativos",
                value: "342",
                icon: "users",
              },
              {
                title: "Novos este mês",
                value: "28",
                icon: "user-plus",
              },
              {
                title: "Pendentes",
                value: "12",
                icon: "clock",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-amber-100 rounded-3xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
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
              </div>
            ))}
          </div>

          {/* FILTROS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-6 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Pesquisar cliente..."
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
                  Clientes cadastrados
                </h2>

                <p className="text-neutral-500 mt-2">
                  Gestão completa da sua base de clientes
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {clientes.map((item, index) => (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-5 gap-5 items-center">

                    <div className="lg:col-span-2">
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Cliente
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {item.nome}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        NIF
                      </p>
                      <p className="font-medium text-neutral-700 mt-1">
                        {item.nif}
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

                    <span className="inline-flex px-4 py-2 rounded-full text-xs font-black border bg-amber-50 text-amber-700 border-amber-100 w-fit">
                      {item.status}
                    </span>

                    {/* BOTÕES DE AÇÃO */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenEditarCliente(true)}
                        className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                      >
                        <i className="fas fa-pen"></i>
                      </button>

                      <button
                        onClick={() => setOpenVerCliente(true)}
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

        {/* MODAL NOVO CLIENTE */}
        <Modal
          isOpen={openNovoCliente}
          onClose={() => setOpenNovoCliente(false)}
          title="Novo Cliente"
          icon="fas fa-user-plus"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                Nome do Cliente
              </label>
              <input
                type="text"
                placeholder="Digite o nome"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                NIF
              </label>
              <input
                type="text"
                placeholder="Digite o NIF"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700"
              />
            </div>

            <button className="w-full h-14 rounded-2xl bg-amber-700 hover:bg-amber-600 text-white font-bold cursor-pointer transition-all">
              Salvar Cliente
            </button>
          </form>
        </Modal>

        {/* MODAL VER */}
        <Modal
          isOpen={openVerCliente}
          onClose={() => setOpenVerCliente(false)}
          title="Detalhes do Cliente"
          icon="fas fa-eye"
        >
          <div className="space-y-4">
            <p><strong>Cliente:</strong> Empresa Premium LDA</p>
            <p><strong>NIF:</strong> 5001234567</p>
            <p><strong>Telefone:</strong> +244 923 000 111</p>
            <p><strong>Email:</strong> financeiro@premium.ao</p>
            <p><strong>Status:</strong> Ativo</p>
          </div>
        </Modal>

        {/* MODAL EDITAR */}
        <Modal
          isOpen={openEditarCliente}
          onClose={() => setOpenEditarCliente(false)}
          title="Editar Cliente"
          icon="fas fa-pen"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                Nome do Cliente
              </label>
              <input
                type="text"
                defaultValue="Empresa Premium LDA"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700"
              />
            </div>

            <button className="w-full h-14 rounded-2xl bg-amber-700 hover:bg-amber-600 text-white font-bold cursor-pointer transition-all">
              Atualizar Cliente
            </button>
          </form>
        </Modal>

      </HossFaturaLayout>
    </>
  );
}
