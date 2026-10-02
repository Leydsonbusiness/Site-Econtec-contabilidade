import React from 'react';
import './styles/global.css';
import { Header } from './components/header/Header.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/About/About.jsx';
import { Services } from "./components/servicos/Servicos.jsx";
import { Testimonials } from './components/Testimonials/Testimonials.jsx';
import { GoogleReviews } from './components/GoogleReviews/GoogleReviews.jsx';
import { Faq } from './components/Faq/Faq.jsx';
import { Footer } from './components/Footer/Footer.jsx';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <GoogleReviews />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;