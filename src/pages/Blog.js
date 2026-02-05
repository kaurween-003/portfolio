import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Blog.css';

const Blog = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.1 });
  const [blogRef, blogVisible] = useScrollAnimation({ threshold: 0.05 });
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Add your blog posts here - copy this template for new posts
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started in Cybersecurity: A Beginner\'s Guide',
      excerpt: 'An introduction to the cybersecurity field, covering essential skills, certifications, and resources for those looking to break into the industry.',
      content: `
        Cybersecurity is one of the fastest-growing fields in technology, and for good reason. 
        With cyber threats becoming increasingly sophisticated, organizations need skilled professionals 
        to protect their digital assets.

        In this post, I'll share my journey into cybersecurity and provide practical advice for 
        beginners looking to enter this exciting field.

        **Key Areas to Focus On:**
        - Network Security Fundamentals
        - Operating Systems (Windows & Linux)
        - Security Tools and Technologies
        - Threat Intelligence and Analysis
        - Incident Response

        **Recommended Certifications:**
        - CompTIA Security+
        - Google Cybersecurity Professional Certificate
        - Cisco CyberOps Associate

        **Hands-on Practice:**
        Platforms like TryHackMe and Hack The Box offer excellent hands-on labs to develop 
        practical skills in a safe environment.

        Stay curious, keep learning, and don't be afraid to break things (in a lab environment)!
      `,
      tags: ['Cybersecurity', 'Career', 'Beginners'],
      date: 'February 4, 2026',
      readTime: '5 min read',
      featured: true,
    },
    // Copy the template above to add more blog posts
    // {
    //   id: 2,
    //   title: 'Your Next Blog Title',
    //   excerpt: 'A short description of what the blog post is about...',
    //   content: `Your full blog content here...`,
    //   tags: ['Tag1', 'Tag2'],
    //   date: 'Month Day, Year',
    //   readTime: 'X min read',
    //   featured: false,
    // },
  ];

  const handleReadMore = (post) => {
    setSelectedBlog(post);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'blog-modal-overlay') {
      handleCloseModal();
    }
  };

  return (
    <div className="blog">
      <div className="container">
        <h1 
          ref={titleRef}
          className={`page-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Blog
        </h1>
        
        <p className="page-subtitle">
          Insights, tutorials, and thoughts on cybersecurity and technology
        </p>
        
        <div className="blog-grid" ref={blogRef}>
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`blog-card animated-card slide-up ${blogVisible ? 'visible' : ''} stagger-${(index % 6) + 1}`}
            >
              <div className="blog-header">
                <div className="blog-tags-container">
                  {post.featured && <span className="featured-badge">⭐ Featured</span>}
                  {post.tags[0] && (
                    <span className="blog-category">{post.tags[0]}</span>
                  )}
                </div>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="read-time">📖 {post.readTime}</span>
                <button 
                  className="read-more"
                  onClick={() => handleReadMore(post)}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div className="blog-modal-overlay" onClick={handleOverlayClick}>
            <div className="blog-modal">
              <div className="blog-modal-header">
                <div>
                  <h2 className="blog-modal-title">{selectedBlog.title}</h2>
                  <div className="blog-modal-meta">
                    {selectedBlog.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
                    <span className="blog-date">📅 {selectedBlog.date}</span>
                    <span className="read-time">📖 {selectedBlog.readTime}</span>
                  </div>
                </div>
                <button 
                  className="blog-modal-close" 
                  onClick={handleCloseModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              
              <div className="blog-modal-content">
                <div className="blog-full-content">
                  {selectedBlog.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index}>{paragraph.trim()}</p>
                    )
                  ))}
                </div>

                {selectedBlog.tags && (
                  <div className="blog-modal-tags">
                    {selectedBlog.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
