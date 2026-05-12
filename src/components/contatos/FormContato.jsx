import { Link } from "react-router-dom";

export default function FormContato() {
  const assuntos = [
    "Suporte Técnico",
    "Vendas e Planos",
    "Parcerias",
    "Dúvidas Gerais",
    "Outros",
  ];

  const provincias = [
    "Bengo",
    "Benguela",
    "Bié",
    "Cabinda",
    "Cuando Cubango",
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
    <section className="bg-neutral-50 py-24 text-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Lado esquerdo */}
        <div className="flex flex-col gap-8">
            <div>
                <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Contacto Direto
                </div>

                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Fale connosco{" "}
                <span className="text-amber-700 italic">diretamente</span>
                </h2>

                <p className="text-neutral-500 mt-6 text-lg leading-relaxed max-w-xl">
                A nossa equipa está pronta para ajudar com suporte, vendas, dúvidas técnicas ou implementação do sistema HossFatura.
                </p>
            </div>

            {/* Informações de contacto */}
            <div className="space-y-5">

                <div className="flex items-center gap-4 text-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center">
                    <i className="fas fa-phone text-amber-700 text-sm"></i>
                </div>
                <p className="font-medium">+244 9XX XXX XXX</p>
                </div>

                <div className="flex items-center gap-4 text-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center">
                    <i className="fas fa-envelope text-amber-700 text-sm"></i>
                </div>
                <p className="font-medium">comercial@hossidev.com</p>
                </div>

                <div className="flex items-center gap-4 text-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center">
                    <i className="fas fa-location-dot text-amber-700 text-sm"></i>
                </div>
                <p className="font-medium">Luanda, Angola</p>
                </div>
            </div>

            {/* Benefícios */}
            <div className="space-y-5 pt-4">
                {[
                "Resposta rápida em horário comercial",
                "Suporte técnico especializado em Angola",
                "Atendimento para empresas e parceiros",
                "Acompanhamento personalizado",
                ].map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 text-neutral-700"
                >
                    <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-check text-amber-700 text-sm"></i>
                    </div>

                    <p className="font-medium">{item}</p>
                </div>
                ))}
            </div>
        </div>

          {/* Formulário */}
          <div className="bg-white border border-neutral-200 rounded-4xl p-8 lg:p-10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.08)]">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-bold mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="O seu nome"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="email@exemplo.com"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Telefone</label>
                <input
                  type="tel"
                  placeholder="+244"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Província</label>
                <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all cursor-pointer">
                  <option value="">Selecione a província</option>
                  {provincias.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Assunto</label>
                <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all cursor-pointer">
                  <option value="">Selecione o assunto</option>
                  {assuntos.map((a, i) => (
                    <option key={i} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Mensagem</label>
                <textarea
                  rows="4"
                  placeholder="Escreva a sua mensagem..."
                  className="w-full p-5 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:border-amber-700 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white h-14 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <span>Enviar Mensagem</span>

                <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
                  <i className="fas fa-paper-plane text-[10px]"></i>
                </div>
              </button>

              <p className="text-center text-[11px] text-neutral-400 uppercase tracking-widest font-bold pt-2">
                Resposta rápida • Suporte HossFatura
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
