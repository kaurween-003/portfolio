import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    // Load blogs from localStorage (populated by admin)
    const savedBlogs = localStorage.getItem('portfolioBlogs');
    if (savedBlogs) {
      setBlogPosts(JSON.parse(savedBlogs));
    }
  }, []);

  const handleReadMore = (post) => {
    setSelectedBlog(post);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'blog-modal-overlay') {
      handleCloseModal();
    }
  };

  return (
    <div className="blog">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        
        {blogPosts.length === 0 && (
          <div className="empty-state" style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.2rem' }}>No blog posts yet. Check back soon for new content!</p>
          </div>
        )}
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-header">
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {post.featured && <span className="featured-badge">⭐ Featured</span>}
                  {post.tags && post.tags.split(',')[0] && (
                    <span className="blog-category">{post.tags.split(',')[0].trim()}</span>
                  )}
                </div>
                <span className="blog-date" style={{ whiteSpace: 'nowrap' }}>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <span className="read-time">5 min read</span>
                <button 
                  className="read-more"
                  onClick={() => handleReadMore(post)}
                >
                  Read More
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
                    <span className="blog-date">
                      📅 {new Date(selectedBlog.createdAt).toLocaleDateString()}
                    </span>
                    {selectedBlog.tags && (
                      <span className="blog-category">
                        🏷️ {selectedBlog.tags.split(',')[0].trim()}
                      </span>
                    )}
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
                <p><strong>Excerpt:</strong> {selectedBlog.excerpt}</p>
                
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0' }}>
                  <h3 style={{ marginBottom: '1rem' }}>Full Content:</h3>
                  <p>{selectedBlog.content}</p>
                </div>

                {selectedBlog.tags && (
                  <div className="blog-modal-tags">
                    {selectedBlog.tags.split(',').map((tag, index) => (
                      <span key={index} className="tag">{tag.trim()}</span>
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
