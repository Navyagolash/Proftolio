import React from 'react';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
