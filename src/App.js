
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials'; // Added
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Increased for smoother animations
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Experience />
      <Publications />
      <Projects />
      <Testimonials /> {/* Added */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;