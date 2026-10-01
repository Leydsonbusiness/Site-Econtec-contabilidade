import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faq.css';

export function Faq() {
  // Estado para controlar qual pergunta está aberta (guarda o id da pergunta aberta)
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      pergunta: 'A Econtec atende clientes de outras cidades e estados?',
      resposta: 'Sim! Atendemos empresas e clientes em todo o Brasil. Através dos nossos processos digitais e ferramentas integradas, garantimos um atendimento ágil, eficiente e sem barreiras geográficas.'
    },
    {
      id: 2,
      pergunta: 'O atendimento pode ser feito totalmente online?',
      resposta: 'Com certeza. Oferecemos um atendimento 100% digital via WhatsApp, e-mail, videochamadas e plataformas de envio de documentos. Se você preferir um atendimento presencial, nossa equipe também está pronta para recebê-lo.'
    },
    {
      id: 3,
      pergunta: 'Quais tipos de empresas a Econtec atende?',
      resposta: 'Atendemos empresas de diversos portes e segmentos, desde Microempreendedores Individuais (MEI), Microempresas (ME) até Empresas de Pequeno e Médio Porte nos regimes Simples Nacional, Lucro Presumido e Lucro Real.'
    },
    {
      id: 4,
      pergunta: 'A Econtec também atende pessoas físicas?',
      resposta: 'Sim! Prestamos serviços para pessoas físicas, incluindo elaboração e declaração do Imposto de Renda (IRPF), planejamento tributário pessoal, carnê-leão e consultoria para profissionais autônomos e liberais.'
    },
    {
      id: 5,
      pergunta: 'Como funciona a troca de contador?',
      resposta: 'A troca é simples e sem complicações. A Econtec cuida de toda a transição burocrática diretamente com a sua contabilidade anterior, solicitando o envio de documentos e histórico fiscal sem interromper a sua rotina.'
    },
    {
      id: 6,
      pergunta: 'Como funciona o primeiro atendimento e quais documentos preciso enviar?',
      resposta: 'No primeiro contato, realizamos um diagnóstico do seu negócio para entender suas reais necessidades. Após a definição dos serviços, enviamos uma lista simples com os documentos básicos (documentos dos sócios, contrato social ou dados da empresa).'
    }
  ];

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id= "faq">
      <div className="faq-container">
        
        {/* CABEÇALHO */}
        <div className="faq-header">
          <span className="faq-tag">Tire suas dúvidas</span>
          <h2 className="faq-titulo">
            Perguntas <span className="destacar-faq">frequentes</span>
          </h2>
          <p className="faq-subtitulo">
            Encontre respostas rápidas para as principais dúvidas sobre nossos serviços e atendimento.
          </p>
        </div>

        {/* LISTA DE ACCORDIONS */}
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

        {/* CHAMADA ADICIONAL PARA SUPORTE */}
        <div className="faq-footer">
          <p>Ainda tem alguma dúvida?</p>
          <a href="#contato" className="btn-faq-whatsapp">
            Fale com a nossa equipe
          </a>
        </div>

      </div>
    </section>
  );
}