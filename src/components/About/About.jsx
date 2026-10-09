import React, { useState, useEffect } from 'react';
import './About.css';

// Icons
import icon_grafico from '../../assets/icons/icon_grafico.png'
import icon_trabalho from '../../assets/icons/icon_trabalho.png'
import icon_seguranca from '../../assets/icons/escudo-seguro.png'

// Fotos 
import econtec1 from '../../assets/imagens_econtec/equipe_econtec.png'
import econtec2 from '../../assets/imagens_econtec/fachada_econtec.png'
import econtec3 from '../../assets/imagens_econtec/socias_econtec.png'

export function About() { 
  const pilares = [
    {
      icone: icon_trabalho,
      alt: "Icon de um aperto de mão",
      titulo: 'Atendimento Próximo',
      descricao: 'Relacionamento direto e orientação de acordo com as necessidades de cada cliente.'
    },
    {
      icone: icon_seguranca,
      alt: "Icon de um escudo",
      titulo: 'Segurança & Conformidade',
      descricao: 'Garantimos que sua empresa cumpra todas as obrigações fiscais e trabalhistas sem sobressaltos.'
    },
    {
      icone: icon_grafico,
      alt: "icon de grafico",
      titulo: 'Foco no Seu Crescimento',
      descricao: 'Analisamos seus números de forma consultiva para orientar decisões financeiras inteligentes.'
    }
  ];

  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="about-photos-wrapper">
          <div className="about-photos-composition">
            
            {/* Foto 1 */}
            <div className="card_fotos foto1">
              <img 
                src= {econtec1} 
                alt="Sede Econtec" 
                className="about-img"
              />
            </div>

            {/* Foto 2 */}
            <div className="card_fotos foto2">
              <img 
                src= {econtec2} 
                alt="Equipe Econtec reunida" 
                className="about-img"
              />
            </div>

            {/* Foto 3 */}
            <div className="card_fotos foto3">
              <img 
                src= {econtec3} 
                alt="Atendimento consultivo" 
                className="about-img"
              />
            </div>
          </div>
        </div>

        {/* lado direito */}
        <div className="about-content">
          <span className="about-tag">Quem Somos</span>
          
          <h2 className="about-titulo">
            Conheça a Econtec, sua<span className="destacar-sobre">parceira estratégica</span> para o sucesso do seu negócio.
          </h2>

          <p className="about-text">
            Com sede em Cruzeta/RN e filial em Natal/RN, a <strong>Econtec</strong> atua há 28 anos oferecendo soluções contábeis com confiança, proximidade e eficiência. Unimos a experiência construída ao longo de quase três décadas às ferramentas digitais que tornam a contabilidade mais ágil e acessível.
          </p>

          <p className="about-text">
            <strong>Nosso compromisso é simplificar a rotina contábil, fiscal e financeira dos nossos clientes</strong>, para que cada empreendedor possa dedicar mais tempo ao que realmente importa: fazer seu negócio crescer com segurança.
          </p>

          {/* pilares */}
          <div className="about-pilares">
            {pilares.map((pilar, index) => (
              <div key={index} className="pilar-item">
                <div className="pilar-icone-wrapper">
                  <img src={pilar.icone} 
                  alt={pilar.alt} 
                  className="pilar-icone-img" />
                </div>
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