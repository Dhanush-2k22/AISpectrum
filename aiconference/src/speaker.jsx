// import React from 'react';

// import NormalCardGrid from './normalcard';
// import yadatiImage from './assets/yadati.jpg';
// import srinivasImage from './assets/srinivas.png';
// import milliImage from './assets/mille.jpg';
// import venkataImage from './assets/venkata.jpg';
// import ferranteImage from './assets/ferrante.jpg';
// import pabloImage from './assets/pablo.jpg';
// import karthikVaidhyanathanImage from './assets/Dr.karthik.png';
// import sudhaImage from './assets/sudha_R.png';
// import srikanthImage from './assets/srikanth.jpg';
// import anjaniImage from './assets/anjani.jpg';
// import balajiImage from './assets/balaji.jpg';
// import arunImage from './assets/arun.jpg';
// import mukundImage from './assets/mukund.jpg';

// const SpeakerSection = () => {
//    const speakers = [
//     {
//         name: 'Professor Yadati Narahari',
//         designation: (
//             <>
//                 Honorary Professor<br />
//                 Department of Computer Science and Automation (CSA)<br />
//                 IISC Bangalore
//             </>
//         ),
//         iconUrl: yadatiImage,
//         link: 'https://gtl.csa.iisc.ac.in/hari',
//     },
//     {
//         name: 'Dr Srinivas Padmanabhuni',
//         designation: (
//             <>
//                 AI Advisor, Marax AI, Inc.<br />
//                 Faculty Member, IIIT Lucknow<br />
//                 Co-Founder, testAIng.com<br />
//                 Co-Founder, CityMandi.com
//             </>
//         ),
//         iconUrl: srinivasImage,
//         link: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/',
//     },
//     {
//         name: 'Dr Millie Pant',
//         designation: (
//             <>
//                 Professor and Head<br />
//                 Department of Applied Mathematics and Scientific Computing<br />
//                 IIT Roorkee
//             </>
//         ),
//         iconUrl: milliImage,
//         link: 'https://www.iitr.ac.in/~ASE/millifpt',
//     },
//     {
//         name: 'Dr L Venkata Subramaniam',
//         designation: (
//             <>
//                 IBM Quantum India Leader<br />
//                 Mentor at IIT Delhi<br />
//                 Board of Studies member at DAIICT<br />
//                 Delhi, India
//             </>
//         ),
//         iconUrl: venkataImage,
//         link: 'https://www.linkedin.com/in/lvsubramaniam/?originalSubdomain=in',
//     },
//     {
//         name: 'Professor Ferrante Neri',
//         designation: (
//             <>
//                 Professor of Machine Learning and Artificial Intelligence<br />
//                 Associate Dean (International) FEPS<br />
//                 University of Surrey, UK
//             </>
//         ),
//         iconUrl: ferranteImage,
//         link: 'https://www.surrey.ac.uk/people/ferrante-neri',
//     },
//     {
//         name: 'Dr Pablo Moscato',
//         designation: (
//             <>
//                 Professor of Data Science<br />
//                 School of Information and Physical Sciences<br />
//                 University of Newcastle, Australia
//             </>
//         ),
//         iconUrl: pabloImage,
//         link: 'https://www.newcastle.edu.au/profile/pablo-moscato',
//     },
//     {
//         name: 'Dr Sudha Ramalingam',
//         designation: (
//             <>
//                 Professor and Head, Community Medicine<br />
//                 Director - Research & Innovation<br />
//                 PSG IMSR, India
//             </>
//         ),
//         iconUrl: sudhaImage,
//         link: 'https://psgimsr.ac.in/old/community-medicine/dr-sudha-ramalingam/',
//     },
//     {
//         name: 'Dr Karthik Vaidhyanathan',
//         designation: (
//             <>
//                 Assistant Professor<br />
//                 Software Engineering Research Center<br />
//                 IIIT Hyderabad, India
//             </>
//         ),
//         iconUrl: karthikVaidhyanathanImage,
//         link: 'https://karthikvaidhyanathan.com/',
//     },
//     {
//         name: 'Mr Srikanth Subramanian',
//         designation: (
//             <>
//                 Vice President, Engineering<br />
//                 Salesforce, Bengaluru
//             </>
//         ),
//         iconUrl: srikanthImage,
//         link: 'https://www.linkedin.com/in/srikanth-subramanian/?originalSubdomain=in',
//     },
//     {
//         name: 'Dr Anjani Priyadarsini',
//         designation: (
//             <>
//                 Quantum Technologies Lead<br />
//                 AWS India
//             </>
//         ),
//         iconUrl: anjaniImage,
//         link: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/?originalSubdomain=in',
//     },
//     {
//         name: 'Dr Arun Rajkumar',
//         designation: (
//             <>
//                 Assistant Professor<br />
//                 IIT Madras, India
//             </>
//         ),
//         iconUrl: arunImage,
//         link: 'https://www.cse.iitm.ac.in/profile.php?arg=MjA0MA==',
//     },
//     {
//         name: 'Mr Mukund Bhoovaraghavan',
//         designation: (
//             <>
//                 Principal Group Engineering Manager<br />
//                 Microsoft Hyderabad, India
//             </>
//         ),
//         iconUrl: mukundImage,
//         link: 'https://www.linkedin.com/in/mukundbhoovaraghavan/?originalSubdomain=in',
//     },
// ];

//     return (
//         <section style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//             padding: '20px',
//             width: '100%',
//         }}>
//             <h2 style={{
//                 fontFamily: 'Libre Baskerville, Georgia, serif',
//                 fontSize: '2em',
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//                 marginBottom: '30px',
//                 marginTop: '0',
//                 color: '#0D58A9',
//             }}>KEYNOTE SPEAKERS AND PANELISTS</h2>
//             <NormalCardGrid 
//                 cards={speakers}
//                 style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(4, 1fr)',
//                     gap: '30px',
//                     width: '100%',
//                     maxWidth: '1400px',
//                     margin: '0 auto',
//                     padding: '0 20px',
//                 }}
//             />
//         </section>
//     );
// };

// export default SpeakerSection;

import React, { useEffect, useState, useCallback } from 'react';
import ProfileCard from './profilecard'; 
import NormalCardGrid from './normalcard';
import yadatiImage from './assets/yadati.jpg';
import srinivasImage from './assets/srinivas.png';
import milliImage from './assets/mille.jpg';
import venkataImage from './assets/venkata.jpg';
import ferranteImage from './assets/ferrante.jpg';
import pabloImage from './assets/pablo.jpg';
import karthikVaidhyanathanImage from './assets/Dr.karthik.png';
import sudhaImage from './assets/sudha_R.png';
import srikanthImage from './assets/srikanth.jpg';
import anjaniImage from './assets/anjani.jpg';
import balajiImage from './assets/balaji.jpg';
import arunImage from './assets/arun.jpg';
import mukundImage from './assets/mukund.jpg';


const SpeakerSection = () => {
   const speakers = [
    {
        name: 'Professor Yadati Narahari',
        designation: (
            <>
                Honorary Professor<br />
                Department of Computer Science and Automation (CSA)<br />
                IISC Bangalore
            </>
        ),
        iconUrl: yadatiImage,
        link: 'https://gtl.csa.iisc.ac.in/hari',
    },
    {
        name: 'Dr Srinivas Padmanabhuni',
        designation: (
            <>
                AI Advisor, Marax AI, Inc.<br />
                Faculty Member, IIIT Lucknow<br />
                Co-Founder, testAIng.com<br />
                Co-Founder, CityMandi.com
            </>
        ),
        iconUrl: srinivasImage,
        link: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/',
    },
    {
        name: 'Dr Millie Pant',
        designation: (
            <>
                Professor and Head<br />
                Department of Applied Mathematics and Scientific Computing<br />
                IIT Roorkee
            </>
        ),
        iconUrl: milliImage,
        link: 'https://www.iitr.ac.in/~ASE/millifpt',
    },
    {
        name: 'Dr L Venkata Subramaniam',
        designation: (
            <>
                IBM Quantum India Leader<br />
                Mentor at IIT Delhi<br />
                Board of Studies member at DAIICT<br />
                Delhi, India
            </>
        ),
        iconUrl: venkataImage,
        link: 'https://www.linkedin.com/in/lvsubramaniam/?originalSubdomain=in',
    },
    {
        name: 'Professor Ferrante Neri',
        designation: (
            <>
                Professor of Machine Learning and Artificial Intelligence<br />
                Associate Dean (International) FEPS<br />
                University of Surrey, UK
            </>
        ),
        iconUrl: ferranteImage,
        link: 'https://www.surrey.ac.uk/people/ferrante-neri',
    },
    {
        name: 'Dr Pablo Moscato',
        designation: (
            <>
                Professor of Data Science<br />
                School of Information and Physical Sciences<br />
                University of Newcastle, Australia
            </>
        ),
        iconUrl: pabloImage,
        link: 'https://www.newcastle.edu.au/profile/pablo-moscato',
    },
    {
        name: 'Dr Sudha Ramalingam',
        designation: (
            <>
                Professor and Head, Community Medicine<br />
                Director - Research & Innovation<br />
                PSG IMSR, India
            </>
        ),
        iconUrl: sudhaImage,
        link: 'https://psgimsr.ac.in/old/community-medicine/dr-sudha-ramalingam/',
    },
    {
        name: 'Dr Karthik Vaidhyanathan',
        designation: (
            <>
                Assistant Professor<br />
                Software Engineering Research Center<br />
                IIIT Hyderabad, India
            </>
        ),
        iconUrl: karthikVaidhyanathanImage,
        link: 'https://karthikvaidhyanathan.com/',
    },
    {
        name: 'Mr Srikanth Subramanian',
        designation: (
            <>
                Vice President, Engineering<br />
                Salesforce, Bengaluru
            </>
        ),
        iconUrl: srikanthImage,
        link: 'https://www.linkedin.com/in/srikanth-subramanian/?originalSubdomain=in',
    },
    {
        name: 'Dr Anjani Priyadarsini',
        designation: (
            <>
                Quantum Technologies Lead<br />
                AWS India
            </>
        ),
        iconUrl: anjaniImage,
        link: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/?originalSubdomain=in',
    },
    {
        name: 'Dr Arun Rajkumar',
        designation: (
            <>
                Assistant Professor<br />
                IIT Madras, India
            </>
        ),
        iconUrl: arunImage,
        link: 'https://www.cse.iitm.ac.in/profile.php?arg=MjA0MA==',
    },
    {
        name: 'Mr Mukund Bhoovaraghavan',
        designation: (
            <>
                Principal Group Engineering Manager<br />
                Microsoft Hyderabad, India
            </>
        ),
        iconUrl: mukundImage,
        link: 'https://www.linkedin.com/in/mukundbhoovaraghavan/?originalSubdomain=in',
    },
];


    
    const NormalCardGrid = ({ cards }) => (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            alignItems: 'start',borderRadius: '20px',    
            overflow: 'hidden',
            

        }}>
            {cards.map((card, index) => (
                <div
                    key={index}
                    style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
                        border: '2px solid rgba(59,130,246,0.2)',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '420px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(59,130,246,0.2)';
                        e.currentTarget.style.borderColor = '#FBBF24';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)';
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '20px'
                    }}>
                        <img
                            src={card.iconUrl}
                            alt={card.name}
                            style={{
                                width: '100px', height: '100px',
                                borderRadius: '50%',
                                border: '4px solid #FBBF24',
                                objectFit: 'cover',
                                boxShadow: '0 8px 20px rgba(251,191,36,0.3)'
                            }}
                        />
                    </div>

                    <h3 style={{
                        color: '#1E40AF', fontSize: '1.3rem',
                        fontWeight: '700', marginBottom: '12px',
                        textAlign: 'center', lineHeight: '1.3'
                    }}>
                        {card.name}
                    </h3>

                    <div style={{
                        color: '#374151', fontSize: '0.95rem',
                        fontWeight: '500', textAlign: 'center',
                        lineHeight: '1.5', minHeight: '80px',
                        marginBottom: '20px'
                    }}>
                        {card.designation}
                    </div>

                    <button
                        onClick={() => window.open(card.link, '_blank')}
                        style={{
                            background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            alignSelf: 'center',
                            marginTop: 'auto'
                        }}
                    >
                        Know More
                    </button>
                </div>
            ))}
        </div>
    );

    return (
        <section style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '40px 40px',
            background: 'linear-gradient(135deg, #F8FAFC, #E2E8F0, #F1F5F9)',
            minHeight: '100vh', position: 'relative'
        }}>
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                
                background: `
                    radial-gradient(circle at 20% 20%, rgba(59,130,246,0.05), transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(251,191,36,0.05), transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), transparent 50%)
                `,
                zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1400px' }}>
                <h2 style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                    fontWeight: '800', marginBottom: '60px',
                    background: '#0d58a9',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(59,130,246,0.2)',
                    position: 'relative'
                }}>
                    KEYNOTE SPEAKERS AND PANELISTS
                    <div style={{
                        position: 'absolute',
                        bottom: '-15px', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100px', height: '4px',
                        background: '#ffdd00',
                        borderRadius: '2px'
                    }} />
                </h2>

                <NormalCardGrid cards={speakers} />
            </div>
        </section>
    );
};

export default SpeakerSection;