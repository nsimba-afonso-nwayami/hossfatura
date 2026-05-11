import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-zinc-900 text-zinc-100 selection:bg-amber-700/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Coluna 1: Brand & Descrição */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter inline-block">
              Hoss<span className="text-amber-700">Fatura</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Solução inteligente de faturação e gestão empresarial. 
              Elevando o padrão de conformidade e eficiência para o mercado angolano.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {['facebook-f', 'instagram', 'whatsapp', 'linkedin-in'].map((icon) => (
                <a 
                  key={icon}
                  href="#" 
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:border-amber-700 hover:text-amber-400 transition-all duration-300 hover:-translate-y-1"
                >
                  <i className={`fab fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-amber-600 uppercase tracking-[0.2em]">
              Plataforma
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { to: "/", label: "Início" },
                { to: "/funcionalidades", label: "Funcionalidades" },
                { to: "/planos", label: "Planos de Preços" },
                { to: "/demonstracao", label: "Agendar Demo" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors duration-200 flex items-center group"
                >
                  <span className="h-px w-0 bg-amber-700 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 3: Suporte & Legal */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold text-amber-600 uppercase tracking-[0.2em]">
              Suporte Técnico
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { to: "/perguntas-frequentes", label: "Centro de Ajuda (FAQ)" },
                { to: "/contatos", label: "Contactos" },
                { to: "/termos", label: "Termos de Serviço" },
                { to: "/privacidade", label: "Privacidade" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 4: Info Local */}
          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-900/50 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-zinc-100">Hossidev Angola</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Sinta a liberdade de gerir o seu negócio a partir de qualquer lugar em Luanda ou no mundo.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-amber-400 text-xs font-mono tracking-tighter flex items-center gap-2">
                <i className="fas fa-envelope w-4"></i> suporte@hossfatura.com
              </span>
              <span className="text-zinc-400 text-xs font-mono flex items-center gap-2">
                <i className="fas fa-map-marker-alt w-4"></i> Luanda, Angola
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-zinc-500 text-[11px] uppercase tracking-widest font-medium text-center">
              Sistemas Operacionais: 99.9% Uptime
            </p>
          </div>

          <p className="text-zinc-600 text-xs font-light text-center">
            &copy; {currentYear} <span className="text-zinc-400">HossFatura</span> — Desenvolvido pela <a href="#" className="text-zinc-500 hover:text-amber-600 transition-colors">Hossidev</a>.
          </p>
        </div>

      </div>
    </footer>
  );
}
