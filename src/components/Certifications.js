import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Certifications.css';

function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const total = portfolioData.certifications.length;
  const visibleCount = showAll ? total : 3;
  const visibleCerts = portfolioData.certifications.slice(0, visibleCount);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {visibleCerts.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-image-wrap" onClick={() => openModal(cert)}>
                <img src={cert.image} alt={cert.name} className="cert-image" />
                <div className="cert-overlay">
                  <span className="view-text">View Certificate</span>
                </div>
              </div>
              <div className="cert-content">
                <h3>{cert.name}</h3>
                {cert.issuer && <p className="issuer">{cert.issuer}</p>}
                {cert.year && <p className="year">{cert.year}</p>}
              </div>
            </div>
          ))}
        </div>

        {total > 3 && (
          <div className="more-btn-container">
            <button
              className="more-btn"
              onClick={() => setShowAll(prev => !prev)}
              aria-expanded={showAll}
            >
              {showAll ? 'Show Less' : `Show More (${total - 3})`}
            </button>
          </div>
        )}
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <img src={selectedCert.image} alt={selectedCert.name} className="modal-image" />
            <h3>{selectedCert.name}</h3>
            {selectedCert.issuer && <p className="modal-issuer">{selectedCert.issuer}</p>}
            {selectedCert.year && <p className="modal-year">{selectedCert.year}</p>}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
