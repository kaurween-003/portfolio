import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import LogoFallback from './LogoFallback';

const CertificationSection = ({ section, sectionIndex, certRef, certVisible }) => {
  const [sectionRef] = useScrollAnimation({ threshold: 0.1 });
  const [imageErrors, setImageErrors] = useState({});

  return (
    <div className="certification-section" ref={sectionRef}>
      <div className="section-header">
        <div className="section-icon">{section.icon}</div>
        <div className="section-info">
          <h2 className="section-title">{section.title}</h2>
          <p className="section-description">{section.description}</p>
        </div>
      </div>
    
      <div className="certifications-grid" ref={certRef}>
        {section.certifications.map((cert, certIndex) => {
          const globalIndex = sectionIndex * 10 + certIndex; // Unique index for error tracking
          return (
            <div 
              key={certIndex} 
              className={`certification-card animated-card slide-up ${certVisible ? 'visible' : ''} stagger-${certIndex + 1}`}
            >
              <div className="cert-logo-section">
                {imageErrors[globalIndex] ? (
                  <LogoFallback company={cert.issuer} className="cert-logo" />
                ) : (
                  <img 
                    src={cert.logo} 
                    alt={cert.logoAlt}
                    className="cert-logo"
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [globalIndex]: true }));
                    }}
                  />
                )}
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <h3>{cert.name}</h3>
                  <span className={`cert-status status-${cert.status}`}>
                    {cert.statusText}
                  </span>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-timeline">
                  <span className="timeline-label">Timeline:</span>
                  <span className="timeline-text">{cert.timeline}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
                
                {cert.certificateUrl && (
                  <div className="cert-actions">
                    <a 
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-certificate-btn"
                    >
                      🔗 View Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificationSection;
