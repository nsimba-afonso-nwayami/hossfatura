import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Efeito para mudar o fundo ao rolar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // NOVO: Fecha o menu mobile automaticamente ao rolar a página
  useEffect(() => {
    const handleScrollClose = () => {
      if (menuOpen) setMenuOpen(false);
    };

    if (menuOpen) {
      window.addEventListener("scroll", handleScrollClose);
    }

    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [menuOpen]);

  const links = [
    { to: "/", label: "Início" },
    { to: "/funcionalidades", label: "Funcionalidades" },
    { to: "/planos", label: "Planos" },
    { to: "/demonstracao", label: "Demonstração" },
    { to: "/perguntas-frequentes", label: "FAQ" },
    { to: "/contatos", label: "Contatos" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
        ? "bg-neutral-950/90 backdrop-blur-md py-3 border-b border-zinc-900 shadow-2xl" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-zinc-100 flex items-center gap-1 group"
          >
            <span className="group-hover:text-amber-400 transition-colors">Hoss</span>
            <span className="bg-amber-700 text-transparent bg-clip-text">Fatura</span>
          </Link>

          {/* Botão Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-100 hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars-staggered"} text-xl`}></i>
          </button>

          {/* Navegação */}
          <nav
            className={`
              absolute lg:static top-full left-0 w-full lg:w-auto
              bg-neutral-950 lg:bg-transparent
              border-b lg:border-none border-zinc-900
              transition-all duration-500 ease-in-out
              ${menuOpen ? "max-h-[85vh] opacity-100 py-8" : "max-h-0 lg:max-h-none opacity-0 lg:opacity-100 overflow-hidden"}
              lg:flex lg:items-center lg:gap-12
            `}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8 px-8 lg:px-0">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    relative py-3 lg:py-0 text-sm font-semibold transition-all duration-300
                    ${isActive(link.to)
                      ? "text-amber-500"
                      : "text-zinc-400 hover:text-white"}
                  `}
                >
                  {link.label}
                  <span className={`hidden lg:block absolute -bottom-2 left-0 h-0.5 bg-amber-700 transition-all duration-300 ${isActive(link.to) ? "w-full" : "w-0"}`}></span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4 px-8 lg:px-0 mt-8 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-none border-zinc-900">
              
              {/* Botão Entrar - Padrão Secundário */}
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="group w-full lg:w-auto flex items-center justify-center gap-3 border border-zinc-800 hover:border-amber-700/50 bg-zinc-900/30 backdrop-blur-sm text-zinc-100 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all duration-300"
              >
                <span>Entrar</span>
                <i className="fas fa-user-circle text-zinc-500 group-hover:text-amber-500 transition-colors"></i>
              </Link>

              {/* Botão Teste Grátis - Padrão Principal */}
              <Link
                to="/criar-conta"
                onClick={() => setMenuOpen(false)}
                className="group w-full lg:w-auto flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-600 text-white px-6 py-2.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(180,83,9,0.4)] hover:-translate-y-0.5"
              >
                <span>Teste Grátis</span>
                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-chevron-right text-[10px]"></i>
                </div>
              </Link>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}
