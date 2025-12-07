import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaCode, FaLaptopCode, FaDatabase, FaGamepad, FaBrain, FaRobot } from 'react-icons/fa';
import '../styles/Projects.css';

function Projects() {
  const projectIcons = [FaCode, FaLaptopCode, FaDatabase, FaGamepad, FaBrain, FaRobot];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-icon">
                  <IconComponent />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;