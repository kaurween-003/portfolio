import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="about">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          About Me
        </h1>

        {/* Stats Section - Centered at Top */}
        <section className="about-stats-section" ref={statsRef}>
          <div className={`stat-card animated-card scale-in ${statsVisible ? 'visible' : ''} stagger-1`}>
            <span className="stat-icon">🏆</span>
            <h3>30+</h3>
            <p>Certifications</p>
          </div>
          <div className={`stat-card animated-card scale-in ${statsVisible ? 'visible' : ''} stagger-2`}>
            <span className="stat-icon">💻</span>
            <h3>10+</h3>
            <p>Technologies Mastered</p>
          </div>
          <div className={`stat-card animated-card scale-in ${statsVisible ? 'visible' : ''} stagger-3`}>
            <span className="stat-icon">🚀</span>
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
        </section>

        <section className="about-content" ref={contentRef}>
          <div className={`about-text fade-in ${contentVisible ? 'visible' : ''}`}>
            <h2>Who I Am</h2>
            <p>
            I'm a cybersecurity professional dedicated to safeguarding digital systems and the people who depend on them.  My expertise spans threat hunting, incident response and GRC, and my passion lies in stopping attackers before they strike.  I thrive on defending networks and data while continuously exploring new ways to stay ahead of emerging threats in an increasingly turbulent world.
            </p>
            
            <h3>My Journey</h3>
            <p>
            My path into cybersecurity started with a fascination for how computers and software work.  While earning my Bachelor of Applied Computer Science, I immersed myself in coding and became passionate about how programming languages shape the digital world.  I learned that understanding the languages used to build exploits is essential for analysing digital evidence and discovering how attackers breach systems. Security professionals are advised to master at least one object‑oriented programming language; doing so makes it easier to understand many other languages and the exploits written in them.
            </p>

            <p>Python quickly became my language of choice: its readability makes it easier to understand the intent of code , and its extensive libraries allow security teams to build malware analysis tools, intrusion detection systems and automated scripts.  I also explored Java and other high‑level languages, gaining versatility that helps me adapt to new tools and frameworks.</p>
            
            <p>As my programming skills grew, I realised I could use them not just to build systems but to protect them.  I began studying cybersecurity, completing hands‑on labs and challenges through Try Hack Me, Cisco's Skills for All and virtual internships.  These experiences taught me to monitor networks, respond to incidents and apply my coding knowledge to hunt threats and develop defensive tools.  By combining a solid academic foundation, a love for programming and a passion for safeguarding digital assets, I've prepared myself to meet the extraordinary challenges of securing organisations in today's ever‑evolving cyber landscape.</p>
            <h3>What Drives Me</h3>
            <p>
              I believe in continuous learning and staying up-to-date with the latest technologies. 
              Whether it's building modern web applications, automating infrastructure, or exploring 
              new tools and frameworks, I'm always excited to take on new challenges.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
