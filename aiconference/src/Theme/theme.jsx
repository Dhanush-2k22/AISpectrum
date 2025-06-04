import React from 'react';

const ThemeSection = () => {
  return (
    <><h2 style={{
          fontFamily: 'Libre Baskerville, Georgia, serif',
          fontSize: '2em',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px',
          marginTop: '0',
          color: '#0d58a9',

          
      }}>THEME</h2>
         <div
            style={{
              width: '100px',
              height: '4px',
              background: '#ffdd00',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          />
      <section style={{
        marginBottom: '80px', 
        background: 'rgb(255, 255, 255)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
              <p style={{
                  fontFamily: 'Libre Baskerville, Georgia, serif',
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  textAlign: 'center',
                  marginBottom: '25px',
                  color:'#ffdd00'
                  
              }}>
                  "EPIQ AI: Shaping a Responsible and Transformative Future"
              </p>
              <p style={{
                  fontSize: '1.1em',
                  marginTop: '15px',
                  lineHeight: '1.6',
                  maxWidth: '900px',
                  margin: '0 auto',
                  textAlign: 'justify-center',
                  textJustify: 'inter-word',
                  color:'#475569',
              }}>
                  AI is revolutionizing industries, research, and society, but it must be ethical, progressive, innovative, and of high quality to maximize its potential responsibly. EPIQ AI 2025 brings together researchers, industry experts, policymakers, and innovators to shape a future where AI is trustworthy, impactful, and sustainable.
              </p>
          </section></>
  );
};

export default ThemeSection;