import React from 'react';
import './Footer.css';

// Imagens e icon
import logo_econtec from '../../assets/logo-econtecf.png'
import icon_instagram from '../../assets/icons/instagram_icon.png'

// Número
const WHATSAPP_ECONTEC = import.meta.env.VITE_Whatsapp_numero;

const INSTAGRAM_URL = "https://www.instagram.com/econtecrn/" //instagram econtec

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

  return (
    <footer className="footer-site" id="contato">
      <div className="footer-container">
        
        {/* Coluna Esquerda */}
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
        <a href="https://deyontecnologia.com.br/" className="footer-developer" target='_blank'>Desenvolvido por <strong>Deyon Tecnologia</strong></a>
      </div>
    </footer>
  );
}