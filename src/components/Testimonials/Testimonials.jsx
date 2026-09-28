import React, { useState, useEffect } from 'react';
import './Testimonials.css';

export function Testimonials() {
  const depoimentos = [
    {
      id: 1,
      nome: 'Carlos Eduardo',
      cargo: 'Proprietário',
      empresa: 'Supermercado Central',
      segmento: 'Comércio Varejista',
      depoimento: 'A transição para a Econtec trouxe total clareza fiscal para a nossa loja. O atendimento rápido e próximo faz toda a diferença quando precisamos tomar decisões rápidas do dia a dia no comércio.',
      estrelas: 5,
      inicial: 'C'
    },
    {
      id: 2,
      nome: 'Mariana Lima',
      cargo: 'Sócia-Fundadora',
      empresa: 'Clínica Saúde & Vida',
      segmento: 'Serviços de Saúde',
      depoimento: 'Há anos confiamos na gestão contábil e trabalhista da Econtec. A equipe cuida de toda a nossa folha de pagamento e obrigações fiscais com impecável pontualidade. Sempre que surge uma nova regulamentação na área da saúde, eles nos orientam com antecedência e muita transparência.',
      estrelas: 5,
      inicial: 'M'
    },
    {
      id: 3,
      nome: 'Roberto Fonseca',
      cargo: 'Diretor de Operações',
      empresa: 'Agrícola Sertão Verde',
      segmento: 'Agronegócio',
      depoimento: 'A orientação consultiva da Econtec foi essencial para o nosso planejamento tributário. Reduzimos custos de forma legal e organizada com o suporte deles durante toda a safra.',
      estrelas: 5,
      inicial: 'R'
    },
    {
      id: 4,
      nome: 'Fernanda Souza',
      cargo: 'Gestora Financeira',
      empresa: 'Auto Peças Cruzeta',
      segmento: 'Comércio & Auto',
      depoimento: 'Excelente suporte tanto presencial quanto digital. Sempre que temos dúvidas sobre notas fiscais ou emissões complexas, a resposta do time da Econtec é imediata e eficiente.',
      estrelas: 5,
      inicial: 'F'
    },
    {
      id: 5,
      nome: 'Lucas Medeiros',
      cargo: 'Fundador',
      empresa: 'Medeiros Engenharia',
      segmento: 'Construção Civil',
      depoimento: 'Trabalhar com a Econtec nos dá tranquilidade para focar nas nossas obras. A precisão nos balancetes e a agilidade nas rotinas nos poupam muito tempo e evitam dores de cabeça.',
      estrelas: 5,
      inicial: 'L'
    },
    {
      id: 6,
      nome: 'Lucas Medeiros',
      cargo: 'Fundador',
      empresa: 'Medeiros Engenharia',
      segmento: 'Construção Civil',
      depoimento: 'Trabalhar com a Econtec nos dá tranquilidade para focar nas nossas obras. A precisão nos balancetes e a agilidade nas rotinas nos poupam muito tempo e evitam dores de cabeça.',
      estrelas: 5,
      inicial: 'L'
    }
  ];

  const itensPorPagina = 2;
  const totalPaginas = Math.ceil(depoimentos.length / itensPorPagina);
  const [paginaAtual, setPaginaAtual] = useState(0);
  
  // Guarda qual depoimento está expandido (por ID)
  const [expandedId, setExpandedId] = useState(null);

  // Troca automática a cada 6 segundos (pausa se o usuário estiver lendo um depoimento expandido)
  useEffect(() => {
    if (expandedId !== null) return;

    const timer = setInterval(() => {
      proximaPagina();
    }, 6000);

    return () => clearInterval(timer);
  }, [paginaAtual, expandedId]);

  const paginaAnterior = () => {
    setExpandedId(null);
    setPaginaAtual((prev) => (prev === 0 ? totalPaginas - 1 : prev - 1));
  };

  const proximaPagina = () => {
    setExpandedId(null);
    setPaginaAtual((prev) => (prev === totalPaginas - 1 ? 0 : prev + 1));
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const depoimentosExibidos = depoimentos.slice(
    paginaAtual * itensPorPagina,
    paginaAtual * itensPorPagina + itensPorPagina
  );

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-container">
        
        {/* CABEÇALHO */}
        <div className="testimonials-header">
          <span className="testimonials-tag">Prova Social</span>
          <h2 className="testimonials-titulo">
            O que nossos clientes dizem <span className="destacar-depoimentos">sobre nós</span>
          </h2>
          <p className="testimonials-subtitulo">
            A parceria de confiança com empresas que impulsionam a economia da nossa região.
          </p>
        </div>

        {/* CARROSSEL */}
        <div className="testimonials-carousel-wrapper">
          <button 
            onClick={paginaAnterior} 
            className="carousel-control prev"
            aria-label="Página anterior"
          >
            ❮
          </button>

          <div className="testimonials-double-grid">
            {depoimentosExibidos.map((item) => {
              const isExpanded = expandedId === item.id;
              
              // Define o limite de caracteres para decidir se precisa do botão "Ler mais"
              const precisaLerMais = item.depoimento.length > 180;

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
                        onClick={() => toggleExpand(item.id)}
                        className="btn-read-more"
                      >
                        {isExpanded ? 'Ler menos' : 'Ler mais'}
                      </button>
                    )}
                  </div>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {item.inicial}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{item.nome}</h4>
                      <p className="author-company">{item.cargo} • <strong>{item.empresa}</strong></p>
                      <span className="author-segment">{item.segmento}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={proximaPagina} 
            className="carousel-control next"
            aria-label="Próxima página"
          >
            ❯
          </button>
        </div>

        {/* INDICADORES (DOTS) */}
        <div className="carousel-dots">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === paginaAtual ? 'ativo' : ''}`}
              onClick={() => {
                setExpandedId(null);
                setPaginaAtual(index);
              }}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}