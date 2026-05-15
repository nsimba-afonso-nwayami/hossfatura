import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import HossFaturaLayout from "./components/HossFaturaLayout";
import Modal from "./components/Modal";

export default function RelatoriosHossFatura() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const cards = [
    {
      title: "Relatório de Vendas",
      desc: "Resumo completo de todas as faturas emitidas e valores faturados.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Relatório de IVA",
      desc: "Controle fiscal com total de IVA cobrado no período selecionado.",
      icon: "fas fa-percent",
    },
    {
      title: "Fluxo de Caixa",
      desc: "Entradas, saídas e saldo financeiro da empresa.",
      icon: "fas fa-wallet",
    },
    {
      title: "Clientes e Pagamentos",
      desc: "Histórico de clientes, pagamentos e pendências.",
      icon: "fas fa-users",
    },
  ];

  const chartData = [
    { mes: "Jan", valor: 120000 },
    { mes: "Fev", valor: 98000 },
    { mes: "Mar", valor: 145000 },
    { mes: "Abr", valor: 132000 },
    { mes: "Mai", valor: 168000 },
    { mes: "Jun", valor: 154000 },
  ];

  const openReportModal = (report) => {
    setSelectedReport(report);
    setOpenModal(true);
  };

  const exportPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    const reportTitle = selectedReport?.title || "Relatório";
    const today = new Date().toLocaleDateString("pt-PT");

    /* HEADER PREMIUM */
    pdf.setFillColor(10, 10, 10); // neutral-950
    pdf.rect(0, 0, 210, 40, "F");

    pdf.setTextColor(245, 245, 245); // zinc-100
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(21);
    pdf.text("HOSSFATURA", 14, 16);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text("Sistema Profissional de Faturação Empresarial", 14, 24);
    pdf.text("Relatórios Financeiros e Fiscais", 14, 30);

    /* BARRA DOURADA */
    pdf.setFillColor(180, 83, 9); // amber-700
    pdf.rect(0, 40, 210, 4, "F");

    /* TÍTULO */
    pdf.setTextColor(24, 24, 27);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(17);
    pdf.text(reportTitle, 14, 56);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(`Data de emissão: ${today}`, 14, 64);
    pdf.text("Moeda: AOA (Kwanza)", 14, 70);
    pdf.text("Baseado em práticas fiscais e empresariais de Angola", 14, 76);

    /* RESUMO */
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Resumo Executivo", 14, 90);

    autoTable(pdf, {
      startY: 94,
      head: [["Indicador", "Valor"]],
      body: [
        ["Total Geral", "AOA 817.000"],
        ["Média Mensal", "AOA 136.166"],
        ["Crescimento", "+18%"],
        ["Período", "Janeiro a Junho 2026"],
      ],
      theme: "grid",
      headStyles: {
        fillColor: [180, 83, 9],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        halign: "center",
      },
      bodyStyles: {
        textColor: [30, 30, 30],
      },
      styles: {
        fontSize: 10,
        cellPadding: 4,
        lineColor: [230, 230, 230],
        lineWidth: 0.2,
      },
      alternateRowStyles: {
        fillColor: [248, 248, 248],
      },
    });

    /* DETALHAMENTO */
    const finalY = pdf.lastAutoTable.finalY + 12;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Detalhamento Mensal", 14, finalY);

    autoTable(pdf, {
      startY: finalY + 4,
      head: [["Mês", "Valor (AOA)"]],
      body: chartData.map((item) => [
        item.mes,
        item.valor.toLocaleString("pt-PT"),
      ]),
      theme: "striped",
      headStyles: {
        fillColor: [24, 24, 27], // zinc-900
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      styles: {
        fontSize: 10,
        cellPadding: 4,
      },
      alternateRowStyles: {
        fillColor: [252, 252, 252],
      },
    });

    /* FOOTER */
    const pageHeight = pdf.internal.pageSize.height;

    pdf.setDrawColor(180, 83, 9);
    pdf.line(14, pageHeight - 20, 196, pageHeight - 20);

    pdf.setTextColor(90, 90, 90);
    pdf.setFontSize(9);
    pdf.text(
      "Documento gerado automaticamente pelo sistema HossFatura",
      14,
      pageHeight - 12
    );
    pdf.text("Página 1", 180, pageHeight - 12);

    pdf.save(`${reportTitle}.pdf`);
  };

  const exportExcel = () => {
    const reportTitle = selectedReport?.title || "Relatório";

    const excelData = [
      {
        Indicador: "Total Geral",
        Valor: "AOA 817.000",
      },
      {
        Indicador: "Média Mensal",
        Valor: "AOA 136.166",
      },
      {
        Indicador: "Crescimento",
        Valor: "+18%",
      },
      {
        Indicador: "Período",
        Valor: "Janeiro a Junho 2026",
      },
      {},
      {
        Mês: "Jan",
        Valor_Mensal: "120.000",
      },
      {
        Mês: "Fev",
        Valor_Mensal: "98.000",
      },
      {
        Mês: "Mar",
        Valor_Mensal: "145.000",
      },
      {
        Mês: "Abr",
        Valor_Mensal: "132.000",
      },
      {
        Mês: "Mai",
        Valor_Mensal: "168.000",
      },
      {
        Mês: "Jun",
        Valor_Mensal: "154.000",
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(excelData, {
      skipHeader: false,
    });

    worksheet["!cols"] = [
      { wch: 28 },
      { wch: 24 },
      { wch: 18 },
      { wch: 20 },
    ];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Relatório Financeiro"
    );

    XLSX.writeFile(workbook, `${reportTitle}.xlsx`);
  };

  return (
    <>
      <title>Relatórios | HossFatura</title>

      <HossFaturaLayout title="Relatórios">
        <section className="space-y-10">
          {/* HERO */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 lg:p-10 shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 mb-5 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
                Relatórios
              </div>

              <h1 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                Gestão completa de{" "}
                <span className="text-amber-700 italic">
                  relatórios financeiros
                </span>
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
                Gere relatórios detalhados da sua faturação, impostos,
                pagamentos e desempenho financeiro da empresa.
              </p>
            </div>
          </div>

          {/* FILTROS */}
          <div className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">
                  Data inicial
                </label>

                <input
                  type="date"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Data final
                </label>

                <input
                  type="date"
                  className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Tipo de relatório
                </label>

                <select className="w-full h-14 px-5 rounded-2xl border border-neutral-200 bg-white outline-none focus:border-amber-700 transition-all cursor-pointer">
                  <option>Selecione</option>
                  <option>Vendas</option>
                  <option>IVA</option>
                  <option>Fluxo de Caixa</option>
                  <option>Clientes</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1">
                <span>Gerar relatório</span>

                <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                  <i className="fas fa-file-lines text-[10px]"></i>
                </div>
              </button>

              <button
                onClick={exportExcel}
                className="group cursor-pointer flex items-center justify-center gap-4 border border-amber-200 hover:border-amber-400 text-amber-700 px-8 h-14 rounded-2xl font-bold transition-all duration-300 bg-white"
              >
                <span>Exportar Excel</span>

                <div className="bg-amber-50 p-1 rounded-md">
                  <i className="fas fa-file-excel text-[10px]"></i>
                </div>
              </button>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                onClick={() => openReportModal(item)}
                className="bg-white border border-amber-100 rounded-4xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 text-xl mb-6">
                  <i className={item.icon}></i>
                </div>

                <h2 className="text-xl font-extrabold text-neutral-900">
                  {item.title}
                </h2>

                <p className="text-neutral-500 mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <button className="mt-6 text-amber-700 font-bold flex items-center gap-2 cursor-pointer">
                  Ver relatório
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title={selectedReport?.title || "Relatório"}
          icon="fas fa-chart-column"
        >
          {selectedReport && (
            <div className="space-y-8">
              {/* RESUMO */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-amber-100 rounded-3xl p-5">
                  <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                    Total
                  </p>
                  <p className="text-2xl font-extrabold text-amber-700 mt-2">
                    AOA 817.000
                  </p>
                </div>

                <div className="border border-amber-100 rounded-3xl p-5">
                  <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                    Média mensal
                  </p>
                  <p className="text-2xl font-extrabold text-neutral-900 mt-2">
                    AOA 136.166
                  </p>
                </div>

                <div className="border border-amber-100 rounded-3xl p-5">
                  <p className="text-xs uppercase font-black tracking-widest text-neutral-400">
                    Crescimento
                  </p>
                  <p className="text-2xl font-extrabold text-green-600 mt-2">
                    +18%
                  </p>
                </div>
              </div>

              {/* GRÁFICO BARRAS */}
              <div className="border border-amber-100 rounded-4xl p-6">
                <h3 className="font-bold text-neutral-900 mb-6">
                  Desempenho mensal
                </h3>

                <div className="h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="valor"
                        fill="#b45309"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* GRÁFICO LINHA */}
              <div className="border border-amber-100 rounded-4xl p-6">
                <h3 className="font-bold text-neutral-900 mb-6">
                  Evolução financeira
                </h3>

                <div className="h-75">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="valor"
                        stroke="#b45309"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* EXPORTAÇÕES */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={exportPDF}
                  className="group cursor-pointer flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 h-14 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-amber-700/20 hover:-translate-y-1"
                >
                  <span>Exportar PDF</span>

                  <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                    <i className="fas fa-file-pdf text-[10px]"></i>
                  </div>
                </button>

                <button
                  onClick={exportExcel}
                  className="group cursor-pointer flex items-center justify-center gap-4 border border-amber-200 hover:border-amber-400 text-amber-700 px-8 h-14 rounded-2xl font-bold transition-all duration-300 bg-white"
                >
                  <span>Exportar Excel</span>

                  <div className="bg-amber-50 p-1 rounded-md">
                    <i className="fas fa-file-excel text-[10px]"></i>
                  </div>
                </button>
              </div>
            </div>
          )}
        </Modal>
      </HossFaturaLayout>
    </>
  );
}
