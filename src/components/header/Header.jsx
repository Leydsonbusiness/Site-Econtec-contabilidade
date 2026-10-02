import React, { useState, useEffect } from 'react';
import './Header.css';
import logoEcontec from "../../assets/logo_econtec.png";
import insta_icon from "../../assets/icons/instagram_icon.png";


const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;
const INSTAGRAM_URL = "https://www.instagram.com/leydsond_/" //instagram econtec

export function Header() {
  // Reponsividade
const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  // efeito Para subir e descer header
  const [escondido, setEscondido] = useState(false);
  const [ultimoScrollY, setUltimoScrollY] = useState(0);

  useEffect(() => {
    const controlarHeader = () => {
      const scrollAtual = window.scrollY;

      if (scrollAtual > ultimoScrollY && scrollAtual > 60) {
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

const navegarPara = (e, idSecao) => {
  e.preventDefault();
  fecharMenu();
  if (idSecao === 'inicio' || idSecao === 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const elemento = document.getElementById(idSecao);

  if (elemento) {
    const posicaoFinal = elemento.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: posicaoFinal,
      behavior: 'smooth'
    });
  }
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
          <a href="#inicio" className="nav-link" onClick={(e) => navegarPara(e, 'inicio')}>Início</a>
          <a href="#sobre" className="nav-link" onClick={(e) => navegarPara(e, 'sobre')}>Sobre</a>
          <a href="#servicos" className="nav-link" onClick={(e) => navegarPara(e, 'servicos')}>Serviços</a>
          <a href="#depoimentos" className="nav-link" onClick={(e) => navegarPara(e, 'depoimentos')}>Depoimentos</a>          
          <a href="#faq" className="nav-link" onClick={(e) => navegarPara(e, 'faq')}>FAQ</a>
        
          {/* Botões formulario e instagram */}
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

            <a href="#formulario" className="btn-fale-conosco">
              Fale Conosco
            </a>
          </div>
        </nav>

        {/* menu hamburguer */}
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