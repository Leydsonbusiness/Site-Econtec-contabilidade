import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

import logo_casa_do_sertanejo from '../../assets/logos_clientes/logo-casa-do-sertanejo.png';
import logo_conf_franoelda from '../../assets/logos_clientes/logo-conf-franoelda.jpg';
import logo_armazem from '../../assets/logos_clientes/logo-armazem.jpeg';
import logo_supermecado_lucena from '../../assets/logos_clientes/logo-supermecado-lucena.png';
import icon_usuario from '../../assets/icons/icon-usuario.png';

export function Testimonials() {
  const depoimentos = [
    {
      id: 1,
      nome: 'Suely Góes',
      cargo: 'Proprietária',
      empresa: 'Casa do Sertanejo LTDA',
      segmento: 'Comércio Varejista de Medicamentos Veterinários e Produtos Agropecuários.',
      depoimento: 'A Casa do Sertanejo é cliente da Econtec há mais de 20 anos e só temos motivos para agradecer por essa parceria! Somos muito satisfeitos com o atendimento, a competência e a dedicação de toda a equipe. Sempre fomos muito bem atendidos, tanto na parte contábil quanto na assessoria, com profissionalismo, confiança e muita responsabilidade. É uma empresa que recomendamos de olhos fechados! Parabéns a toda a equipe da Econtec de Cruzeta pela excelente prestação de serviços. Que venham muitos mais anos dessa parceria!',
      estrelas: 5,
      logoUrl: logo_casa_do_sertanejo
    },
    {
      id: 2,
      nome: 'Franoelda Magneuda',
      cargo: 'Proprietária',
      empresa: 'Confecções Franoelda LTDA',
      segmento: 'Fábrica de costura',
      depoimento: 'O Econtec é uma verdadeira parceira da nossa fábrica, desde a abertura da nossa Empresa em 2009. Profissionalismo, segurança e atendimento de excelência. Recomendamos',
      estrelas: 5,
      logoUrl: logo_conf_franoelda
    },
    {
      id: 3,
      nome: 'Marcelo Arrison',
      cargo: 'Proprietário',
      empresa: 'Armazém de Ração O CRIADOR',
      segmento: 'Comércio varejista e atacadista de produtos agropecuários e alimentação animal',
      depoimento: 'Somos clientes do ECONTEC Contabilidade e podemos afirmar que encontramos uma parceria de confiança para cuidar da nossa empresa. Sempre contamos com atendimento atencioso, responsabilidade e segurança nas informações contábeis.',
      estrelas: 5,
      logoUrl: logo_armazem
    },
    {
      id: 4,
      nome: 'Welkson Renny',
      cargo: 'Cliente',
      empresa: '',
      segmento: 'Pessoa Física',
      depoimento: 'Conheço o trabalho da ECONTEC há pelo menos 2 décadas quando ainda trabalhava com automação comercial e o escritório prestava serviço aos nossos clientes. São comprometidos com os prazos, e fazem um trabalho com excelência. Recomendo a todo empreendedor que entende o quão crítico é uma gestão fiscal/contábil feita com corretude e agilidade.',
      estrelas: 5,
      logoUrl: icon_usuario
    },
    {
      id: 5,
      nome: 'Marcos Vinicius',
      cargo: 'Proprietário',
      empresa: 'Supermercado Lucena',
      segmento: 'Comércio varejista',
      depoimento: 'Excelente serviço de contabilidade! Equipe muito atenciosa, profissional e comprometida. O atendimento é de alta qualidade e fazem tudo com muito cuidado e eficiência.',
      estrelas: 5,
      logoUrl: logo_supermecado_lucena
    },
    {
      id: 6,
      nome: 'Lucas Costa',
      cargo: 'Cliente',
      empresa: '',
      segmento: 'Pessoa Física',
      depoimento: 'Trabalho excepcional! Mesmo morando em Brasília, tenho total tranquilidade porque eles resolvem tudo para mim com muita agilidade e profissionalismo. Recomendo muito!',
      estrelas: 5,
      logoUrl: icon_usuario
    }
  ];

  const [itensPorPagina, setItensPorPagina] = useState(2);
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [direcao, setDirecao] = useState(1); 
  const [expandedId, setExpandedId] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setItensPorPagina(1);
      } else {
        setItensPorPagina(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPaginas = Math.ceil(depoimentos.length / itensPorPagina);

  useEffect(() => {
    if (paginaAtual >= totalPaginas && totalPaginas > 0) {
      setPaginaAtual(totalPaginas - 1);
    }
  }, [totalPaginas, paginaAtual]);

  useEffect(() => {
    if (expandedId !== null || isInteracting) return;

    const timer = setInterval(() => {
      proximaPagina();
    }, 5500);

    return () => clearInterval(timer);
  }, [paginaAtual, expandedId, isInteracting, totalPaginas]);

  const paginaAnterior = () => {
    setExpandedId(null);
    setDirecao(-1);
    setPaginaAtual((prev) => (prev === 0 ? totalPaginas - 1 : prev - 1));
  };

  const proximaPagina = () => {
    setExpandedId(null);
    setDirecao(1);
    setPaginaAtual((prev) => (prev >= totalPaginas - 1 ? 0 : prev + 1));
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleDragEnd = (event, info) => {
    setIsInteracting(false);
    const offsetThreshold = 40; 
    const velocityThreshold = 150; 

    if (info.offset.x < -offsetThreshold || info.velocity.x < -velocityThreshold) {
      proximaPagina();
    } else if (info.offset.x > offsetThreshold || info.velocity.x > velocityThreshold) {
      paginaAnterior();
    }
  };

  const depoimentosExibidos = depoimentos.slice(
    paginaAtual * itensPorPagina,
    paginaAtual * itensPorPagina + itensPorPagina
  );

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.25
      }
    })
  };

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">Prova Social</span>
          <h2 className="testimonials-titulo">
            O que nossos clientes dizem <span className="destacar-depoimentos">sobre nós</span>
          </h2>
          <p className="testimonials-subtitulo">
            A parceria de confiança com empresas que impulsionam a economia da nossa região.
          </p>
        </div>

        <div 
          className="testimonials-carousel-wrapper"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
        >
          <button 
            onClick={paginaAnterior} 
            className="carousel-control prev"
            aria-label="Página anterior"
          >
            ❮
          </button>

          <div className="testimonials-drag-area">
            <AnimatePresence custom={direcao} mode="wait">
              <motion.div
                key={`${paginaAtual}-${itensPorPagina}`}
                custom={direcao}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsInteracting(true)}
                onDragEnd={handleDragEnd}
                className={`testimonials-grid draggable ${itensPorPagina === 1 ? 'single-column' : 'double-column'}`}
              >
                {depoimentosExibidos.map((item) => {
                  const isExpanded = expandedId === item.id;
                  const precisaLerMais = item.depoimento.length > 177;

                  return (
                    <div key={item.id} className="testimonial-card">
                      <div className="testimonial-stars">
                        {'★'.repeat(item.estrelas)}
                      </div>

                      <div className="quote-wrapper">
                        <p className={`testimonial-quote ${isExpanded ? 'expandido' : 'limitado'}`}>
                          "{item.depoimento}"
                        </p>

                        {precisaLerMais && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(item.id);
                            }}
                            className="btn-read-more"
                          >
                            {isExpanded ? 'Ler menos' : 'Ler mais'}
                          </button>
                        )}
                      </div>

                      <div className="testimonial-author">
                        <div className="author-avatar logo-avatar">
                          {item.logoUrl ? (
                            <img 
                              src={item.logoUrl} 
                              alt={`Logo ${item.empresa || item.nome}`} 
                              className="company-logo" 
                              draggable="false"
                            />
                          ) : (
                            item.nome.charAt(0)
                          )}
                        </div>
                        <div className="author-info">
                          <h4 className="author-name">{item.nome}</h4>
                          <p className="author-company">
                            {item.empresa ? (
                              <>
                                {item.cargo} na <strong>{item.empresa}</strong>
                              </>
                            ) : (
                              <span>{item.cargo}</span>
                            )}
                          </p>
                          <span className="author-segment">{item.segmento}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={proximaPagina} 
            className="carousel-control next"
            aria-label="Próxima página"
          >
            ❯
          </button>
        </div>
        
        <div className="carousel-dots">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === paginaAtual ? 'ativo' : ''}`}
              onClick={() => {
                setExpandedId(null);
                setDirecao(index > paginaAtual ? 1 : -1);
                setPaginaAtual(index);
              }}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}