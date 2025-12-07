
import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Testimonials.css';

function Testimonials() {
  // Duplicate the testimonials for seamless infinite loop
  const duplicatedTestimonials = [...portfolioData.testimonials, ...portfolioData.testimonials];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Testimonials</h2>
        <div className="testimonial-carousel">
          {duplicatedTestimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.img}
              alt={`Testimonial ${index + 1}`}
              className="testimonial-image"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;