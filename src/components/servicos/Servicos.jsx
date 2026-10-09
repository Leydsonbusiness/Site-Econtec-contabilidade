import React from 'react';
import './Servicos.css'

const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;
const WHATSAPP_CONSULTORIA = import.meta.env.VITE_Whatsapp_consultoria;

// icons
import icon_abertura from '../../assets/icons/abertura.png'
import icon_fiscal from '../../assets/icons/gestao_fiscal.png'
import icon_cont_consultiva from '../../assets/icons/crescimento2.png'
import icon_departamento from '../../assets/icons/companhia.png'
import icon_MEI from '../../assets/icons/MEI.png'
import icon_imposto from '../../assets/icons/text-editor.png'
import logo_seilhagoes from '../../assets/logo_seilhagoes.png'




export function Services() {
  const listaServicos = [
    {
      id: 'abertura',
      icone: icon_abertura,
      alt: 'Ícone Abertura de Empresa',
      titulo: 'Abertura & Legalização',
      descricao: 'Acompanhamento completo na estruturação do seu negócio, escolha do tipo jurídico e definição do regime tributário ideal desde o primeiro dia.',
      tags: [ 'Contrato Social', 'CNPJ', 'Licenças', 'Inscrição Estadual/Municipal' ]
    },
    {
      id: 'fiscal',
      icone: icon_fiscal,
      alt: 'Ícone Gestão Fiscal',
      titulo: 'Gestão Fiscal & Tributária',
      descricao: 'Apuração rigorosa de impostos, entrega de obrigações acessórias e planejamento tributário focado na redução legal da sua carga de impostos.',
      tags: ['Simples Nacional', 'Lucro Presumido', 'Lucro Real']
    },
    {
      id: 'contabil',
      icone: icon_cont_consultiva,
      alt: 'Ícone Contabilidade Consultiva',
      titulo: 'Contabilidade Consultiva',
      descricao: 'Elaboração de demonstrações contábeis e DRE organizadas para transformar dados em relatórios práticos de apoio às decisões da empresa.',
      tags: ['DRE', 'Balanço Patrimonial', 'Relatórios']
    },
    {
      id: 'pessoal',
      icone: icon_departamento,
      alt: 'Ícone Departamento Pessoal',
      titulo: 'Departamento Pessoal',
      descricao: 'Gestão completa da folha de pagamento, férias, eSocial, rotinas trabalhistas e suporte contínuo nas relações de emprego da sua empresa.',
      tags: ['Folha de Pagamento', 'eSocial', 'Rescisões']
    },
    {
      id: 'mei',
      icone: icon_MEI,
      alt: 'Ícone Suporte ao MEI',
      titulo: 'Suporte ao MEI & Pequenas Empresas',
      descricao: 'Atendimento dedicado com soluções descomplicadas para garantir que o microempreendedor individual mantenha sua empresa 100% regular.',
      tags: ['DAS-MEI', 'Declaração Anual', 'Desenquadramento']
    },
    {
      id: 'declaracao_de_imposto',
      icone: icon_imposto,
      alt: 'Ícone Consultoria Empresarial',
      titulo: 'Declaração de Imposto de Renda PF (IRPF)',
      descricao: 'Elaboração e envio da sua declaração com análise de rendimentos, bens e deduções, garantindo mais segurança e precisão nas informações declaradas.',
      tags: ['IRPF', 'Deduções', 'Bens & Rendimentos']
    },
  ];

  const solicitarServico = (tituloServico) => {
    if (WHATSAPP_ECONTEC) {
      const mensagem = `Olá! Gostaria de mais informações sobre o serviço de *${tituloServico}*.`;
      window.open(
        `https://wa.me/${WHATSAPP_ECONTEC}?text=${encodeURIComponent(mensagem)}`,
        '_blank'
      );
    } else{
      console.warn("Número de Whatsapp não configurado na variável de ambiente")
    }
  }

  const solicitarConsultoria = (e) => {
    e.preventDefault();
    if (WHATSAPP_CONSULTORIA) {
      window.open(
        `https://wa.me/${WHATSAPP_CONSULTORIA}?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre o serviço de *Consultoria Empresarial*.")}`, 
        '_blank'
      );
    } else {
      console.warn("Número de WhatsApp não configurado na variável de ambiente");
    }
  };

  return (
    <section className="services" id="servicos">
      <div className="services-container">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="services-header">
          <span className="services-tag">Nossos Serviços</span>
          <h2 className="services-titulo">
            Da gestão ao crescimento, soluções <span className="destacar-servicos">completas</span> para cada etapa do seu negócio.
          </h2>
          <p className="services-subtitulo">
            Da abertura à gestão consultiva do dia a dia, entregamos segurança fiscal e clareza para a tomada de decisões.
          </p>
        </div>

        {/* GRID DE CARDS COM ÍCONES LOCAIS */}
        <div className="services-grid">
          {listaServicos.map((servico) => (
            <div key={servico.id} className="service-card">
              <div className="service-icon-wrapper">
                <img 
                  src={servico.icone} 
                  alt={servico.alt} 
                  className="service-icon-img" 
                />
              </div>
              
              <h3 className="service-card-titulo">{servico.titulo}</h3>
              <p className="service-card-descricao">{servico.descricao}</p>
              
              <div className="service-tags">
                {servico.tags.map((tag, idx) => (
                  <span key={idx} className="service-tag-item">{tag}</span>
                ))}
              </div>

              <button 
                onClick={() => solicitarServico(servico.titulo)}
                className="btn-card-servico"
              >
                <span>Saber mais</span>
                <span className="seta-btn-card">➔</span>
              </button>
            </div>
          ))}
        </div>

        <div className='service-extra'>
          {/* Logo */}
          <img 
            src={logo_seilhagoes} 
            alt="Consultoria Empresarial Seilha Góes" 
            className="service-extra-logo" 
          />
        
          {/* Conteúdo central */}
          <div className='service-extra-content'>
            <h3>Precisa de uma Consultoria Empresarial?</h3>
            <p>A Econtec conta com a parceria da consultora empresarial Seilha Góes, oferecendo soluções estratégicas para gestão e desenvolvimento de negócios.</p>

            <div className='service-extra-tags'>
              <span className='tag'>Parceria Estratégica</span>
              <span className='tag'>Gestão & Processos</span>
              <span className='tag'>BPO Financeiro</span>     
              <span className='tag'>Planejamento Tributário</span>                       
            </div>
          </div>
          <button className='btn-consultoria' onClick= {solicitarConsultoria}>
            Conhecer a consultoria
          </button>
        </div>


        {/* Atendimento personalizado */}
        <div className="services-cta-banner">
          <div>
            <h3>Não encontrou exatamente o que precisa?</h3>
            <p>Analisamos as necessidades do seu negócio e indicamos as soluções mais adequadas.</p>
          </div>
          <button 
            onClick={() => solicitarServico('Atendimento Personalizado')}
            className="btn-whatsapp-banner"
          >
            Falar com um especialista
          </button>
        </div>

      </div>
    </section>
  );
}