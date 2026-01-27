import React, { useState, useEffect } from 'react';
import './HomeLab.css';

const HomeLab = () => {
  const [homelabItems, setHomelabItems] = useState([]);

  useEffect(() => {
    // Load homelab items from localStorage (populated by admin)
    const savedItems = localStorage.getItem('portfolioHomelab');
    if (savedItems) {
      setHomelabItems(JSON.parse(savedItems));
    }
  }, []);

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: { bg: '#28a745', text: '🟢 Active' },
      maintenance: { bg: '#ffc107', text: '🟡 Maintenance' },
      inactive: { bg: '#dc3545', text: '🔴 Inactive' }
    };
    
    const style = statusStyles[status.toLowerCase()] || statusStyles.active;
    return (
      <span 
        className="status" 
        style={{ backgroundColor: style.bg, color: 'white', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '0.85rem' }}
      >
        {style.text}
      </span>
    );
  };

  return (
    <div className="homelab">
      <div className="container">
        <h1 className="page-title">Home Lab</h1>
        
        <div className="lab-intro">
          <p>My home lab environment where I experiment with various technologies and learn new skills.</p>
        </div>
        
        {homelabItems.length === 0 && (
          <div className="empty-state" style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: '#666'
          }}>
            <p style={{ fontSize: '1.2rem' }}>No homelab equipment added yet. Check back soon!</p>
          </div>
        )}
        
        <div className="lab-grid">
          {homelabItems.map((item, index) => (
            <div key={item.id} className="lab-card">
              <div className="lab-header">
                <h3>{item.name}</h3>
                <div className="status-badge-container">
                  {item.featured && <span className="featured-badge">⭐</span>}
                  {getStatusBadge(item.status)}
                </div>
              </div>
              <div className="lab-type">
                <strong>Type:</strong> {item.type}
              </div>
              <p className="lab-description">{item.purpose}</p>
              <div className="lab-specs">
                <strong>Specifications:</strong> {item.specifications}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeLab;
