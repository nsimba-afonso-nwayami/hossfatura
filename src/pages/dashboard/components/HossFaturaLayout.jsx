import { useState } from "react";
import SidebarHossFatura from "./SidebarHossFatura";
import HeaderHossFatura from "./HeaderHossFatura";

export default function HossFaturaLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-neutral-50 text-neutral-900 relative overflow-hidden">

      {/* GLOW SUAVE — IDENTIDADE HOSSFATURA */}
      <div className="absolute -top-24 -right-24 w-125 h-125 bg-amber-700/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-125 h-125 bg-neutral-900/5 blur-[140px] rounded-full pointer-events-none" />

      {/* SIDEBAR */}
      <SidebarHossFatura
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-1 md:ml-64 flex flex-col relative z-10">

        {/* HEADER */}
        <HeaderHossFatura
          title={title}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* MAIN */}
        <main className="mt-20 px-6 py-8 max-w-7xl mx-auto w-full">
          {children}
        </main>

      </div>
    </div>
  );
}
