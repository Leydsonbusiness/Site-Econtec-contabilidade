import React from 'react';
import './styles/global.css';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;