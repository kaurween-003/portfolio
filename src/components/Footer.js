import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="signature-style">Kulween Kaur</h3>
            <p>Defending networks, monitoring threats and sharing my professional journey in cybersecurity.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/skills">Skills</a></li>
              <li><a href="/certifications">Certifications</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github-link">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin-link">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="social-link tryhackme-link">
                <img src="/images/tryhackme-logo.png" alt="TryHackMe" className="tryhackme-icon" />
                TryHackMe
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Kulween Kaur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
