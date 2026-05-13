import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function EmpresaHossFatura() {
  
  return (
    <>
      <title>Empresa | HossFatura</title>

      <HossFaturaLayout title="Empresa">
        <section className="space-y-8">
        </section>
      </HossFaturaLayout>
    </>
  );
}
