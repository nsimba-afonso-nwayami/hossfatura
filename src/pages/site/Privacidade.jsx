import { Link } from "react-router-dom";

export default function Privacidade() {
  return (
    <>
      <title>Privacidade | HossFatura</title>

      <section className="bg-neutral-950 text-white py-24 relative overflow-hidden">
        {/* Glow atmosférico */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-amber-700/10 rounded-full blur-[140px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-zinc-800/20 rounded-full blur-[120px] z-0"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-500 bg-amber-700/10 border border-amber-700/20 rounded-full">
              Política de Privacidade
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Proteção dos seus <span className="text-amber-600 italic">dados</span>
            </h1>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              A sua privacidade é importante para nós. Aqui explicamos como recolhemos,
              usamos e protegemos os seus dados no HossFatura.
            </p>
          </div>

          {/* Conteúdo */}
          <div className="space-y-10 text-zinc-300 leading-relaxed text-sm">

            <div>
              <h2 className="text-white font-bold text-lg mb-3">1. Recolha de dados</h2>
              <p>
                Recolhemos apenas os dados necessários para o funcionamento da plataforma,
                como nome, email, contacto e informações da empresa.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-3">2. Utilização dos dados</h2>
              <p>
                Os dados são utilizados exclusivamente para gestão da conta, faturação,
                suporte técnico e melhoria dos nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-3">3. Proteção</h2>
              <p>
                Utilizamos encriptação e medidas de segurança avançadas para proteger
                todos os dados armazenados na plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-3">4. Partilha de dados</h2>
              <p>
                Não vendemos nem partilhamos os seus dados com terceiros, exceto quando
                exigido por lei.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-3">5. Direitos do utilizador</h2>
              <p>
                Pode solicitar a atualização, exportação ou eliminação dos seus dados a qualquer momento.
              </p>
            </div>

            <div>
              <h2 className="text-white font-bold text-lg mb-3">6. Contacto</h2>
              <p>
                Para questões relacionadas com privacidade, contacte-nos através do suporte oficial do HossFatura.
              </p>
            </div>

          </div>

          {/* CTA final */}
          <div className="mt-16 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              Voltar ao início
              <i className="fas fa-arrow-right text-[10px]"></i>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
