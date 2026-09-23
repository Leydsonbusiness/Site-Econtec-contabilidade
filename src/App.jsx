import React from 'react';
import './styles/global.css';
import { Header } from './components/header/Header.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/About/About.jsx';
import { Servicos } from './components/servicos/servicos.jsx'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Servicos />
      </main>
    </div>
  );
}

export default App;