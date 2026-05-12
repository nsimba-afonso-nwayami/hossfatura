import { Link } from "react-router-dom";

export default function Termos() {
  return (
    <>
      <title>Termos | HossFatura</title>

      <section className="bg-neutral-950 text-white py-24 relative overflow-hidden">

        {/* Glow atmosférico (igual ao teu padrão de banners) */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-amber-700/10 rounded-full blur-[140px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-zinc-800/20 rounded-full blur-[120px] z-0"></div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="mb-16 text-center">

            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-500 bg-zinc-900/60 border border-zinc-800 rounded-full">
              Legal
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Termos de{" "}
              <span className="text-amber-500 italic">Utilização</span>
            </h1>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Regras e condições de utilização da plataforma HossFatura.
            </p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-white">
                1. Aceitação dos Termos
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Ao utilizar o HossFatura, o utilizador concorda com estes termos. 
                Caso não concorde, deve cessar a utilização da plataforma.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-white">
                2. Utilização da Plataforma
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                A plataforma deve ser utilizada apenas para fins legais de gestão empresarial,
                incluindo faturação, stock e controlo financeiro.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-white">
                3. Responsabilidade do Utilizador
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                O utilizador é responsável pelos dados inseridos e pela segurança das suas credenciais de acesso.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-white">
                4. Limitação de Responsabilidade
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                A HossFatura não se responsabiliza por perdas indiretas resultantes do uso incorreto da plataforma.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-4 text-white">
                5. Alterações
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Podemos atualizar estes termos a qualquer momento, com aviso prévio na plataforma.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(180,83,9,0.4)] hover:-translate-y-1"
            >
              <span>Contactar Suporte</span>
              <i className="fas fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
