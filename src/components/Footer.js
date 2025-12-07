import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import '../styles/Footer.css';

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
};

function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          {socials.map((social) => {
            const IconComponent = iconMap[social.icon];
            return (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <IconComponent />
              </a>
            );
          })}
        </div>
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;