import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function ClientesHossFatura() {
  
  return (
    <>
      <title>Clientes | HossFatura</title>

      <HossFaturaLayout title="Clientes">
        <section className="space-y-8">
        </section>
      </HossFaturaLayout>
    </>
  );
}
