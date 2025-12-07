import React from 'react';
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa';
import '../styles/About.css';

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Full Stack Expertise',
      description: 'Proficient in modern technologies including PHP, React.js, Laravel, JavaScript, and C++'
    },
    {
      icon: <FaRocket />,
      title: 'Project Leadership',
      description: 'Leading API integrations and website development initiatives at Make My Bharat Yatra'
    },
    {
      icon: <FaUsers />,
      title: 'Team Management',
      description: 'Mentoring teams and driving collaborative development environments'
    },
    {
      icon: <FaAward />,
      title: 'Certified Professional',
      description: 'IBM Full Stack Development certified with published research in engineering journals'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-text" data-aos="fade-up" data-aos-delay="200">
            <p className="about-intro">
              I am a results-driven Full Stack Developer with a Master's degree in Computer Application from Lovely Professional University. I specialize in creating robust, scalable web applications using modern technologies including PHP, React.js, Laravel, JavaScript, and C++.
            </p>
            <p>
              Currently serving as a Backend Developer and Team Leader at Make My Bharat Yatra, I lead API integrations for travel services, manage IT infrastructure, and drive website development initiatives that enhance user experience and operational efficiency.
            </p>
            <p>
              My project portfolio includes developing an e-commerce platform for automobile parts and an interactive online quiz system, demonstrating my ability to deliver end-to-end solutions. I have published research in the International Journal of Scientific Research in Engineering & Management and hold IBM certification in Full Stack Development.
            </p>
            <p>
              I thrive in collaborative environments where I can mentor teams, implement innovative technical solutions, and create seamless digital experiences that drive business growth and customer satisfaction.
            </p>
          </div>

          <div className="about-highlights" data-aos="fade-up" data-aos-delay="400">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="highlight-card"
                data-aos="zoom-in"
                data-aos-delay={600 + index * 100}
              >
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
