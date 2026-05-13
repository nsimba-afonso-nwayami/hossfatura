import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";

export default function SubscricaoHossFatura() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Mensal",
      duration: "1 Mês",
      price: "AOA 5.500",
      desc: "Ideal para começar e testar o sistema.",
      entidade: "01068",
      referencia: "113539130",
    },
    {
      title: "Semestral",
      duration: "6 Meses",
      price: "AOA 29.000",
      desc: "Melhor custo-benefício para empresas em crescimento.",
      entidade: "01068",
      referencia: "223455990",
    },
    {
      title: "Anual",
      duration: "12 Meses",
      price: "AOA 55.000",
      desc: "Plano mais económico com máximo benefício.",
      entidade: "01068",
      referencia: "998877221",
    },
  ];

  const openPayment = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  return (
    <>
      <title>Escolher Pacote | HossFatura</title>

      <HossFaturaLayout title="Escolher Pacote">
        <section className="space-y-10">

          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Subscrição
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900">
                Escolha o seu{" "}
                <span className="text-amber-700 italic">plano ideal</span>
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl">
                Ative o acesso completo ao sistema HossFatura escolhendo
                um dos planos disponíveis abaixo.
              </p>
            </div>
          </div>

          {/* PLANOS */}
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-xl font-extrabold text-neutral-900">
                  {plan.title}
                </h2>

                <p className="text-neutral-500 mt-2 text-sm">
                  {plan.desc}
                </p>

                <p className="text-3xl font-extrabold text-amber-700 mt-6">
                  {plan.price}
                </p>

                <p className="text-sm text-neutral-400 mt-1">
                  {plan.duration}
                </p>

                <button
                  onClick={() => openPayment(plan)}
                  className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1 w-full mt-8"
                >
                  <span>Assinar plano</span>

                  <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                    <i className="fas fa-credit-card text-[10px]"></i>
                  </div>
                </button>
              </div>
            ))}
          </div>

        </section>

        {/* MODAL PAGAMENTO */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Pagamento por Referência"
          icon="fas fa-credit-card"
        >
          {selectedPlan && (
            <div className="space-y-6 text-sm">

              {/* PLANO */}
              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Plano selecionado
                </p>
                <p className="font-bold text-neutral-900 mt-2">
                  {selectedPlan.title} ({selectedPlan.duration})
                </p>
              </div>

              {/* ENTIDADE */}
              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Entidade
                </p>
                <p className="font-bold text-neutral-900 mt-2">
                  {selectedPlan.entidade}
                </p>
              </div>

              {/* REFERÊNCIA */}
              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Referência
                </p>
                <p className="font-bold text-neutral-900 mt-2">
                  {selectedPlan.referencia}
                </p>

                <p className="text-amber-700 font-medium mt-3 text-xs">
                  Espera 5 minutos antes de pagar para ativação da referência no sistema EMIS.
                </p>
              </div>

              {/* VALOR */}
              <div className="border border-amber-100 rounded-3xl p-5">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Valor
                </p>
                <p className="text-xl font-extrabold text-amber-700 mt-2">
                  {selectedPlan.price}
                </p>
              </div>

              {/* INSTRUÇÕES */}
              <div className="border border-amber-100 rounded-3xl p-5 space-y-2">
                <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                  Instruções de pagamento
                </p>

                <p>1. Abra o Multicaixa Express ou ATM</p>
                <p>2. Procure “Pagamentos por referência”</p>
                <p>3. Introduza entidade, referência e valor</p>
                <p>4. Confirme o pagamento</p>
                <p>5. Clique em validar pagamento depois</p>
              </div>

              {/* BOTÃO */}
              <button
                className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1 w-full"
              >
                <span>Validar pagamento</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-check text-[10px]"></i>
                </div>
              </button>

            </div>
          )}
        </Modal>
      </HossFaturaLayout>
    </>
  );
}