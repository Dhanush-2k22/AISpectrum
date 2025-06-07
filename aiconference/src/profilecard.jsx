import React from 'react';

const ProfileCard = ({ name, designation, organization, photoUrl }) => {
  return (
    <div style={{
      background: '#0d58a9',
      color: '#FFFFFF',
      borderRadius: '14px',
      padding: '20px',
      width: '100%',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      height: '100%',
      minHeight: '400px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      const img = e.currentTarget.querySelector('img');
      if (img) {
        img.style.filter = 'saturate(150%)';
      }
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      const img = e.currentTarget.querySelector('img');
      if (img) {
        img.style.filter = 'saturate(75%)';
      }
    }}
    >
      {photoUrl && (
        <div style={{
          width: '220px',
          height: '220px',
          borderRadius: '63%',
          background: 'linear-gradient(135deg, #E5E4E2, #BCC6CC)',
          padding: '3px',
          marginBottom: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden'
        }}>
          <img 
            src={photoUrl} 
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              filter: 'saturate(75%)',
              transition: 'filter 0.5s ease'
            }}
          />
        </div>
      )}
      <h2 style={{
        margin: '9px 0 20px 0',
        fontFamily: '"Playfair Display", serif',
        fontWeight: '700',
        letterSpacing: '0.5px',
        color: '#D9A353',
        fontSize: '1.8em'
      }}>{name}</h2>
      <h5 style={{ 
        margin: '4.5px 0', 
        fontSize: '1.1em',
        fontFamily: '"Inter", sans-serif',
        fontWeight: '500',
        letterSpacing: '0.3px'
      }}>{designation}</h5>
      <h6 style={{ 
        margin: '10px 0 0 0', 
        fontSize: '1em',
        fontFamily: '"Inter", sans-serif',
        fontWeight: '500',
        letterSpacing: '0.3px'
      }}>{organization}</h6>
    </div>
  );
};

export default ProfileCard;
