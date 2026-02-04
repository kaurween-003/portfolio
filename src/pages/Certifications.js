import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Certifications.css';

const Certifications = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [profRef, profVisible] = useScrollAnimation({ threshold: 0.05 });
  const [ciscoRef, ciscoVisible] = useScrollAnimation({ threshold: 0.05 });
  const [udemyRef, udemyVisible] = useScrollAnimation({ threshold: 0.05 });
  const [internRef, internVisible] = useScrollAnimation({ threshold: 0.05 });

  const certificationSections = [
    {
      id: 'professional',
      icon: '🏆',
      title: 'Professional Certifications',
      description: 'Industry-recognized certifications from leading technology organizations',
      ref: profRef,
      visible: profVisible,
      certifications: [
        {
          id: 1,
          name: 'Google Cybersecurity Professional Certificate',
          issuer: 'Google',
          logo: '/images/certifications/google-logo.webp',
          date: '',
          credentialId: '',
          certificateUrl: '',
        },
        {
          id: 2,
          name: 'Security+ CompTIA',
          issuer: 'CompTIA',
          logo: '/images/certifications/comptia-logo.png',
          date: '',
          credentialId: '',
          certificateUrl: '',
        },
        {
          id: 3,
          name: 'Microsoft SC-900',
          issuer: 'Microsoft',
          logo: '/images/certifications/microsoft-logo.jpg',
          date: 'November 19, 2023',
          credentialId: 'C4FE2E07870962DC',
          certificateUrl: '',
        },
      ]
    },
    {
      id: 'cisco',
      icon: '🌐',
      title: 'Cisco Skills for All Courses',
      description: 'Networking and security courses from Cisco\'s learning platform',
      ref: ciscoRef,
      visible: ciscoVisible,
      certifications: []
    },
    {
      id: 'udemy',
      icon: '📚',
      title: 'Udemy Courses',
      description: 'Self-paced online courses for continuous learning and skill development',
      ref: udemyRef,
      visible: udemyVisible,
      certifications: []
    },
    {
      id: 'internships',
      icon: '💼',
      title: 'Virtual Internships',
      description: 'Hands-on virtual experience programs with leading companies',
      ref: internRef,
      visible: internVisible,
      certifications: []
    }
  ];

  return (
    <div className="certifications">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Certifications & Achievements
        </h1>
        
        <p className="page-subtitle">
          A collection of professional certifications, courses, and learning achievements
        </p>

        {certificationSections.map((section) => (
          <section key={section.id} className="certification-section" ref={section.ref}>
            <div className="section-header">
              <div className="section-icon">{section.icon}</div>
              <div className="section-info">
                <div className="section-title-container">
                  <h2 className="section-title">{section.title}</h2>
                  <span className="section-counter">{section.certifications.length}</span>
                </div>
                <p className="section-description">{section.description}</p>
              </div>
            </div>
            
            {section.certifications.length === 0 ? (
              <div className="coming-soon">
                <p>🚧 Certifications coming soon...</p>
              </div>
            ) : (
              <div className="certifications-grid">
                {section.certifications.map((cert, index) => (
                  <div 
                    key={cert.id} 
                    className={`certification-card animated-card slide-up ${section.visible ? 'visible' : ''} stagger-${(index % 6) + 1}`}
                  >
                    {cert.logo && (
                      <div className="cert-logo-section">
                        <img src={cert.logo} alt={cert.issuer} className="cert-logo" />
                      </div>
                    )}
                    
                    <div className="cert-content">
                      <div className="cert-header">
                        <h3>{cert.name}</h3>
                      </div>
                      
                      <p className="cert-issuer">{cert.issuer}</p>
                      
                      {cert.date && (
                        <div className="cert-timeline">
                          <span className="timeline-label">📅 Date:</span>
                          <span className="timeline-text">{cert.date}</span>
                        </div>
                      )}
                      
                      {cert.credentialId && (
                        <div className="cert-details">
                          <div className="detail-item">
                            <span className="detail-label">Credential ID:</span>
                            <span className="detail-value">{cert.credentialId}</span>
                          </div>
                        </div>
                      )}
                      
                      {cert.certificateUrl && (
                        <div className="cert-actions">
                          <a 
                            href={cert.certificateUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="view-certificate-btn"
                          >
                            📜 View Certificate
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
