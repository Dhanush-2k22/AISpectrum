
import React from 'react';
const Dates = () => {
  return (
    <div id="important-dates" style={{ 
      marginBottom: '40px', 
      background: 'rgb(255, 255, 255)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '90%',
      margin: '0 auto 60px',
      color: '#0d58a9'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', margin: '30px 0', fontFamily: 'Georgia, serif' }}>IMPORTANT DATES</h2>

      <table style={{
        width: '80%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: '2px',
        borderRadius: '1rem',
        overflow: 'hidden',
        color: '#000',
        margin: '0 auto 30px',
        boxShadow: '0 0 0 2px white'
      }}>
        <tbody>
          {[
            ['Opening Date for Paper Submission', '05.06.2025'],
            ['Last Date for Full Paper Submission', '01.08.2025'],
            ['Notification of Acceptance', '15.10.2025'],
            ['Camera-Ready Paper Submission', '01.11.2025'],
            ['Last Date for Registration', '15.11.2025']
          ].map(([label, date], idx) => (
            <tr key={idx} style={{ background: '#0d58a9', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold', textAlign: 'left' }}>{label}</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dates;