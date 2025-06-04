import React from 'react';
// Assuming commonStyles is needed for colors/typography if not already imported
// import { colors, typography } from './styles/commonStyles';

const PublicationSection = () => {
  return (
    <section
      id="publication"
      style={{
        padding: '30px', // Consistent padding
        textAlign: 'center',
        background: 'rgb(255, 255, 255)', // White background
        color: '#475569', // Text color for content inside the box
        borderRadius:'20px', // Consistent border radius
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Consistent box shadow
        maxWidth: '1000px', // Matching width with Conference Tracks
        margin: '60px auto 60px', // Centering and consistent vertical spacing
      }}
    >
      <h2
        style={{
          fontSize: '2em',
          fontWeight: 'bold',
          marginBottom: '40px', // Adjusted space below title
          fontFamily: 'Libre Baskerville, Georgia, serif', // Keep original font or use commonStyles if imported
          color:'#0d58a9', // Blue title color
          position: 'relative', // Needed for yellow line positioning
        }}
      >
        PUBLICATION
        {/* Yellow line div */}
               <div
            style={{
              width: '100px',
              height: '4px',
              background: '#ffdd00',
              margin: '0 auto',
              borderRadius: '2px',
              position: 'absolute',
              bottom: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
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
          color:'#475569',
        }}
      >
        The conference proceedings will be published in the{' '}<strong>Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering (LNICST)</strong>{' '}
        series by Springer. They will be indexed in <strong>Scopus</strong>, <strong>Ei Compendex</strong>, <strong>DBLP</strong>, and
        other leading citation databases.
      </p>

     <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    backgroundColor: '#0d58a9', // Keep original background or use colors.blue
    maxWidth: '600px',
    margin: 'auto',
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
