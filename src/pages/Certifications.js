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
          certificateUrl: '/images/certifications/Credentials - kulweenkaur _ Microsoft Learn.pdf',
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
      certifications: [
        {
          id: 1,
          name: 'Introduction to Cybersecurity',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco1.png',
          date: 'May 15, 2025',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
        {
          id: 2,
          name: 'Networking Basics',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco2.png',
          date: '',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
        {
          id: 3,
          name: 'Networking Devices and Initial Configuration',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco3.png',
          date: '',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
        {
          id: 4,
          name: 'Endpoint Security',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco4.png',
          date: '',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
        {
          id: 5,
          name: 'Network Defense',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco5.png',
          date: '',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
        {
          id: 6,
          name: 'Cyber Threat Management',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco6.png',
          date: '',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
        {
          id: 7,
          name: 'Junior Cyber Security Analyst',
          issuer: 'Cisco Networking Academy',
          logo: '/images/certifications/cisco7.png',
          date: '',
          certificateUrl: '/images/certifications/_certificate_kulweenkaur-infosec-gmail-com_68b654e4-8646-464d-8157-e8e50eb0587e.pdf',
        },
      ]
    },
    {
      id: 'udemy',
      icon: '📚',
      title: 'Udemy Courses',
      description: 'Self-paced online courses for continuous learning and skill development',
      ref: udemyRef,
      visible: udemyVisible,
      certifications: [
        {
          id: 1,
          name: 'Information Security Fundamentals',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy8.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 2,
          name: 'NMAP Matsery',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy9.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 3,
          name: 'Power BI Mastery',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy10.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 4,
          name: 'Mastering Active Directory',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy13.jpg',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 5,
          name: 'Mastering the Complete ServiceNow Administration Course 2026',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy14.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 6,
          name: 'Atlassian Confluence A-Z',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy15.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 7,
          name: 'Endpoint Management Fundamentals',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy16.jpg',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 8,
          name: 'Mastering DNS Configuration & Email Delivery',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy-logo.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 9,
          name: 'Nagios XI Network Monitoring',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy17.jpg',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 10,
          name: 'ISO 27004: Implement ISMS Measurement',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy2.jpg',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 11,
          name: 'ISO 3100O: Risk Management Implementation',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy3.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 12,
          name: 'Implement ISO/IEC 38500: IT Governance',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy4.jpg',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 13,
          name: 'ISO 27001:2022 Lead Auditor',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy5.jpg',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 14,
          name: 'IP Addressing and Subnetting',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy7.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
        {
          id: 15,
          name: 'Microsoft Azure Fundamentals',
          issuer: 'Udemy',
          logo: '/images/certifications/udemy6.png',
          date: 'February 09, 2025',
          certificateUrl: '/images/certifications/Credentials - kulweenkaur_ Information_Security_Fundamentals.pdf',
        },
      ]
    },
    {
      id: 'internships',
      icon: '💼',
      title: 'Virtual Internships',
      description: 'Hands-on virtual experience programs with leading companies via The Forage',
      ref: internRef,
      visible: internVisible,
      certifications: [
        {
          id: 1,
          name: 'Cyber Security Management',
          issuer: 'ANZ Australia',
          logo: '/images/certifications/anz-white.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 2,
          name: 'Global Cyber with Data Privacy',
          issuer: 'DLA Piper',
          logo: '/images/certifications/DLA-piper.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 3,
          name: 'Cybersecurity',
          issuer: 'MasterCard',
          logo: '/images/certifications/mastercard.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 4,
          name: 'Cybersecurity',
          issuer: 'DataCom',
          logo: '/images/certifications/datacom.jpg',
          date: '',
          certificateUrl: '',
        },
        {
          id: 5,
          name: 'Shields Up Cybersecurity',
          issuer: 'AIG',
          logo: '/images/certifications/AIG.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 6,
          name: 'Cybersecurity',
          issuer: 'Clifford Chance',
          logo: '/images/certifications/Clifford_Chance.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 7,
          name: 'Cybersecurity',
          issuer: 'Telstra',
          logo: '/images/certifications/telstra.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 8,
          name: 'Cybersecurity Analyst',
          issuer: 'TATA Group',
          logo: '/images/certifications/TATA.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 9,
          name: 'Cyber',
          issuer: 'Deloitte Australia',
          logo: '/images/certifications/dello',
          date: '',
          certificateUrl: '',
        },
        {
          id: 10,
          name: 'Introduction to CyberSecurity',
          issuer: 'Commonwealth Bank',
          logo: '/images/certifications/commonwealth.png',
          date: '',
          certificateUrl: '',
        },
        {
          id: 11,
          name: 'Cybersecurity Consulting',
          issuer: 'PWC',
          logo: '/images/certifications/pwc.png',
          date: '',
          certificateUrl: '',
        },
      ]
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
