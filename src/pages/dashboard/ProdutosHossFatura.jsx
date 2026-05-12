import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function ProdutosHossFatura() {
  
  return (
    <>
      <title>Produtos | HossFatura</title>

      <HossFaturaLayout title="Produtos">
        <section className="space-y-8">
        </section>
      </HossFaturaLayout>
    </>
  );
}
