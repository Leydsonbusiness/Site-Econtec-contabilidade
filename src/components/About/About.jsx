import React from 'react';
import './About.css'
import img_teste from "../../assets/img_teste.png"

export function About() {
  const pilares = [
    {
      icone: '🤝',
      titulo: 'Atendimento Próximo',
      descricao: 'Mesmo no ambiente digital, mantemos um relacionamento humano, direto e transparente com cada cliente.'
    },
    {
      icone: '🛡️',
      titulo: 'Segurança & Conformidade',
      descricao: 'Garantimos que sua empresa cumpra todas as obrigações fiscais e trabalhistas sem sobressaltos.'
    },
    {
      icone: '📈',
      titulo: 'Foco no Seu Crescimento',
      descricao: 'Analisamos seus números de forma consultiva para orientar decisões financeiras inteligentes.'
    }
  ];

  return (
    <section className="about" id="sobre">
      <div className="about-container">
        
        {/* lado esquerdo (provavel fts) */}
        <div className="about-image-wrapper">
          <div className="about-image-card">
            <img 
              src= {img_teste} 
              alt="Equipe Econtec reunida no escritório" 
              className="about-img"
            />
            <div className="about-badge">
              <strong>Nossa sede em Cruzeta - RN</strong>
              <span>Atendendo clientes em todo o estado e região</span>
            </div>
          </div>
        </div>

        {/* lado direito (conteudo) */}
        <div className="about-content">
          <span className="about-tag">Quem Somos</span>
          
          <h2 className="about-titulo">
            Mais que um escritório contábil: o <span className="destacar-sobre">parceiro estratégico</span> do seu negócio.
          </h2>

          <p className="about-text">
            Com sede em Cruzeta/RN e filial em Natal/RN, atuando no mercado há 28 anos, a <strong>Econtec</strong> une a tradição de um atendimento de confiança à agilidade das ferramentas digitais.
          </p>

          <p className="about-text">
            Nossa missão é simplificar a rotina tributária e financeira das empresas, permitindo que os empreendedores foquem no que realmente importa: fazer o seu negócio crescer com segurança.
          </p>

          {/* PILARES / DIFERENCIAIS RÁPIDOS */}
          <div className="about-pilares">
            {pilares.map((pilar, index) => (
              <div key={index} className="pilar-item">
                <span className="pilar-icone">{pilar.icone}</span>
                <div>
                  <h4 className="pilar-titulo">{pilar.titulo}</h4>
                  <p className="pilar-descricao">{pilar.descricao}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}