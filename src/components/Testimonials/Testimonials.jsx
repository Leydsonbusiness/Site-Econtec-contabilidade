import React, { useState, useEffect } from 'react';
import './Testimonials.css';

export function Testimonials() {
  const depoimentos = [
    {
      id: 1,
      nome: 'Suely Góes',
      cargo: 'Proprietário',
      empresa: 'Casa do Sertanejo',
      segmento: 'Agronegócio',
      depoimento: 'A Casa do Sertanejo é cliente da Econtec há mais de 20 anos e só temos motivos para agradecer por essa parceria! Somos muito satisfeitos com o atendimento, a competência e a dedicação de toda a equipe. Sempre fomos muito bem atendidos, tanto na parte contábil quanto na assessoria, com profissionalismo, confiança e muita responsabilidade. É uma empresa que recomendamos de olhos fechados! Parabéns a toda a equipe da Econtec de Cruzeta pela excelente prestação de serviços. Que venham muitos mais anos dessa parceria! 👏🏼🤝🏼',
      estrelas: 5,
      inicial: 'S'
    },
    {
      id: 2,
      nome: 'Lucas Costa',
      segmento: 'Pessoa Física',
      depoimento: 'Trabalho excepcional!Estou com a Econtec há 1 ano e mesmo morando em Brasília, tenho total tranquilidade porque eles resolvem tudo para mim com muita agilidade e profissionalismo. Recomendo muito!',
      estrelas: 5,
      inicial: 'L'
    },
    {
      id: 3,
      nome: 'Roberto Fonseca',
      cargo: 'Diretor de Operações',
      empresa: 'Agrícola Sertão Verde',
      segmento: 'Agronegócio',
      depoimento: 'A orientação consultiva da Econtec foi essencial para o nosso planejamento tributário. Reduzimos custos de forma legal e organizada com o suporte deles.',
      estrelas: 5,
      inicial: 'R'
    },
    {
      id: 4,
      nome: 'Fernanda Souza',
      cargo: 'Gestora Financeira',
      empresa: 'Auto Peças Cruzeta',
      segmento: 'Comércio & Auto',
      depoimento: 'Excelente suporte tanto presencial quanto digital. Sempre que temos dúvidas sobre notas fiscais ou emissões, a resposta do time da Econtec é imediata.',
      estrelas: 5,
      inicial: 'F'
    },
    {
      id: 5,
      nome: 'Lucas Medeiros',
      cargo: 'Fundador',
      empresa: 'Medeiros Engenharia & Construção',
      segmento: 'Construção Civil',
      depoimento: 'Trabalhar com a Econtec nos dá tranquilidade para focar nas nossas obras. A precisão nos balancetes e a agilidade nas rotinas nos poupam muito tempo.',
      estrelas: 5,
      inicial: 'L'
    },
    {
      id: 6,
      nome: 'Mariana Lima',
      cargo: 'Sócia-Fundadora',
      empresa: 'Clínica Saúde & Vida',
      segmento: 'Serviços de Saúde',
      depoimento: 'Há anos confiamos na gestão contábil e trabalhista da Econtec. A equipe cuida de toda a nossa folha de pagamento e obrigações fiscais com impecável pontualidade.',
      estrelas: 5,
      inicial: 'M'
    },
  ];

  const itensPorPagina = 2;
  const totalPaginas = Math.ceil(depoimentos.length / itensPorPagina);
  const [paginaAtual, setPaginaAtual] = useState(0);

  // Tempo em tela
  useEffect(() => {
    const timer = setInterval(() => {
      proximaPagina();
    }, 6200);

    return () => clearInterval(timer);
  }, [paginaAtual]);

  const paginaAnterior = () => {
    setPaginaAtual((prev) => (prev === 0 ? totalPaginas - 1 : prev - 1));
  };

  const proximaPagina = () => {
    setPaginaAtual((prev) => (prev === totalPaginas - 1 ? 0 : prev + 1));
  };

  // Pega exatamente os 2 depoimentos da página atual
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
            O que nossos clientes dizem sobre a <span className="destacar-depoimentos">Econtec</span>
          </h2>
          <p className="testimonials-subtitulo">
            A parceria de confiança com empresas que impulsionam a economia da nossa região.
          </p>
        </div>

        {/* CONTÊINER DO CARROSSEL */}
        <div className="testimonials-carousel-wrapper">
          
          <button 
            onClick={paginaAnterior} 
            className="carousel-control prev"
            aria-label="Página anterior"
          >
            ❮
          </button>

          {/* GRID COM OS 2 CARDS */}
          <div className="testimonials-double-grid">
            {depoimentosExibidos.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(item.estrelas)}
                </div>

                <p className="testimonial-quote">
                  "{item.depoimento}"
                </p>

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
            ))}
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
              onClick={() => setPaginaAtual(index)}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}