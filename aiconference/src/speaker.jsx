import React from 'react';
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

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
            width: '100%',
        }}>
            <h2 style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontSize: '2em',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '30px',
                marginTop: '0',
                color: '#0D58A9',
            }}>KEYNOTE SPEAKERS AND PANELISTS</h2>
            <NormalCardGrid 
                cards={speakers}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '30px',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 20px',
                }}
            />
        </section>
    );
};

export default SpeakerSection;