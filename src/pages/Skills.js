import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [expertiseRef, expertiseVisible] = useScrollAnimation({ threshold: 0.1 });
  const [skillSections, setSkillSections] = useState([]);

  const functionalExpertise = [
    { icon: '📊', skill: 'Log Monitoring & Triage' },
    { icon: '🚨', skill: 'Incident Management' },
    { icon: '🖥️', skill: 'Endpoint Security' },
    { icon: '📋', skill: 'Project Management & Leadership' },
    { icon: '🎯', skill: 'MITRE ATT&CK' },
    { icon: '🌐', skill: 'Network Security' },
    { icon: '☁️', skill: 'Cloud Security' },
    { icon: '📈', skill: 'Data-Driven Stories & Reporting' },
    { icon: '🔄', skill: 'Ticket Handling & Workflows' },
    { icon: '📧', skill: 'Email Security' },
    { icon: '🔍', skill: 'Threat Intelligence' },
    { icon: '👥', skill: 'Team Leadership' },
    { icon: '✅', skill: 'Alert Accuracy & Validation' },
    { icon: '🦠', skill: 'Malware Analysis' },
    { icon: '🔬', skill: 'Root Cause Analysis' },
  ];

  useEffect(() => {
    // Load skills from localStorage
    const savedSkills = localStorage.getItem('portfolioSkills');
    if (savedSkills) {
      setSkillSections(JSON.parse(savedSkills));
    }
  }, []);

  return (
    <div className="skills">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Skills & Expertise
        </h1>
        
        {skillSections.length === 0 && (
          <div className="empty-state" style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.2rem' }}>No skills added yet. Check back soon!</p>
          </div>
        )}
        
        {/* Functional Expertise Section */}
        <section className="functional-expertise-section" ref={expertiseRef}>
          <div className="section-header">
            <div className="section-icon">💼</div>
            <div className="section-info">
              <h2 className="section-title">Functional Expertise</h2>
              <p className="section-description">Core competencies and specialized skills in cybersecurity operations</p>
            </div>
          </div>
          <div className="expertise-grid">
            {functionalExpertise.map((item, index) => (
              <div 
                key={index} 
                className={`expertise-card animated-card scale-in ${expertiseVisible ? 'visible' : ''} stagger-${(index % 6) + 1}`}
              >
                <span className="expertise-icon">{item.icon}</span>
                <span className="expertise-skill">{item.skill}</span>
              </div>
            ))}
          </div>
        </section>

        {skillSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="skill-section">
            <div className="section-header">
              <div className="section-icon">{section.icon}</div>
              <div className="section-info">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>
            </div>
            
            <div className="skills-grid" ref={skillsRef}>
              {section.categories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className={`skill-category animated-card slide-up ${skillsVisible ? 'visible' : ''} stagger-${categoryIndex + 1}`}
                >
                  <h3 className="category-title">{category.title}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
