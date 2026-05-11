import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Hero1 from "../../assets/img/hero1.jpg";
import Hero2 from "../../assets/img/hero2.jpg";
import Hero3 from "../../assets/img/hero3.jpg";

export default function Hero() {
  const slides = [
    {
      title: "Sistema de Faturação para Empresas Angolanas",
      subtitle: "Controle vendas, stock, clientes e finanças num só lugar com total segurança.",
      highlight: "Pronto para o mercado de Angola",
      image: Hero1,
      cta1: { label: "Pedir Demonstração", to: "/demonstracao" },
      cta2: { label: "Falar no WhatsApp", href: "https://wa.me/244900000000" },
    },
    {
      title: "Gestão Simples, Rápida e Profissional",
      subtitle: "Automatize processos e elimine erros na faturação diária da sua equipa.",
      highlight: "Menos burocracia, mais lucro",
      image: Hero2,
      cta1: { label: "Começar Agora", to: "/planos" },
      cta2: { label: "Ver Funcionalidades", to: "/funcionalidades" },
    },
    {
      title: "Preparado para Escalar o Seu Negócio",
      subtitle: "Uma solução pensada para a nova geração de empresas modernas em Luanda.",
      highlight: "Tecnologia de ponta ao seu serviço",
      image: Hero3,
      cta1: { label: "Testar Grátis", to: "/criar-conta" },
      cta2: { label: "Contactar Suporte", to: "/contatos" },
    },
  ];

  return (
    <section className="relative bg-neutral-950 text-zinc-100 pt-32 pb-20 overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-700/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          grabCursor={true}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-2 gap-16 items-center py-8">

                {/* Conteúdo */}
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-full w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500">
                      {slide.highlight}
                    </span>
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                    {slide.title.split(" ").map((word, i) => 
                      ["angolanas", "profissional", "negócio"].includes(word.toLowerCase())
                      ? <span key={i} className="text-amber-700 italic"> {word}</span> 
                      : ` ${word}`
                    )}
                  </h1>

                  <p className="text-zinc-400 text-lg lg:text-xl max-w-xl leading-relaxed">
                    {slide.subtitle}
                  </p>

                  {/* Botões do Hero - Padrão Premium Industrial */}
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Botão Principal (Destaque Amber) */}
                    <Link
                      to={slide.cta1.to}
                      className="group flex items-center justify-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(180,83,9,0.4)] hover:-translate-y-1"
                    >
                      <span>{slide.cta1.label}</span>
                      <div className="bg-white/20 p-1 rounded-md group-hover:bg-white/30 transition-colors">
                        <i className="fas fa-arrow-right text-xs"></i>
                      </div>
                    </Link>

                    {/* Botão Secundário (Estilo Glass/Industrial) */}
                    {slide.cta2.href ? (
                      <a
                        href={slide.cta2.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-center gap-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-700/50 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1"
                      >
                        <i className="fab fa-whatsapp text-amber-500 group-hover:scale-110 transition-transform"></i>
                        <span>{slide.cta2.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={slide.cta2.to}
                        className="group flex items-center justify-center gap-4 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-amber-700/50 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1"
                      >
                        <span>{slide.cta2.label}</span>
                        <i className="fas fa-plus text-[10px] text-zinc-500 group-hover:text-amber-500 transition-colors"></i>
                      </Link>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-zinc-900">
                    {[
                      { icon: "file-invoice-dollar", text: "Faturação Certificada" },
                      { icon: "check-double", text: "Conformidade AGT" },
                      { icon: "headset", text: "Suporte Local" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-500 font-medium uppercase tracking-wider">
                        <i className={`fas fa-${item.icon} text-amber-700`}></i>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Imagem */}
                <div className="relative order-1 lg:order-2 group">
                  <div className="absolute -inset-1 bg-linear-to-r from-amber-700/20 to-transparent rounded-4xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative rounded-4xl overflow-hidden border border-zinc-800 bg-zinc-900 p-2 shadow-2xl transform lg:rotate-3 group-hover:rotate-0 transition-all duration-700">
                    <img
                      src={slide.image}
                      alt="Interface"
                      className="w-full h-auto rounded-3xl object-cover"
                    />
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
