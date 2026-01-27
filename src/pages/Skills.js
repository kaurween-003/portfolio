import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [skillSections, setSkillSections] = useState([]);

  useEffect(() => {
    // Load skills from localStorage (populated by admin)
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
