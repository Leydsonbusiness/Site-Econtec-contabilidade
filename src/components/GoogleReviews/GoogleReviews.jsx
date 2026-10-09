import React, { useEffect } from 'react';
import './GoogleReviews.css';

export function GoogleReviews() {
  useEffect(() => {
    // Verifica se o script do Elfsight já existe para não duplicar na página
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="google-reviews">
      <div className="google-reviews-container">
        <div className="google-reviews-header">
          <h2 className="reviews-titulo">
            Avaliações do Econtec no <span className='destacar-reviews'>Google</span>
          </h2>
          <p className="reviews-subtitulo">
            Confira a opinião em tempo real dos nossos clientes no perfil oficial do Google Reviews.
          </p>
        </div>
        
        {/* CONTAINER DO WIDGET ELFSIGHT */}
        <div className="elfsight-widget-wrapper">
          <div 
            className="elfsight-app-33210a1f-cbcc-4058-9602-cbc66b60025b" 
            data-elfsight-app-lazy 
          />
        </div>
      </div>
    </section>
  );
}