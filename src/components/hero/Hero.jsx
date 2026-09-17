import React, { useState, useEffect } from 'react';
import './Hero.css';

const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;

// Fotos carrossel 
import FOTO_ECONTEC1 from "../../assets/Logo_econtec.png"
import FOTO_ECONTEC2 from "../../assets/Logo_econtec_3D.jpg"

const FOTOS_ECONTEC = [
  {
    id: 1,
    url: FOTO_ECONTEC1,
  },
  {
    id: 2,
    url: FOTO_ECONTEC2,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
  }
];

export function Hero() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Avançar a foto após 3s
  useEffect(() => {
    const timer = setInterval(() => {
      proximaFoto();
    }, 3000);

    return () => clearInterval(timer);
  }, [indiceAtual]);

  const fotoAnterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? FOTOS_ECONTEC.length - 1 : prev - 1));
  };

  const proximaFoto = () => {
    setIndiceAtual((prev) => (prev === FOTOS_ECONTEC.length - 1 ? 0 : prev + 1));
  };

  const handleWhatsappClick = (e) => {
    e.preventDefault();
    if (WHATSAPP_ECONTEC) {
      window.open(
        `https://wa.me/${WHATSAPP_ECONTEC}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de tirar uma dúvida.")}`,
        '_blank'
      );
    }
  };

  const metricas = [
    { number: '28 anos', label: 'de tradição e mercado' },
    { number: '+50', label: 'clientes atendidos' },
    { number: '100%', label: 'atendimento digital e presencial' }
  ];

  return (
    <section className="hero" id="inicio">
      <div className="hero_container">
        
        {/* lado esquerdo do hero */}
        <div className="hero-content">
          <h1 className="hero_titulo">
            Contabilidade que transforma números em <span className="destacar">decisões</span> para o seu negócio.
          </h1>
          
          <p className="hero_subtitulo">
            Há 28 anos ajudando empresas a crescerem com segurança fiscal, organização financeira e atendimento próximo.
          </p>
          
          <div className="hero_bt">
            <a 
              href="#whatsapp" 
              onClick={handleWhatsappClick}
              className="btn_whatsapp"
            >
              Fale com a Econtec
            </a>
            <a href="#servicos" className="btn_servicos">
              Serviços
            </a>
          </div>
        </div>

        {/* LADO DIREITO: CARROSSEL CUSTOMIZADO */}
        <div className="hero_container_carrossel">
          <div className="card_carrossel">
            <img 
              src={FOTOS_ECONTEC[indiceAtual].url} 
              alt={FOTOS_ECONTEC[indiceAtual].titulo} 
              className="carrossel_img"
            />

            {/* Botões de Avançar e Voltar */}
            <button 
              onClick={fotoAnterior}
              className="carrossel-btn btn-prev"
              aria-label="Foto anterior"
            >
              ❮
            </button>
            <button 
              onClick={proximaFoto}
              className="carrossel-btn btn-next"
              aria-label="Próxima foto"
            >
              ❯
            </button>

          </div>
        </div>
      </div>

      {/* MÉTRICAS */}
      <div className="container_metricas">
        <div className="metricas_hero">
          {metricas.map((metric, index) => (
            <div key={index} className="metrica_item">
              <strong className="metrica_numeros">{metric.number}</strong>
              <span className="metrica-frase">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}