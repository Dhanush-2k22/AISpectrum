import React from 'react';
import { colors, typography } from '../styles/commonStyles';

const ThemeSection = () => {
  return (
    <>
      <section style={{
        marginBottom: '80px', 
        background: 'rgb(255, 255, 255)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        maxWidth: '800px',
        margin: '60px auto 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{
          fontFamily: typography.heading.fontFamily,
          fontSize: '2.5em',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '40px',
          marginTop: '0',
          color: colors.blue,
          position: 'relative',
        }}>
          THEME
          <div style={{
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100px',
            height: '4px',
            background: colors.yellow,
            borderRadius: '2px',
          }} />
        </h2>
        <p style={{
          fontFamily: typography.heading.fontFamily,
          fontSize: '1.2em',
          fontWeight: 'bold',
          marginTop: '10px',
          textAlign: 'center',
          marginBottom: '25px',
          color: colors.blue
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
          color: '#475569',
        }}>
          AI is revolutionizing industries, research, and society, but it must be ethical, progressive, innovative, and of high quality to maximize its potential responsibly. EPIQ AI 2025 brings together researchers, industry experts, policymakers, and innovators to shape a future where AI is trustworthy, impactful, and sustainable.
        </p>
      </section>
    </>
  );
};

export default ThemeSection;