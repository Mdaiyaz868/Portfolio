
import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaDownload } from 'react-icons/fa'; 
import '../styles/Hero.css';

function Hero() {
  const { personal } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const [displayedName, setDisplayedName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect for name
  useEffect(() => {
    if (nameIndex < personal.name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(prev => prev + personal.name[nameIndex]);
        setNameIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Start cursor blinking after typing is complete
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [nameIndex, personal.name]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>
     
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="profile-container">
          <div className="profile-img-wrapper">
            <img src="/images/image.png" alt="Profile" className="profile-img" />
            <div className="profile-ring"></div>
          </div>
        </div>
       
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text typing-container">
            {displayedName}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </span>
        </h1>
       
        <h2 className="hero-subtitle">{personal.title}</h2>
       
        <p className="hero-bio">{personal.bio}</p>
       
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            <span>Contact Me</span>
            <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
         
          <button
            className="btn btn-secondary"
            onClick={() => window.open('/cv.docx')}
          >
            <FaDownload className="btn-icon" />
            <span>Download CV</span>
          </button>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll Down</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;