import { Link } from "react-router-dom";

export default function HeaderHossFatura({
  sidebarOpen,
  setSidebarOpen,
  title,
}) {
  const actionBtnStyle =
    "relative w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-amber-700 hover:bg-amber-600 text-white transition-all duration-300 shadow-sm group";

  const badgeStyle =
    "absolute -top-1 -right-1 bg-white text-amber-700 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black shadow-md border-2 border-amber-700 group-hover:scale-110 transition-transform";

  return (
    <header
      className="
        bg-white/95 backdrop-blur-md text-neutral-900
        border-b border-amber-100
        fixed top-0 right-0 left-0 md:left-64
        h-20 flex items-center justify-between
        px-6
        z-30 transition-all duration-300
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl text-neutral-900 hover:text-amber-700 transition-colors cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="fas fa-bars-staggered"></i>
        </button>

        <div className="hidden sm:block h-8 w-px bg-amber-100 mx-2"></div>

        <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
          {title}
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-5">

        {/* NOTIFICAÇÕES */}
        <Link
          to="/hossfatura/dashboard/notificacoes"
          className={actionBtnStyle}
        >
          <i className="fas fa-bell text-lg"></i>
          <span className={badgeStyle}>2</span>
        </Link>

        {/* DIVIDER */}
        <div className="h-8 w-px bg-amber-100 mx-1 hidden sm:block"></div>

        {/* USER */}
        <div className="flex items-center gap-3 group cursor-pointer">

          <div className="text-right hidden lg:block">
            <p className="text-sm text-neutral-900 font-bold leading-none">
              Administrador
            </p>

            <p className="text-[10px] text-neutral-400 uppercase font-black tracking-widest mt-1">
              Área privada
            </p>
          </div>

          <Link
            to="/hossfatura/dashboard/configuracoes"
            className="
              w-11 h-11
              cursor-pointer
              bg-amber-700 text-white
              rounded-full flex items-center justify-center
              hover:bg-amber-600 hover:scale-105
              transition-all duration-300 shadow-lg shadow-amber-700/20
              overflow-hidden border-2 border-transparent hover:border-amber-300
            "
          >
            <i className="fas fa-user text-lg"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
