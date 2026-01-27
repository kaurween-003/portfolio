import React from 'react';

const LogoFallback = ({ company, className }) => {
  const getCompanyInitials = (companyName) => {
    return companyName
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getCompanyColor = (company) => {
    const colors = {
      'Microsoft': '#0078d4',
      'ISC2': '#003366',
      'Google': '#4285f4',
      'CompTIA': '#c8102e'
    };
    return colors[company] || '#E0A15D';
  };

  const initials = getCompanyInitials(company);
  const color = getCompanyColor(company);

  return (
    <div 
      className={`logo-fallback ${className}`}
      style={{
        width: '180px',
        height: '120px',
        backgroundColor: color,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}
    >
      {initials}
    </div>
  );
};

export default LogoFallback;
