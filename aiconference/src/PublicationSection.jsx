import React from 'react';
// Assuming commonStyles is needed for colors/typography if not already imported
// import { colors, typography } from './styles/commonStyles';

const PublicationSection = () => {
  return (
    <section
      id="publications"
      style={{
        padding: '30px',
        textAlign: 'center',
        background: 'rgb(255, 255, 255)',
        color: '#475569',
        borderRadius: '20px',
        boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
        maxWidth: '1000px',
        margin: '60px auto 60px',
        border: '1px solid rgba(217, 163, 83, 0.2)'
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: '800',
          color: '#0d58a9',
          marginBottom: '1rem',
          textAlign: 'center'
        }}
      >
        Publication
        <div style={{
          width: '150px',
          height: '4px',
          background: '#D9A353',
          margin: '15px auto',
          borderRadius: '2px',
        }} />
      </h2>

      <img
        src="/aispectrum/assets/lecturenotes.png"
        alt="Lecture Notes of the Institute for Computer Sciences cover"
        style={{
          maxHeight: '320px',
          marginBottom: '30px',
          borderRadius: '8px',
          boxShadow: '0 10px 20px rgba(217, 163, 83, 0.2)',
          border: '1px solid rgba(217, 163, 83, 0.2)'
        }}
      />

      <p
        style={{
          fontSize: '1.1em',
          lineHeight: '1.8',
          maxWidth: '900px',
          margin: '0 auto 50px',
          opacity: 0.95,
          color: '#475569',
          padding: '20px',
          backgroundColor: 'rgba(217, 163, 83, 0.05)',
          borderRadius: '10px',
          border: '1px solid rgba(217, 163, 83, 0.2)'
        }}
      >
        The conference proceedings will be published in the{' '}
        <strong style={{ color: '#0d58a9' }}>Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST)</strong>{' '}
        series by Springer. They will be indexed in <strong style={{ color: '#0d58a9' }}>Scopus</strong>, <strong style={{ color: '#0d58a9' }}>Ei Compendex</strong>, <strong style={{ color: '#0d58a9' }}>DBLP</strong>, and
        other leading citation databases.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          padding: '20px',
          border: '2px solid #D9A353',
          borderRadius: '20px',
          backgroundColor: '#0d58a9',
          maxWidth: '600px',
          margin: 'auto',
          boxShadow: '0 4px 12px rgba(217, 163, 83, 0.2)'
        }}
      >
        <img
          src="/aispectrum/assets/Eai_logo_with_margins.png"
          alt="EAI Logo"
          style={{
            maxHeight: '100px',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <img
          src="/aispectrum/assets/Springer.png"
          alt="Springer Logo"
          style={{
            maxHeight: '100px',
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>
    </section>
  );
};

export default PublicationSection;
