import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import ModalSmall from "./components/ModalSmall";

export default function UtilizadoresHossFatura() {
  const [openModal, setOpenModal] = useState(false);

  // NOVOS ESTADOS
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const utilizadores = [
    {
      nome: "Administrador",
      email: "admin@hossfatura.ao",
      role: "Administrador",
      status: "Ativo",
      ultimoLogin: "15 Maio 2026",
    },
    {
      nome: "João Pedro",
      email: "joao@empresa.ao",
      role: "Contabilista",
      status: "Ativo",
      ultimoLogin: "14 Maio 2026",
    },
    {
      nome: "Maria Silva",
      email: "maria@empresa.ao",
      role: "Vendedor",
      status: "Suspenso",
      ultimoLogin: "10 Maio 2026",
    },
    {
      nome: "Carlos Alberto",
      email: "carlos@empresa.ao",
      role: "Assistente",
      status: "Inativo",
      ultimoLogin: "02 Maio 2026",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Ativo":
        return "bg-green-50 text-green-700 border-green-100";
      case "Inativo":
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
      case "Suspenso":
        return "bg-amber-50 text-amber-700 border-amber-100";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  // HANDLERS
  const handleView = (user) => {
    setSelectedUser(user);
    setOpenView(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpenEdit(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setOpenDelete(true);
  };

  return (
    <>
      <title>Utilizadores | HossFatura</title>

      <HossFaturaLayout title="Utilizadores">
        <section className="space-y-8">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div>
                <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                  Gestão de Acessos
                </div>

                <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  Gestão de{" "}
                  <span className="text-amber-700 italic">
                    utilizadores do sistema
                  </span>
                </h1>

                <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                  Controle acessos, permissões e níveis de utilizadores
                  dentro do sistema HossFatura com segurança e organização.
                </p>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Novo Utilizador</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-user-plus text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* FILTROS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-6 shadow-sm">
            <div className="grid md:grid-cols-4 gap-4">

              <input
                type="text"
                placeholder="Pesquisar utilizador..."
                className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />

              <select className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Perfil</option>
                <option>Administrador</option>
                <option>Contabilista</option>
                <option>Vendedor</option>
                <option>Assistente</option>
              </select>

              <select className="h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                <option>Status</option>
                <option>Ativo</option>
                <option>Inativo</option>
                <option>Suspenso</option>
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
                  Utilizadores do sistema
                </h2>
                <p className="text-neutral-500 mt-2">
                  Gestão de contas e permissões internas
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {utilizadores.map((user, index) => (
                <div
                  key={index}
                  className="border border-neutral-100 rounded-3xl p-6 hover:border-amber-200 transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-6 gap-5 items-center">

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Nome
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {user.nome}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Email
                      </p>
                      <p className="font-medium text-neutral-700 mt-1">
                        {user.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Perfil
                      </p>
                      <p className="font-bold text-neutral-900 mt-1">
                        {user.role}
                      </p>
                    </div>

                    <div>
                      <span
                        className={`inline-flex px-4 py-2 rounded-full text-xs font-black border ${getStatusStyle(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                        Último login
                      </p>
                      <p className="font-medium text-neutral-700 mt-1">
                        {user.ultimoLogin}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 justify-start lg:justify-end">
                      <button
                        onClick={() => handleView(user)}
                        className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
                      >
                        <i className="fas fa-eye"></i>
                      </button>

                      <button
                        onClick={() => handleEdit(user)}
                        className="w-10 h-10 rounded-xl bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition cursor-pointer"
                      >
                        <i className="fas fa-pen"></i>
                      </button>

                      <button
                        onClick={() => handleDelete(user)}
                        className="w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* MODAL CRIAR */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Novo Utilizador"
          icon="fas fa-user-plus"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Nome</label>
              <input
                type="text"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Perfil</label>
              <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all">
                <option>Administrador</option>
                <option>Contabilista</option>
                <option>Vendedor</option>
                <option>Assistente</option>
              </select>
            </div>

            <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer w-full flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Criar Utilizador</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-user-plus text-[10px]"></i>
                </div>
              </button>
          </form>
        </Modal>

        {/* MODAL VER */}
        <Modal
          isOpen={openView}
          onClose={() => setOpenView(false)}
          title="Detalhes do Utilizador"
          icon="fas fa-eye"
        >
          {selectedUser && (
            <div className="space-y-3">
              <p><b>Nome:</b> {selectedUser.nome}</p>
              <p><b>Email:</b> {selectedUser.email}</p>
              <p><b>Perfil:</b> {selectedUser.role}</p>
              <p><b>Status:</b> {selectedUser.status}</p>
              <p><b>Último login:</b> {selectedUser.ultimoLogin}</p>
            </div>
          )}
        </Modal>

        {/* MODAL EDITAR */}
        <ModalSmall
          isOpen={openEdit}
          onClose={() => setOpenEdit(false)}
          title="Editar Utilizador"
        >
          {selectedUser && (
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-bold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  defaultValue={selectedUser.nome}
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={selectedUser.email}
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Perfil
                </label>
                <select
                  defaultValue={selectedUser.role}
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                >
                  <option>Administrador</option>
                  <option>Contabilista</option>
                  <option>Vendedor</option>
                  <option>Assistente</option>
                </select>
              </div>

              <button
                onClick={() => setOpenModal(true)}
                className="group cursor-pointer w-full flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Atualizar Utilizador</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-check text-[10px]"></i>
                </div>
              </button>

            </form>
          )}
        </ModalSmall>

        {/* MODAL ELIMINAR */}
        <ModalSmall
          isOpen={openDelete}
          onClose={() => setOpenDelete(false)}
          title="Eliminar Utilizador"
        >
          {selectedUser && (
            <div className="space-y-4">
              <p>Tem certeza que deseja eliminar <b>{selectedUser.nome}</b>?</p>
              <button
                type="button"
                className="group w-full flex items-center justify-center gap-4 bg-red-600 hover:bg-red-500 text-white h-14 rounded-2xl font-bold transition-all duration-300 cursor-pointer"
              >
                Eliminar Utilizador

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-trash text-[10px]"></i>
                </div>
              </button>
            </div>
          )}
        </ModalSmall>

      </HossFaturaLayout>
    </>
  );
}
