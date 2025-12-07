import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                {edu.university && <p className="affiliation">{edu.university}</p>}
                {edu.board && <p className="affiliation">{edu.board}</p>}
                <p className="year">{edu.year}</p>
                {edu.grade && <p className="grade">Grade: {edu.grade}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;