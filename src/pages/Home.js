import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="home">
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className={`hero-text slide-left ${heroVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              Hi, I'm <span className="signature-style">Kulween Kaur</span>
            </h1>
            <p className="hero-subtitle">
              Cybersecurity Analyst | Incident Responder | GRC & Threat‑Detection Professional
            </p>
            <p className="hero-description">
            I specialise in protecting organisations from cyber threats rather than attacking them. My work focuses on defending networks and systems, monitoring for suspicious activity and responding swiftly to incidents. With a commitment to loyalty, clear communication and a relentless pursuit of security excellence, I help organisations build resilience while enabling innovation. I believe that strong security allows businesses to thrive, and I’m dedicated to safeguarding digital assets in today’s fast‑paced world.
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="/contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className={`hero-image slide-right ${heroVisible ? 'visible' : ''}`}>
            <div className="profile-card float-animation">
              <div className="profile-avatar">
                <img 
                  src="/images/profile.png" 
                  alt="Profile" 
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h3>Kulween Kaur</h3>
                <p>Cyber Defence Analyst & Threat Hunter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" ref={featuresRef}>
        <div className="container">
          <h2 className={`section-title fade-in ${featuresVisible ? 'visible' : ''}`}>What I Do</h2>
          
          <div className="features-grid">
            <div className={`feature-card animated-card slide-up stagger-1 ${featuresVisible ? 'visible' : ''}`}>
              <div className="feature-icon rotate-on-hover">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3>Monitoring & Detecting Intrusions</h3>
              <p>I help in continuously watch networks, systems and applications for unusual activity, using tools like SIEMs, IDS/IPS and EDR to detect and block threats in real time</p>
            </div>
            <div className={`feature-card animated-card slide-up stagger-2 ${featuresVisible ? 'visible' : ''}`}>
              <div className="feature-icon rotate-on-hover">
                <i className="fas fa-clipboard-check"></i>
              </div>
              <h3>Enforcing Policies and Compliance</h3>
              <p>I help create, implement and audit security policies to meet industry standards and regulatory requirements </p>
            </div>
            <div className={`feature-card animated-card slide-up stagger-3 ${featuresVisible ? 'visible' : ''}`}>
              <div className="feature-icon rotate-on-hover">
                <i className="fas fa-chalkboard-user"></i>
              </div>
              <h3>Building Security Awareness</h3>
              <p>Because people are as important as technology, I train colleagues on phishing, social engineering and security best practices, raising the organisation's security culture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" ref={ctaRef}>
        <div className={`container scale-in ${ctaVisible ? 'visible' : ''}`}>
          <h2>Ready to Secure Your Organisation?</h2>
          <p>Let’s collaborate to fortify your systems and safeguard your digital assets.</p>
          <a href="/contact" className="btn btn-primary pulse-animation">Let's Talk</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
