import { Link } from "react-router-dom";
import RecoverImg from "../../assets/img/forgot.jpg";

export default function ForgotPassword() {
  return (
    <>
      <title>Recuperar senha | HossFatura</title>

      <section className="min-h-screen flex bg-neutral-50 text-neutral-900 overflow-hidden">

        {/* Lado esquerdo - imagem */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={RecoverImg}
            alt="Recuperar senha HossFatura"
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

            {/* link voltar login */}
            <div className="mb-6">
              <Link
                to="/login"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-amber-700 transition-colors"
              >
                <i className="fas fa-arrow-left text-[10px]"></i>
                Voltar ao login
              </Link>
            </div>

            {/* header */}
            <div className="mb-10 text-center lg:text-left">

              <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Recuperação de acesso
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold">
                Recuperar palavra-passe
              </h1>

              <p className="text-neutral-500 mt-3 text-sm leading-relaxed">
                Introduza o seu email e enviaremos um link para redefinir a sua senha.
              </p>
            </div>

            {/* form */}
            <form className="space-y-5">

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

              {/* botão */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white h-14 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                Enviar link de recuperação

                <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
                  <i className="fas fa-paper-plane text-[10px]"></i>
                </div>
              </button>

              {/* ajuda */}
              <div className="flex justify-center text-xs text-neutral-500 mt-4">
                <Link
                  to="/login"
                  className="hover:text-amber-700 transition-colors"
                >
                  Lembrei da senha
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
