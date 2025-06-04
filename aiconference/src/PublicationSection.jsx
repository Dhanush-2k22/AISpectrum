import React from 'react';




const PublicationSection = () => {
  return (
    <section
      id="publication"
      style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: '#0d58a9',
        color: '#fff',
        borderRadius:'15px',
        marginBottom:'17px',
      }}
    >
      <h2
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          marginBottom: '30px',
          fontFamily: 'Libre Baskerville, Georgia, serif',
          color:'#ffdd00',
        }}
      >
        PUBLICATION
      </h2>

      <img
        src="/aispectrum/assets/lecturenotes.png"
        alt="Lecture Notes of the Institute for Computer Sciences cover"
        style={{
          maxHeight: '320px',
          marginBottom: '30px',
          borderRadius: '8px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        }}
      />

      <p
        style={{
          fontSize: '1.1em',
          lineHeight: '1.8',
          maxWidth: '900px',
          margin: '0 auto 50px',
          opacity: 0.95,
        }}
      >
        The conference proceedings will be published in the{' '}
        <strong>Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST)</strong>{' '}
        series by Springer. They will be indexed in <strong>Scopus</strong>, <strong>Ei Compendex</strong>, <strong>DBLP</strong>, and
        other leading citation databases.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        <img
          src="/aispectrum/assets/Eai_logo_with_margins.png"
          alt="EAI Logo"
          style={{
            maxHeight: '150px',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <img
          src="/aispectrum/assets/Springer.png"
          alt="Springer Logo"
          style={{
            maxHeight: '150px',
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>
    </section>
  );
};

export default PublicationSection;
