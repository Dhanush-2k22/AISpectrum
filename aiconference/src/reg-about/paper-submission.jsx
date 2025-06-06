import React from 'react';

const PaperSubmission = () => {
  return (
    <div style={{ 
      marginBottom: '80px', 
      background: 'rgb(255, 255, 255)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '70%',
      margin: '0 auto 60px',
      color: '#475569'
    }}>
      <h2 style={{ 
        fontSize: '3rem',
        fontWeight: '800',
        color: '#0d58a9',
        marginBottom: '1rem',
        background: '#0d58a9',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center'
      }}>
        Paper Submission
        <div style={{
          width: '150px',
          height: '4px',
          background: '#D9A353',
          margin: '0 auto',
          borderRadius: '2px',
          marginTop: '15px'
        }} />
      </h2>
      
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc', borderColor: 'white', marginTop: '20px' }}>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          <strong>Submission Guidelines:</strong> We invite authors to submit original research papers, case studies, and review articles relevant to the conference themes. Submissions must adhere to the following guidelines:
        </li>
        <li style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', borderColor: 'white' }}>
          Accepted full papers [12–15 pages]
        </li>
        <li style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '10px', borderColor: 'white' }}>
          Accepted short papers [6–8 pages]
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          Selected registered papers will be published in Scopus indexed proceedings / Journals.
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          All the submitted manuscripts will be sent for peer review and the corresponding author will be notified the outcome of the review process.
        </li>
        <li style={{ textAlign: 'left', marginBottom: '10px', borderColor: 'white' }}>
          Submitted research work must be original in content amd free from plagiarism. Authors are requested to submit a plagiarism report using <br />iThenticate / Turnitin. Plagiarism should be less than 20% to qualify for the paper to be reviewed.
        </li>
      </ul>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://cmt3.research.microsoft.com/AIS2025/Submission/Index"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0d58a9',
            color: 'white',
            fontWeight: '500',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0a3d7a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0d58a9'}
        >
          Submit Your Paper
        </a>
        <br /><br />
        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. <br />This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
      </div>
    </div>
  );
};

export default PaperSubmission; 