import React from 'react';
import './Footer.css';

// Imagens e icon
import logo_econtec from '../../assets/logo-econtecf.png'
import icon_instagram from '../../assets/icons/instagram_icon.png'

// Números
const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;
const WHATSAPP_DESENVOLVEDOR = import.meta.env.VITE_Whatsapp_developer;

export function Footer() {
  const anoAtual = new Date().getFullYear();

  const Whatsappecontec = (e) => {
    e.preventDefault();
    if (WHATSAPP_ECONTEC) {
      window.open(
        `https://wa.me/${WHATSAPP_ECONTEC}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de tirar uma dúvida.")}`, 
        '_blank'
      );
    } else {
      console.warn("Número de WhatsApp não configurado na variável de ambiente");
    }
  };

  const Whatsappdesenvolvedor = (e) => {
    e.preventDefault();
    if (WHATSAPP_DESENVOLVEDOR) {
      window.open(
        `https://wa.me/${WHATSAPP_DESENVOLVEDOR}?text=${encodeURIComponent("Olá! Conheci seu trabalho através do site do Econtec e gostaria de solicitar um orçamento para o desenvolvimento de um site.")}`, 
        '_blank'
      );
    } else {
      console.warn("Número de WhatsApp não configurado na variável de ambiente");
    }
  };

  const INSTAGRAM_URL = "https://www.instagram.com/econtecrn/" //instagram econtec

  return (
    <footer className="footer-site" id="contato">
      <div className="footer-container">
        
        {/* Coluna Esquerda (Fica visível só no Desktop) */}
        <div className="footer-coluna footer-esquerda">
          <h3 className="footer-brand-title">Econtec Contabilidade</h3>
          <p className="footer-brand-slogan">
            Contabilizando o seu sucesso com transparência e agilidade.
          </p>
          <div className='redes-sociais'>
              <img src={icon_instagram} alt="Instagram da empresa"/>
              <a href= {INSTAGRAM_URL} target='_blank'>@econteccontabilidade</a>
          </div>
        </div>

        <div className="footer-divisor"></div>

        {/* Coluna Centro */}
        <div className="footer-coluna footer-centro">
          <div className="footer-logo-wrapper">
            <img src={logo_econtec} alt="Econtec Contabilidade" className="footer-logo-img"/>
          </div>
          <p className="footer-copyright">
            © {anoAtual} Econtec Contabilidade. Todos os direitos reservados.
          </p>

          {/* Instagram duplicado que aparecerá apenas no MOBILE abaixo do copyright */}
          <div className='redes-sociais redes-sociais-mobile'>
              <img src={icon_instagram} alt="Instagram da empresa"/>
              <a href={INSTAGRAM_URL} target='_blank'>@econteccontabilidade</a>
          </div>
        </div>

        <div className="footer-divisor"></div>

        {/* Coluna Direita */}
        <div className="footer-coluna footer-direita">
          <h4 className="footer-info-title">Visite nosso Escritório:</h4>
          <p className="footer-endereco">
            R. Raimundo Bezerra, 178 - Centro, Cruzeta - RN
          </p>
          
          <div className="footer-horarios">
            <p>
              Segunda a sexta: 07h - 11h30 e das 14h - 17:30
            </p>
          </div>

          <a href="#" onClick={Whatsappecontec} className="footer-link-whatsapp">
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-line"></div>
        <a href="#contato" onClick={Whatsappdesenvolvedor} className="footer-developer">Desenvolvido por <strong>Leydson</strong></a>
      </div>
    </footer>
  );
}