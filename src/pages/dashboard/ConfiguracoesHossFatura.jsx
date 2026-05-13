import { useState, useRef } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";

export default function ConfiguracoesHossFatura() {
  const [logoPreview, setLogoPreview] = useState(null);
  const logoRef = useRef(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLogoPreview(URL.createObjectURL(file));
  };
  const provinciasAngola = [
    "Bengo",
    "Benguela",
    "Bié",
    "Cabinda",
    "Cuando",
    "Cubango",
    "Cuanza Norte",
    "Cuanza Sul",
    "Cunene",
    "Huambo",
    "Huíla",
    "Icolo e Bengo",
    "Luanda",
    "Lunda Norte",
    "Lunda Sul",
    "Malanje",
    "Moxico",
    "Moxico Leste",
    "Namibe",
    "Uíge",
    "Zaire",
  ];
  
  return (
    <>
      <title>Configurações Gerais | HossFatura</title>

      <HossFaturaLayout title="Configurações Gerais">
        <section className="space-y-10">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Configurações
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                Definições gerais da{" "}
                <span className="text-amber-700 italic">
                  sua empresa
                </span>
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                Atualize os dados fiscais, contactos, identidade visual e
                segurança da sua conta empresarial.
              </p>
            </div>
          </div>

          {/* DADOS DA EMPRESA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-neutral-900">
                Dados da empresa
              </h2>

              <p className="text-neutral-500 mt-2">
                Informações principais utilizadas em documentos e faturação.
              </p>
            </div>

            <form className="space-y-6">
              {/* LOGOTIPO */}
              <div>
                <label className="block text-sm font-bold mb-4">
                  Logotipo da empresa
                </label>

                <input
                  type="file"
                  ref={logoRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />

                {!logoPreview ? (
                  <button
                    type="button"
                    onClick={() => logoRef.current.click()}
                    className="w-full h-32 border-2 border-dashed border-amber-200 rounded-3xl flex flex-col items-center justify-center gap-3 text-amber-700 hover:border-amber-700 transition-all font-bold bg-amber-50/30 group cursor-pointer"
                  >
                    <i className="fas fa-image text-2xl group-hover:scale-110 transition-transform"></i>
                    Selecionar logotipo
                  </button>
                ) : (
                  <div className="relative inline-block">
                    <img
                      src={logoPreview}
                      alt="Logotipo"
                      className="w-40 h-40 object-cover rounded-3xl border border-amber-100 shadow-sm"
                    />

                    <button
                      type="button"
                      onClick={() => setLogoPreview(null)}
                      className="absolute -top-2 -right-2 bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-amber-800 cursor-pointer"
                    >
                      <i className="fas fa-times text-xs"></i>
                    </button>
                  </div>
                )}
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Nome da empresa
                  </label>

                  <input
                    type="text"
                    placeholder="Digite o nome da empresa"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    NIF
                  </label>

                  <input
                    type="text"
                    placeholder="Número de identificação fiscal"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Endereço
                  </label>

                  <input
                    type="text"
                    placeholder="Digite o endereço"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Cidade
                  </label>

                  <input
                    type="text"
                    defaultValue="Luanda"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Província
                  </label>

                  <select
                    defaultValue="Luanda"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer"
                  >
                    {provinciasAngola.map((provincia, index) => (
                      <option key={index} value={provincia}>
                        {provincia}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Regime do IVA
                  </label>

                  <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                    <option>Selecione</option>
                    <option>Regime Geral</option>
                    <option>Regime Simplificado</option>
                    <option>Isento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Nº de telefone da empresa
                  </label>

                  <input
                    type="text"
                    placeholder="+244"
                    className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-bold mb-2">
                  E-mail
                </label>

                <input
                  type="email"
                  placeholder="empresa@email.com"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Guardar configurações</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-floppy-disk text-[10px]"></i>
                </div>
              </button>

            </form>
          </div>

          {/* ALTERAR SENHA */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-neutral-900">
                Alterar senha
              </h2>

              <p className="text-neutral-500 mt-2">
                Atualize a senha de acesso da sua conta administrativa.
              </p>
            </div>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-bold mb-2">
                  Senha atual
                </label>

                <input
                  type="password"
                  placeholder="Digite a senha atual"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Nova senha
                </label>

                <input
                  type="password"
                  placeholder="Digite a nova senha"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Confirmar nova senha
                </label>

                <input
                  type="password"
                  placeholder="Repita a nova senha"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <button
                type="submit"
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
              >
                <span>Atualizar senha</span>

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
