import { Link, useLocation } from "react-router-dom";

export default function SidebarHossFatura({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sm";

  const normalStyle =
    "text-neutral-700 hover:text-amber-700 hover:bg-amber-50";

  const activeStyle =
    "bg-amber-700 text-white shadow-lg shadow-amber-700/20";

  return (
    <>
      <aside
        className={`
          bg-white border-r border-amber-100
          w-64 fixed top-0 left-0 h-screen
          transition-transform duration-300 overflow-y-auto
          ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
          md:translate-x-0
          z-50 flex flex-col
          p-6
        `}
      >
        {/* CLOSE MOBILE */}
        <button
          className="md:hidden absolute top-4 right-4 text-2xl text-neutral-400 hover:text-amber-700 transition"
          onClick={() => setSidebarOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* LOGO */}
        <div className="mb-10 pt-2">
          <Link
            to="/hossfatura/dashboard"
            className="text-xl font-black tracking-tight flex items-center gap-2"
          >
            <div className="bg-amber-700 text-white p-1.5 rounded-lg shadow-md">
              <i className="fas fa-file-invoice-dollar"></i>
            </div>

            <span className="text-neutral-900">
              Hoss<span className="text-amber-700">Fatura</span>
            </span>
          </Link>

          <p className="text-[10px] text-neutral-400 mt-4 uppercase font-black tracking-[0.2em]">
            Painel administrativo
          </p>
        </div>

        {/* NAV */}
        <nav className="space-y-2 flex-1">

          <Link
            to="/hossfatura/dashboard"
            className={`${linkStyle} ${
              isActive("/hossfatura/dashboard") ? activeStyle : normalStyle
            }`}
          >
            <i className={`fas fa-gauge-high ${
              isActive("/hossfatura/dashboard") ? "text-white" : "text-amber-700"
            }`}></i>
            Dashboard
          </Link>

          <Link
            to="/hossfatura/dashboard/documentos"
            className={`${linkStyle} ${
              isActive("/hossfatura/dashboard/documentos") ? activeStyle : normalStyle
            }`}
          >
            <i className={`fas fa-file-lines ${
              isActive("/hossfatura/dashboard/documentos") ? "text-white" : "text-amber-700"
            }`}></i>
            Documentos
          </Link>

          <Link
            to="/hossfatura/dashboard/despesas"
            className={`${linkStyle} ${
              isActive("/hossfatura/dashboard/despesas") ? activeStyle : normalStyle
            }`}
          >
            <i className={`fas fa-wallet ${
              isActive("/hossfatura/dashboard/despesas") ? "text-white" : "text-amber-700"
            }`}></i>
            Despesas
          </Link>

          <Link
            to="/hossfatura/dashboard/produtos"
            className={`${linkStyle} ${
              isActive("/hossfatura/dashboard/produtos") ? activeStyle : normalStyle
            }`}
          >
            <i className={`fas fa-box-open ${
              isActive("/hossfatura/dashboard/produtos") ? "text-white" : "text-amber-700"
            }`}></i>
            Produtos
          </Link>

          <Link
            to="/hossfatura/dashboard/clientes"
            className={`${linkStyle} ${
              isActive("/hossfatura/dashboard/clientes") ? activeStyle : normalStyle
            }`}
          >
            <i className={`fas fa-users ${
              isActive("/hossfatura/dashboard/clientes") ? "text-white" : "text-amber-700"
            }`}></i>
            Clientes
          </Link>

          <Link
            to="/hossfatura/dashboard/fornecedores"
            className={`${linkStyle} ${
              isActive("/hossfatura/dashboard/fornecedores") ? activeStyle : normalStyle
            }`}
          >
            <i className={`fas fa-truck-field ${
              isActive("/hossfatura/dashboard/fornecedores") ? "text-white" : "text-amber-700"
            }`}></i>
            Fornecedores
          </Link>

        </nav>

        {/* EMPRESA + LOGOUT */}
        <div className="pt-6 border-t border-amber-100 space-y-3">

          <Link
            to="/hossfatura/dashboard/empresa"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-700 hover:text-amber-700 hover:bg-amber-50 transition-all font-black text-sm"
          >
            <i className="fas fa-cog text-amber-700"></i>
            Empresa
          </Link>

          <button className="flex items-center gap-3 cursor-pointer w-full px-4 py-3 rounded-xl text-neutral-500 hover:text-amber-700 hover:bg-amber-50 transition-all font-black text-sm group">
            <i className="fas fa-right-from-bracket group-hover:translate-x-1 transition-transform"></i>
            Sair da conta
          </button>

        </div>
      </aside>

      {/* OVERLAY MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}