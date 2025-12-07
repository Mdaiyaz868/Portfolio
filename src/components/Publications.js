import React from "react";
import { portfolioData } from "../data/portfolioData";
import "../styles/Publications.css";

function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className="publications-container">
          {portfolioData.publications.map((pub, index) => (
            <div
              key={index}
              className="publication-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="publication-image">
                <img src={pub.img} alt={pub.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;
