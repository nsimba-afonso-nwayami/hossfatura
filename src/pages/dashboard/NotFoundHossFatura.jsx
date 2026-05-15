import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import { Link } from "react-router-dom";

export default function NotFoundHossFatura() {
  return (
    <>
      <title>Página não encontrada | HossFatura</title>

      <HossFaturaLayout title="Página não encontrada">
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
          
          {/* ILUSTRAÇÃO OU ÍCONE GRANDE */}
          <div className="relative mb-10">
            <h1 className="text-[120px] lg:text-[180px] font-black text-neutral-900/5 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-amber-700/10 rounded-4xl flex items-center justify-center border border-amber-700/20 rotate-12">
                <i className="fas fa-search text-4xl text-amber-700 -rotate-12"></i>
              </div>
            </div>
          </div>

          {/* MENSAGEM */}
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Caminho <span className="text-amber-700 italic">não encontrado</span>
            </h2>
            
            <p className="text-neutral-500 leading-relaxed">
              A página que você está procurando não existe ou foi movida. 
              Verifique o endereço digitado ou retorne ao painel principal.
            </p>
          </div>

          {/* BOTÃO DE RETORNO PADRONIZADO */}
          <div className="mt-10">
            <Link
              to="/dashboard"
              className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-10 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
            >
              <span>Voltar ao Dashboard</span>

              <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                <i className="fas fa-house-chimney text-[10px]"></i>
              </div>
            </Link>
          </div>

          {/* LINKS AUXILIARES */}
          <div className="mt-12 flex items-center gap-8 text-sm font-bold text-neutral-400">
            <Link to="/perguntas-frequentes" className="hover:text-amber-700 transition-colors">Centro de Ajuda</Link>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
            <Link to="/contatos" className="hover:text-amber-700 transition-colors">Suporte Técnico</Link>
          </div>

        </section>
      </HossFaturaLayout>
    </>
  );
}
