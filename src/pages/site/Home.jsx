import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import Hero from "../../components/home/Hero";
import BeneficiosPrincipais from "../../components/home/BeneficiosPrincipais";
import ComoFunciona from "../../components/home/ComoFunciona";
import FuncionalidadesDestaque from "../../components/home/FuncionalidadesDestaque";
import Setores from "../../components/home/Setores";
import PlanosResumidos from "../../components/home/PlanosResumidos";
import CtaFinal from "../../components/home/CtaFinal";

export default function Home() {
  return (
    <>
      <title>HossFatura</title>

      <Hero />
      <BeneficiosPrincipais />
      <ComoFunciona />
      <FuncionalidadesDestaque />
      <Setores />
      <PlanosResumidos />
      <CtaFinal />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
