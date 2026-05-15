import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";

export default function PerfilHossFatura() {
  return (
    <>
      <title>Meu Perfil | HossFatura</title>

      <HossFaturaLayout title="Meu Perfil">
        <section className="space-y-10">
          
          {/* HERO PERFIL */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Gestão de Conta
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                Informações do <span className="text-amber-700 italic">seu perfil</span>
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                Gerencie seus dados pessoais, informações de contacto e preferências de segurança de acesso à plataforma.
              </p>
            </div>
          </div>

          {/* DADOS PESSOAIS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-neutral-900">Dados Pessoais</h2>
              <p className="text-neutral-500 mt-2">Suas informações básicas de identificação.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu primeiro nome"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Sobrenome</label>
                  <input
                    type="text"
                    placeholder="Seu sobrenome"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Telefone</label>
                  <input
                    type="text"
                    placeholder="+244 9XX XXX XXX"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold mb-2 text-neutral-700">NIF / BI</label>
                  <input
                    type="text"
                    placeholder="Número de Identificação Fiscal ou Bilhete de Identidade"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Atualizar Perfil</span>
                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-user-check text-[10px]"></i>
                </div>
              </button>
            </form>
          </div>

          {/* ALTERAR SENHA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-neutral-900">Segurança da Conta</h2>
              <p className="text-neutral-500 mt-2">Atualize sua senha periodicamente para manter sua conta segura.</p>
            </div>

            <form className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-bold mb-2 text-neutral-700">Senha Atual</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Nova Senha</label>
                  <input
                    type="password"
                    placeholder="Nova senha"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-neutral-700">Confirmar Nova Senha</label>
                  <input
                    type="password"
                    placeholder="Repita a senha"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group cursor-pointer flex items-center justify-center gap-4 bg-neutral-900 hover:bg-neutral-800 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <span>Atualizar Senha</span>
                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-lock text-[10px]"></i>
                </div>
              </button>
            </form>
          </div>
        </section>
      </HossFaturaLayout>
    </>
  );
}
