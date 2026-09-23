import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;

// Fotos carrossel 
// import FOTO_ECONTEC1 from "../../assets/Logo_econtec.png"
import FOTO_ECONTEC2 from "../../assets/Logo_econtec_3D.jpg"
// import img_teste from "../../assets/img_teste.png"

// Carrossel
const FOTOS_ECONTEC = [
  {
    id: 1,
    url: FOTO_ECONTEC2,
  },
  {
    id: 2,
    url: FOTO_ECONTEC2,
  },
  {
    id: 3,
    url: FOTO_ECONTEC2,
  }
];

function MetricCounter({ end = 0, duration = 1420, prefix = '', suffix = '', inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const target = Number(end) || 0;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  const seguroPrefix = prefix || '';
  const seguroSuffix = suffix || '';

  return (
    <span>
      {seguroPrefix}{count}{seguroSuffix}
    </span>
  );
}

export function Hero() {
  const [indiceAtual, setIndiceAtual] = useState(0);

// Carrossel
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

  const rolarparaservicos = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 1660, 
      behavior: 'smooth' 
    })
  };

  const mensagem_wpp = (e) => {
    e.preventDefault();
    if (WHATSAPP_ECONTEC) {
      window.open(
        `https://wa.me/${WHATSAPP_ECONTEC}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de tirar uma dúvida.")}`,
        '_blank'
      );
    }
  };

// metricas
const { ref: refMetrics, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  });

  const metrics = [
    { end: 28, suffix: ' anos', label: 'de tradição e mercado' },
    { end: 150, prefix: '+', label: 'clientes atendidos' },
    { end: 100, suffix: '%', label: 'atendimento digital e presencial' }
  ];
  
  return (
    <section className="hero" id="inicio">
      <div className="hero_container">
        
        {/* ======= lado esquerdo do hero ======= */}
        <div className="hero-content">
          <h1 className="hero_titulo">
            Contabilidade que transforma números em <span className="destacar_titulo">decisões</span> para o seu negócio.
          </h1>
          
          <p className="hero_subtitulo">
            Há <span className='destacar_subtitulo'>28 anos</span> ajudando empresas a crescerem com segurança fiscal, organização financeira e atendimento próximo.
          </p>
          
          <div className="hero_bt">
            <a 
              href="#whatsapp" 
              onClick={mensagem_wpp}
              className="btn_whatsapp"
            >
              Fale conosco
            </a>
            <a href= "#seviços" className="btn_servicos" onClick={rolarparaservicos}>
              Nossos serviços <span className='seta_btn_servicos'>🠗</span>
            </a>
          </div>
        </div>

        {/* ======= lado direito ======= */}
        <div className="hero_container_carrossel">
          <div className="card_carrossel">
            <img 
              src={FOTOS_ECONTEC[indiceAtual].url} 
              alt={"Fotos_Econtec"} 
              className="carrossel_img"
            />

            {/* ======= botoes carrossel ======= */}
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
      
{/* BARRA DE MÉTRICAS */}
      <div className="container_metricas" ref={refMetrics}>
        <div className="metricas_hero">
          {metrics.map((metric, index) => (
            <div key={index} className="metrica_item">
              <strong className="metrica_numeros">
                <MetricCounter 
                  end={metric.end} 
                  prefix={metric.prefix || ''} 
                  suffix={metric.suffix || ''} 
                  inView={inView}  
                />
              </strong>
              <span className="metrica_frase">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}