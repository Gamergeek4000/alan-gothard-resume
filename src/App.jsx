import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ParticlesBackground from './components/ParticlesBackground';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="app-container">
        <Header />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
        <ParticlesBackground />
      </div>
    </BrowserRouter>
  );
}

export default App; 