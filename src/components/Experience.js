import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className="duration">{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;