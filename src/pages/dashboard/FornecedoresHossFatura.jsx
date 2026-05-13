import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function FornecedoresHossFatura() {
  
  return (
    <>
      <title>Fornecedores | HossFatura</title>

      <HossFaturaLayout title="Fornecedores">
        <section className="space-y-8">
        </section>
      </HossFaturaLayout>
    </>
  );
}
