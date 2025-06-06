import React from 'react';

const RegDetails = () => {
  return (
    <div id="registration" style={{ 
      marginBottom: '80px', 
      background: 'rgb(255, 255, 255)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
      maxWidth: '70%',
      margin: '60px auto',
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
        Registration Details
        <div style={{
          width: '150px',
          height: '4px',
          background: '#D9A353',
          margin: '0 auto',
          borderRadius: '2px',
          marginTop: '15px'
        }} />
      </h2>

      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc', marginTop: '20px' }}>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>All accepted papers must be registered</li>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>At least one author must attend the conference to present the paper</li>
        <li style={{ textAlign: 'left', marginBottom: '8px' }}>Registration includes conference kit, lunch, and access to all sessions</li>
      </ul>

      <p style={{ marginBottom: '1.5rem', fontWeight: '500', fontSize: '1.1rem' }}>The registration fee for the conference is as follows:</p>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '80%',
          borderCollapse: 'collapse',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '3px solid white',
          backgroundColor: '#023e8a',
          color: 'white',
          margin: '0 auto 30px',
        }}>
          <thead>
            <tr style={{ background: '#0d58a9', color: 'white' }}>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>CATEGORY</th>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>INDIAN DELEGATES</th>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>FOREIGN DELEGATES</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Academician, Research Scholar</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 10,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 125</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Industry person</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 12,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 140</td>
            </tr>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Attendees</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}> ₹ 3,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US $ 75</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontStyle: 'italic', marginBottom: '2rem', textAlign: 'center', color: '#000', fontWeight: '600' }}>
        <strong>Note:</strong> Registration fee inclusive of 18% GST.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', fontFamily: 'Georgia, serif', color:'#0d58a9' }}>Payment Type: Internet Banking</h2>
      
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{
          width: '80%',
          borderCollapse: 'collapse',
          border: '3px solid white',
          borderRadius: '1rem',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: '#000',
          margin: '0 auto 30px',
        }}>
          <thead>
            <tr style={{ background: '#0d58a9' }}>
              <th colSpan={2} style={{ padding: '1rem', textAlign: 'center', color: 'white', fontSize: '1.5rem', border: '3px solid white' }}>
                Payment Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Number</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 500 }}>1481267367</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Beneficiary</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>PSG Center for Nonformal and Continuing Education (PSG CNCE)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Address</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Peelamedu, Coimbatore - 641004</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Bank</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Central Bank of India</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Type</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Savings</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>IFSC Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBIN0280913</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Swift Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBININBBOSB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegDetails; 