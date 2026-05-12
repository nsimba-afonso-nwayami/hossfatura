import { Link } from "react-router-dom";
import { useState } from "react";

export default function PerguntasFrequentes() {
  const faqData = [
    {
      categoria: "Sistema",
      icon: "display",
      perguntas: [
        {
          pergunta: "Funciona offline?",
          resposta:
            "O HossFatura funciona principalmente online para garantir segurança, backups automáticos e sincronização em tempo real. Algumas operações locais podem ser mantidas dependendo do plano contratado.",
        },
        {
          pergunta: "Posso usar no telemóvel?",
          resposta:
            "Sim. O sistema é totalmente responsivo e pode ser utilizado em computadores, tablets e telemóveis com excelente desempenho.",
        },
        {
          pergunta: "Pode usar vários utilizadores?",
          resposta:
            "Sim. O sistema permite múltiplos utilizadores com diferentes níveis de acesso e permissões por função.",
        },
      ],
    },
    {
      categoria: "Pagamentos",
      icon: "wallet",
      perguntas: [
        {
          pergunta: "Emite IVA automaticamente?",
          resposta:
            "Sim. O sistema calcula e aplica IVA conforme as exigências fiscais e normativas em vigor no mercado angolano.",
        },
        {
          pergunta: "Posso alterar de plano depois?",
          resposta:
            "Sim. Pode começar com um plano mais simples e evoluir para outro conforme o crescimento do seu negócio.",
        },
      ],
    },
    {
      categoria: "Segurança",
      icon: "shield-halved",
      perguntas: [
        {
          pergunta: "Os meus dados ficam protegidos?",
          resposta:
            "Sim. Utilizamos backups automáticos, encriptação de dados e controlo de acessos para máxima segurança operacional.",
        },
      ],
    },
    {
      categoria: "Suporte",
      icon: "headset",
      perguntas: [
        {
          pergunta: "Tem suporte técnico?",
          resposta:
            "Sim. A nossa equipa oferece suporte técnico especializado com atendimento local e rápido via WhatsApp, email e acompanhamento direto.",
        },
      ],
    },
    {
      categoria: "Implantação",
      icon: "building-circle-check",
      perguntas: [
        {
          pergunta: "Serve para restaurante?",
          resposta:
            "Sim. O sistema adapta-se perfeitamente para restaurantes, lojas, farmácias, supermercados, oficinas e diversos outros setores.",
        },
        {
          pergunta: "A implementação é difícil?",
          resposta:
            "Não. A configuração inicial é rápida e a nossa equipa acompanha todo o processo para garantir uma transição simples e segura.",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  let globalIndex = 0;

  return (
    <section className="bg-neutral-50 py-24 relative overflow-hidden">
      {/* Linha superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.35em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Central de Ajuda
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Perguntas mais{" "}
            <span className="text-amber-700 italic">frequentes</span>
          </h2>

          <p className="text-neutral-500 text-lg leading-relaxed mt-6">
            Respondemos às principais dúvidas sobre utilização, pagamentos,
            segurança, suporte e implementação do HossFatura.
          </p>
        </div>

        {/* FAQ por categoria */}
        <div className="space-y-14">
          {faqData.map((grupo, groupIndex) => (
            <div key={groupIndex}>
              {/* Título categoria */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center">
                  <i
                    className={`fas fa-${grupo.icon} text-amber-700`}
                  ></i>
                </div>

                <h3 className="text-2xl font-extrabold text-neutral-900">
                  {grupo.categoria}
                </h3>
              </div>

              {/* Perguntas */}
              <div className="space-y-4">
                {grupo.perguntas.map((item, i) => {
                  const currentIndex = globalIndex++;

                  return (
                    <div
                      key={i}
                      className="bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-700/20"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(
                            openIndex === currentIndex ? null : currentIndex
                          )
                        }
                        className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-neutral-900 hover:bg-neutral-50 transition-colors cursor-pointer"
                      >
                        <span>{item.pergunta}</span>

                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center border border-neutral-200 transition-all duration-300 ${
                            openIndex === currentIndex
                              ? "bg-amber-700 border-amber-700 text-white rotate-45"
                              : "bg-white text-neutral-500"
                          }`}
                        >
                          <i className="fas fa-plus text-xs"></i>
                        </div>
                      </button>

                      {openIndex === currentIndex && (
                        <div className="px-8 pb-8 text-neutral-600 leading-relaxed">
                          {item.resposta}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-24">
          <Link
            to="/contatos"
            className="group inline-flex items-center justify-center gap-4 bg-neutral-900 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <span>Ainda tem dúvidas? Fale connosco</span>

            <div className="bg-white/10 p-1 rounded-md group-hover:bg-white/20 transition-colors">
              <i className="fas fa-arrow-right text-[10px]"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
