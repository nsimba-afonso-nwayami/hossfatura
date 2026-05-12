import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <title>Página não encontrada | HossFatura</title>

      <section className="min-h-screen bg-neutral-950 text-white flex items-center justify-center relative overflow-hidden">

        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-amber-700/10 rounded-full blur-[140px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-zinc-800/20 rounded-full blur-[120px] z-0"></div>

        <div className="relative z-10 text-center max-w-2xl px-6">

          {/* Código de erro */}
          <h1 className="text-8xl lg:text-9xl font-extrabold tracking-tighter text-amber-700">
            404
          </h1>

          {/* Mensagem */}
          <h2 className="text-3xl lg:text-4xl font-bold mt-6">
            Página não encontrada
          </h2>

          <p className="text-zinc-400 mt-4 text-lg leading-relaxed">
            A página que estás a tentar aceder não existe ou foi movida.
            Verifica o link ou volta ao início.
          </p>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

            <Link
              to="/"
              className="group flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Voltar ao início
              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-home text-[10px]"></i>
              </div>
            </Link>

            <Link
              to="/funcionalidades"
              className="group flex items-center justify-center gap-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-700/50 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Ver funcionalidades
              <div className="bg-white/5 p-1 rounded-md group-hover:bg-white/10 transition-colors">
                <i className="fas fa-list text-[10px] text-zinc-400 group-hover:text-amber-500"></i>
              </div>
            </Link>

          </div>

          {/* detalhe inferior */}
          <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] font-bold mt-12">
            HossFatura • Sistema de faturação Angola
          </p>

        </div>
      </section>
    </>
  );
}
