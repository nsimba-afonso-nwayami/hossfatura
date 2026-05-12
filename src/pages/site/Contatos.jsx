import WhatsAppButton from "../../components/whatsapp/WhatsAppButton";
import Banner from "../../components/contatos/Banner";
import FormContato from "../../components/contatos/FormContato";
import Localizacao from "../../components/contatos/Localizacao";


export default function Contatos() {
  return (
    <>
      <title>Contatos | HossFatura</title>

      <Banner />
      <FormContato />
      <Localizacao />

      {/* Botão WhatsApp fixo */}
      <WhatsAppButton phone="244972614886" size={64} />
    </>
  );
}
