import React from 'react';
import './styles/global.css';
import { Header } from './components/header/Header.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/About/About.jsx';
import { Services } from "./components/servicos/Servicos.jsx";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;