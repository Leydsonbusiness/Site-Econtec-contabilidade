import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faq.css';

const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;

export function Faq() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      pergunta: 'O Econtec atende empresas e clientes de outras cidades?',
      resposta: 'Sim. Além do atendimento presencial, contamos com ferramentas digitais que permitem atender clientes à distância, compartilhar documentos e acompanhar demandas de forma prática, mantendo a proximidade e o suporte da nossa equipe.'
    },
    {
      id: 2,
      pergunta: 'Já tenho contador. Como faço para mudar para a Econtec?',
      resposta: 'A mudança é simples e você conta com o suporte da nossa equipe durante todo o processo. O Econtec intermedia a transição com o contador anterior, solicitando os documentos e informações necessários para dar continuidade aos serviços contábeis da sua empresa de forma organizada.'
    },
    {
      id: 3,
      pergunta: 'Quais tipos de empresas a Econtec atende?',
      resposta: 'Sim! Nós atendemos negócios de diferentes portes e segmentos, desde MEIs e microempresas até empresas de pequeno e médio porte, com suporte para empresas enquadradas no Simples Nacional, Lucro Presumido e Lucro Real.'
    },
    {
      id: 4,
      pergunta: 'A Econtec também atende pessoas físicas?',
      resposta: 'Sim! Prestamos serviços para pessoas físicas, incluindo elaboração e declaração do Imposto de Renda (IRPF), planejamento tributário pessoal, carnê-leão e consultoria para profissionais autônomos e liberais.'
    },
    {
      id: 5,
      pergunta: 'Minha empresa pode estar pagando mais impostos do que deveria?',
      resposta: 'Sim, isso pode acontecer quando o enquadramento ou o planejamento tributário não estão adequados à realidade da empresa. A Econtec analisa a situação do negócio e identifica possibilidades legais de otimização tributária, sempre respeitando a legislação vigente.'
    },
    {
      id: 6,
      pergunta: 'Como funciona o primeiro atendimento na Econtec?',
      resposta: 'No primeiro contato, buscamos entender o seu negócio e identificar suas principais necessidades. A partir disso, orientamos sobre os serviços mais adequados e informamos quais documentos serão necessários para dar início ao atendimento.'
    }
  ];

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const duvidas_wpp = (e) => {
    e.preventDefault();
    if (WHATSAPP_ECONTEC) {
      window.open(
        `https://wa.me/${WHATSAPP_ECONTEC}?text=${encodeURIComponent("Olá! Vim pelo site, li as dúvidas, mas ainda fiquei com mais algumas. Poderia me ajudar?")}`,
        '_blank'
      );
    }
  };

  return (
    <section className="faq-section" id= "faq">
      <div className="faq-container">
        
        <div className="faq-header">
          <span className="faq-tag">Tire suas dúvidas</span>
          <h2 className="faq-titulo">
            Perguntas <span className="destacar-faq">frequentes</span>
          </h2>
          <p className="faq-subtitulo">
            Encontre respostas para as principais dúvidas sobre nossos serviços, atendimento e como é ter o Econtec ao lado do seu negócio.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? 'aberto' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.pergunta}</span>
                  <span className="faq-icon">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer">{faq.resposta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <div className="faq-footer">
          <p>Ainda tem alguma dúvida?</p>
          <a href="#contato" className="btn-faq-whatsapp" onClick={duvidas_wpp}>
            Fale com a nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
}