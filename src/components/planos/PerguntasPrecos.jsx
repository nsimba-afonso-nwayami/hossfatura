import { Link } from "react-router-dom";

export default function PerguntasPrecos() {
  const perguntas = [
    {
      question: "Posso mudar de plano depois?",
      answer:
        "Sim. Pode começar com qualquer plano e fazer upgrade ou downgrade sempre que necessário, sem perder os seus dados.",
    },
    {
      question: "Existe período de teste gratuito?",
      answer:
        "Sim. Disponibilizamos um período de teste para que possa conhecer a plataforma antes de contratar oficialmente.",
    },
    {
      question: "O pagamento é mensal ou anual?",
      answer:
        "Oferecemos opções mensais e anuais. O plano anual permite melhores condições e maior economia para a sua empresa.",
    },
    {
      question: "O suporte técnico está incluído?",
      answer:
        "Sim. Todos os planos incluem suporte técnico, variando apenas o nível de prioridade e acompanhamento.",
    },
    {
      question: "Preciso pagar pela implementação?",
      answer:
        "Dependendo do plano escolhido, a implementação pode estar incluída. Para empresas maiores, oferecemos onboarding personalizado.",
    },
    {
      question: "O sistema está preparado para Angola?",
      answer:
        "Sim. O HossFatura foi pensado para o mercado angolano com conformidade fiscal, processos locais e suporte especializado.",
    },
  ];

  return (
    <section className="bg-white py-24 text-neutral-900 relative overflow-hidden">
      {/* Linha técnica superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Transparência Total
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Perguntas sobre <span className="text-amber-700">preços</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            Respondemos às dúvidas mais comuns para que possa escolher com
            segurança o melhor plano para o seu negócio.
          </p>
        </div>

        {/* Grid FAQ */}
        <div className="grid md:grid-cols-2 gap-6">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-8 hover:border-amber-700/30 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-500">
                  <i className="fas fa-question text-amber-700 group-hover:text-white transition-colors duration-500"></i>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {item.question}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-20">
          <Link
            to="/contatos"
            className="group inline-flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-neutral-900/10 hover:shadow-amber-700/20 hover:-translate-y-1"
          >
            <span>Falar com um especialista</span>

            <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-headset text-[10px]"></i>
            </div>
          </Link>

          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-8">
            Atendimento rápido • Suporte local • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
