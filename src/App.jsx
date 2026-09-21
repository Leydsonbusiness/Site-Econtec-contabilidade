import React from 'react';
import './styles/global.css';
import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/hero/Hero.jsx';
import { About } from './components/About/About.jsx';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;