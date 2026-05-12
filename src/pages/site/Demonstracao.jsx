import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import Banner from "../../components/demonstracao/Banner";
import FormDemonstracao from "../../components/demonstracao/FormDemonstracao";
import BeneficiosDemo from "../../components/demonstracao/BeneficiosDemo";
import WhatsappRapido from "../../components/demonstracao/WhatsappRapido";

export default function Demonstracao() {
  return (
    <>
      <title>Demonstração | HossFatura</title>

      <Banner />
      <FormDemonstracao />
      <BeneficiosDemo />
      <WhatsappRapido />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
