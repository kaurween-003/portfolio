import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  return (
    <div className="projects">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          My Projects
        </h1>
        
        {projects.length === 0 && (
          <div className="empty-state" style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.2rem' }}>No projects added yet. Check back soon!</p>
          </div>
        )}
        
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card animated-card slide-up ${projectsVisible ? 'visible' : ''} stagger-${(index % 6) + 1}`}
            >
              <div className="project-image">
                <span className="project-icon rotate-on-hover">
                  {project.image || '🚀'}
                </span>
                {project.featured && (
                  <span className="featured-badge" style={{ position: 'absolute', top: '1rem', right: '1rem' }}>⭐ Featured</span>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.split(',').map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech.trim()}</span>
                  ))}
                </div>
                {(project.githubUrl || project.liveUrl) && (
                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
