import React, { useState, useEffect } from 'react';
import './Header.css';
import logoEcontec from "../../assets/Logo_econtec.png";

const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;

export function Header() {
  /* efeito Para subir e descer header */
  const [escondido, setEscondido] = useState(false);
  const [ultimoScrollY, setUltimoScrollY] = useState(0);

  useEffect(() => {
    const controlarHeader = () => {
      const scrollAtual = window.scrollY;

      if (scrollAtual > ultimoScrollY && scrollAtual > 80) {
        setEscondido(true);
      } else {
        setEscondido(false);
      }

      setUltimoScrollY(scrollAtual);
    };

    window.addEventListener('scroll', controlarHeader);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', controlarHeader);
    };
  }, [ultimoScrollY]);

  const rolarparaotopo = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    })
  };

  const rolarparasobre = (e) => { 
    e.preventDefault();
    window.scrollTo({
      top: 690, 
      behavior: 'smooth' 
    })
  };

  const rolarparaservicos = (e) => { //Alterar
    e.preventDefault();
    window.scrollTo({
      top: 1660, 
      behavior: 'smooth' 
    })
  };

  const rolarparafaq = (e) => { //Alterar
    e.preventDefault();
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    })
  };
  
  const WhatsappClick = (e) => {
    e.preventDefault();
    if (WHATSAPP_ECONTEC) {
      window.open(
        `https://wa.me/${WHATSAPP_ECONTEC}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de tirar uma dúvida.")}`, 
        '_blank'
      );
    } else {
      console.warn("Número de WhatsApp não configurado na variável de ambiente VITE_Whatsapp_numero");
    }
  };

return (
    <header className={`header ${escondido ? 'header-oculto' : ''}`}>
      <div className="header_container">
        <a href="#" className="logo" onClick={rolarparaotopo}>
          <img src={logoEcontec} alt="Econtec - Contabilizando o seu sucesso"/>
        </a>

        <nav className="nav-menu">
          <a href="#inicio" className="nav-link" onClick={rolarparaotopo}>Início</a>
          <a href="#sobre" className="nav-link" onClick={rolarparasobre}>Sobre</a>
          <a href="#servicos" className="nav-link" onClick={rolarparaservicos}>Serviços</a>          
          <a href="#faq" className="nav-link" onClick={rolarparafaq}>FAQ</a>
        </nav>
        
        <a href="#contato" className="btn-fale_conosco" onClick={WhatsappClick}>
          Fale Conosco
        </a>
      </div>
    </header>
  );
}