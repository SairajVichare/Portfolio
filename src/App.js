import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';
import './styles/projects-fix.css';

function App() {
  return (
    <div className="App">
      <div className="bg-pattern"></div>
      <Sidebar />
      <motion.div 
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;