import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: skills.frontend,
      color: '#667eea'
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: skills.backend,
      color: '#764ba2'
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: skills.database,
      color: '#f093fb'
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: skills.tools,
      color: '#4facfe'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills & Expertise</h2>
        <div className="skills-grid">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                    data-aos="zoom-in"
                    data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                    style={{ '--skill-color': category.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
