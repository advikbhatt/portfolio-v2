'use client';
import { useState } from 'react';
import Loader from './components/Loader/Loader';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Imagegrid from './components/Imagegrid/Imagegrid';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

export default function HomePage() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {/* Render main content always */}
      <Hero />
      <Projects />
      <About />
      <Imagegrid />
      <Skills />
      <Footer />

      {/* Loader overlays on top */}
      {!loadingDone && (
        <Loader onComplete={() => setLoadingDone(true)} />
      )}
    </>
  );
}
