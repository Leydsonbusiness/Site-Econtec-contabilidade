import React, { useState, useEffect } from 'react';
import './Header.css';
import logoEcontec from "../../assets/Logo_econtec.png";
import insta_icon from "../../assets/icons/instagram_icon.png";


const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;
const INSTAGRAM_URL = "https://www.instagram.com/leydsond_/"

export function Header() {
const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

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

      if (menuAberto) {
        fecharMenu();
      }

      setUltimoScrollY(scrollAtual);
    };

    window.addEventListener('scroll', controlarHeader);

    return () => {
      window.removeEventListener('scroll', controlarHeader);
    };
  }, [ultimoScrollY, menuAberto]);

  const navegarPara = (e, topPosition) => {
    e.preventDefault();
    fecharMenu(); // <--- Fecha o menu mobile ao clicar
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  };

  const rolarparainicio = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 47, 
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

  const rolarparaservicos = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 1660, 
      behavior: 'smooth' 
    })
  };

  const rolarparadepoimentos = (e) => { 
    e.preventDefault();
    window.scrollTo({
      top: 3170, 
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
        <a href="#" className="logo" onClick={(e) => navegarPara(e, 0)}>
          <img src={logoEcontec} alt="Econtec - Contabilizando o seu sucesso"/>
        </a>

        <nav className={`nav-menu ${menuAberto ? 'ativo' : ''}`}>
          <a href="#inicio" className="nav-link" onClick={(e) => navegarPara(e, 0)}>Início</a>
          <a href="#sobre" className="nav-link" onClick={(e) => navegarPara(e, 1180)}>Sobre</a>
          <a href="#servicos" className="nav-link" onClick={(e) => navegarPara(e, 2790)}>Serviços</a>
          <a href="#depoimentos" className="nav-link" onClick={(e) => navegarPara(e, 5755)}>Depoimentos</a>          
          <a href="#faq" className="nav-link" onClick={rolarparafaq}>FAQ</a>
        </nav>

        <div className='header_actions'> 
          <a 
          href={INSTAGRAM_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='btn_instagram'
          aria-label='Instagram da Econtec'
          >
            <img src={insta_icon} alt="Instagram" className='icon_instagram_img'/>
          </a> 

          <a href="#formulario" className="btn-fale_conosco">
            Fale Conosco
          </a>
        </div>

        {/* BOTÃO MENU HAMBURGUER (MOBILE) */}
        <button 
          className={`menu_hamburguer ${menuAberto ? 'aberto' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className="linha"></span>
          <span className="linha"></span>
          <span className="linha"></span>
        </button>

      </div>
    </header>
  );
}