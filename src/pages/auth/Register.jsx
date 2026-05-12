import { Link } from "react-router-dom";
import RegisterImg from "../../assets/img/register.jpg";

export default function Register() {
  return (
    <>
      <title>Criar conta | HossFatura</title>

      <section className="min-h-screen flex bg-neutral-50 text-neutral-900 overflow-hidden">

        {/* Lado esquerdo - imagem */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={RegisterImg}
            alt="Registo HossFatura"
            className="w-full h-full object-cover"
          />

          {/* overlay claro */}
          <div className="absolute inset-0 bg-white/10"></div>

          {/* glow suave */}
          <div className="absolute top-0 right-0 w-150 h-150 bg-amber-700/10 rounded-full blur-[140px]"></div>
        </div>

        {/* Lado direito - form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 relative">

          <div className="w-full max-w-md">

            {/* link voltar home */}
            <div className="mb-6">
              <Link
                to="/login"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-amber-700 transition-colors"
              >
                <i className="fas fa-arrow-left text-[10px]"></i>
                Já tenho conta
              </Link>
            </div>

            {/* header */}
            <div className="mb-10 text-center lg:text-left">

              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Criar conta
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold">
                Criar a sua conta
              </h1>

              <p className="text-neutral-500 mt-3 text-sm leading-relaxed">
                Registe-se para começar a emitir faturas e gerir o seu negócio.
              </p>
            </div>

            {/* form */}
            <form className="space-y-5">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-neutral-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Primeiro nome"
                    className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-neutral-700">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    placeholder="Último nome"
                    className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seuemail@empresa.com"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="+244"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  NIF / BI
                </label>
                <input
                  type="text"
                  placeholder="Número do Bilhete de Identidade"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Palavra-passe
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-neutral-700">
                  Confirmar Palavra-passe
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-white border border-neutral-200 outline-none focus:border-amber-700 transition-all"
                />
              </div>

              {/* botão */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white h-14 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                Criar conta
                <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
                  <i className="fas fa-user-plus text-[10px]"></i>
                </div>
              </button>

              {/* links auxiliares */}
              <div className="flex justify-center text-xs text-neutral-500 mt-4">
                <Link
                  to="/termos"
                  className="hover:text-amber-700 transition-colors"
                >
                  Termos de uso
                </Link>
              </div>

            </form>

            {/* rodapé */}
            <p className="text-center lg:text-left text-[10px] uppercase tracking-widest text-neutral-400 mt-10">
              Sistema seguro • HossFatura Angola
            </p>

          </div>
        </div>

      </section>
    </>
  );
}
