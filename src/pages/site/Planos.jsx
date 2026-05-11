import Banner from "../../components/planos/Banner";
import CardsPlanos from "../../components/planos/CardsPlanos";
import CardsComparativos from "../../components/planos/CardsComparativos";
import PerguntasPrecos from "../../components/planos/PerguntasPrecos";
import CtaFinal from "../../components/planos/CtaFinal";

export default function Planos() {
  return (
    <>
      <title>Planos | HossFatura</title>

      <Banner />
      <CardsPlanos />
      <CardsComparativos />
      <PerguntasPrecos />
      <CtaFinal />

    </>
  );
}
