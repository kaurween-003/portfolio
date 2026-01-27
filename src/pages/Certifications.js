import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Certifications.css';

const Certifications = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [certRef, certVisible] = useScrollAnimation({ threshold: 0.05 });
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Load certifications from localStorage (populated by admin)
    const savedCerts = localStorage.getItem('portfolioCertifications');
    if (savedCerts) {
      setCertifications(JSON.parse(savedCerts));
    }
  }, []);

  return (
    <div className="certifications">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Certifications & Achievements
        </h1>
        
        {certifications.length === 0 && (
          <div className="empty-state" style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.2rem' }}>No certifications added yet. Check back soon!</p>
          </div>
        )}
        
        <div className="certifications-grid" ref={certRef}>
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`certification-card animated-card slide-up ${certVisible ? 'visible' : ''} stagger-${(index % 6) + 1}`}
            >
              {cert.logo && (
                <div className="cert-logo-section">
                  <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                </div>
              )}
              
              <div className="cert-content">
                <div className="cert-header">
                  <h3>{cert.name}</h3>
                  {cert.featured && (
                    <span className="cert-badge">⭐ Featured</span>
                  )}
                </div>
                
                <p className="cert-issuer">{cert.issuer}</p>
                
                <div className="cert-timeline">
                  <span className="timeline-label">📅 Date:</span>
                  <span className="timeline-text">{new Date(cert.date).toLocaleDateString()}</span>
                </div>
                
                {cert.credentialId && (
                  <div className="cert-details">
                    <div className="detail-item">
                      <span className="detail-label">Credential ID:</span>
                      <span className="detail-value">{cert.credentialId}</span>
                    </div>
                  </div>
                )}
                
                <div className="cert-links">
                  {cert.verificationUrl && (
                    <a 
                      href={cert.verificationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-link"
                    >
                      <i className="fas fa-check-circle"></i> Verify
                    </a>
                  )}
                  {cert.certificateUrl && (
                    <a 
                      href={cert.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-link"
                    >
                      <i className="fas fa-certificate"></i> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
