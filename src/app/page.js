import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/Footer/Footer";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
