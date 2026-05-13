import { useState } from "react";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";
import { Link } from "react-router-dom";

export default function NotFoundHossFatura() {
  
  return (
    <>
      <title>Página não encontrada | HossFatura</title>

      <HossFaturaLayout title="Página não encontrada">
        <section className="space-y-8">
        </section>
      </HossFaturaLayout>
    </>
  );
}
