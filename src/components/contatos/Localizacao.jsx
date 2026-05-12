import { Link } from "react-router-dom";

export default function Localizacao() {
  return (
    <section className="bg-neutral-50 py-24 text-neutral-900 relative overflow-hidden">
      {/* Linha técnica */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neutral-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-amber-700 bg-amber-700/5 border border-amber-700/10 rounded-full">
            Localização
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Estamos em{" "}
            <span className="text-amber-700 italic">Angola</span>
          </h2>

          <p className="text-neutral-500 mt-6 text-lg leading-relaxed">
            A HossFatura é uma solução desenvolvida localmente, com suporte técnico e acompanhamento direto em Luanda.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Informações */}
          <div className="space-y-8">

            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">
                Sede operacional
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                Luanda, Angola<br />
                Atendimento remoto e presencial para empresas em todo o território nacional.
              </p>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4 text-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center">
                  <i className="fas fa-globe text-amber-700 text-sm"></i>
                </div>
                <p className="font-medium">Cobertura em todas as províncias</p>
              </div>

              <div className="flex items-center gap-4 text-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center">
                  <i className="fas fa-headset text-amber-700 text-sm"></i>
                </div>
                <p className="font-medium">Suporte remoto especializado</p>
              </div>

              <div className="flex items-center gap-4 text-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 flex items-center justify-center">
                  <i className="fas fa-building text-amber-700 text-sm"></i>
                </div>
                <p className="font-medium">Implementação para empresas locais</p>
              </div>

            </div>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127352.235!2d13.1700!3d-8.8383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5b3a3a3a3a3%3A0x0!2sLuanda!5e0!3m2!1spt!2sao!4v0000000000"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                className="w-full h-112.5 border-0"
              ></iframe>
            </div>

            {/* Badge flutuante */}
            <div className="absolute bottom-6 left-6 bg-neutral-950/90 text-white px-4 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-md border border-zinc-800">
              <i className="fas fa-location-dot text-amber-500"></i>
              <span className="text-sm font-bold">Luanda, Angola</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
