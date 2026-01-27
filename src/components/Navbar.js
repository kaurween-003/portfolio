import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarTheme, setNavbarTheme] = useState(() => {
    // Set initial theme based on current page
    return window.location.pathname === '/' ? 'black' : 'white';
  });
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle route changes and set initial theme
  useEffect(() => {
    if (location.pathname === '/') {
      setNavbarTheme('black');
    } else {
      setNavbarTheme('white');
    }
  }, [location.pathname]);

  useEffect(() => {
    const detectSectionTheme = () => {
      const scrollTop = window.scrollY;
      const navbarHeight = 80;
      
      // Get all sections on the page
      const sections = document.querySelectorAll('section, .hero, .features, .cta, .about, .skills, .projects, .blog, .homelab, .contact, .certifications');
      
      let currentSection = null;
      
      // Find which section is currently at the top of the viewport
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollTop + navbarHeight >= sectionTop && scrollTop + navbarHeight < sectionBottom) {
          currentSection = section;
          break;
        }
      }
      
      // If no section found, use the first visible section
      if (!currentSection && sections.length > 0) {
        currentSection = sections[0];
      }
      
      if (currentSection) {
        // Get computed styles of the current section
        const styles = window.getComputedStyle(currentSection);
        const backgroundColor = styles.backgroundColor;
        
        // Determine theme based on section background
        if (scrollTop === 0 && location.pathname === '/') {
          // At the very top of home page - black navbar to match hero
          setNavbarTheme('black');
        } else if (backgroundColor.includes('rgb(0, 0, 0)') || backgroundColor.includes('#000') || currentSection.classList.contains('hero') || currentSection.classList.contains('cta')) {
          // Black background sections
          setNavbarTheme('black');
        } else if (backgroundColor.includes('rgb(255, 255, 255)') || backgroundColor.includes('#fff') || backgroundColor.includes('248, 249, 250') || currentSection.classList.contains('features') || currentSection.classList.contains('skills') || currentSection.classList.contains('projects') || currentSection.classList.contains('blog') || currentSection.classList.contains('homelab') || currentSection.classList.contains('contact') || currentSection.classList.contains('certifications')) {
          // White or light background sections
          setNavbarTheme('white');
        } else {
          // Default based on page
          setNavbarTheme(location.pathname === '/' ? 'transparent' : 'white');
        }
      }
    };

    const handleScroll = () => {
      detectSectionTheme();
    };

    const handleResize = () => {
      detectSectionTheme();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    detectSectionTheme(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

  return (
    <nav className={`navbar navbar-${navbarTheme}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text signature-style">Kulween Kaur</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/skills" 
            className={`navbar-link ${isActive('/skills') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link 
            to="/certifications" 
            className={`navbar-link ${isActive('/certifications') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Certifications
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className={`navbar-link ${isActive('/blog') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/homelab" 
            className={`navbar-link ${isActive('/homelab') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            HomeLab
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
