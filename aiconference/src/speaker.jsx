import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { colors, typography } from './styles/commonStyles';

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

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: #0d58a9;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: #D9A353;
    border-radius: 2px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  margin-top: 20px;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SpeakerCard = styled.div`
  background: ${colors.blue};
  border-radius: 15px;
  padding: 15px;
  color: ${colors.white};
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 500px;
  width: 100%;
  filter: saturate(85%);
  transform-origin: center center;
  position: relative;
  will-change: transform;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    filter: saturate(100%);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 15px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const SpeakerImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${colors.white};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const SpeakerName = styled.h3`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.3em;
  color: ${colors.white};
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

const SpeakerDesignation = styled.div`
  font-family: ${typography.body.fontFamily};
  font-size: 0.95em;
  line-height: 1.3;
  color: ${colors.white};
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

const SpeakerLink = styled.a`
  background: #D9A353;
  color: ${colors.blue}; /* Or use white if you want light text */
  text-decoration: none;
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  font-weight: bold;
  margin-top: auto;
  padding: 10px 24px;
  border: none;
  border-radius: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(217, 163, 83, 0.5);
  }
`;

const SpeakerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const speakers = [
    {
      name: 'Prof. Yadati Narahari',
      designation: (
        <>
          Honorary Professor<br />
          Department of CSA, IISC Bangalore
        </>
      ),
      iconUrl: yadatiImage,
      link: 'https://gtl.csa.iisc.ac.in/hari',
    },
    {
      name: 'Dr Srinivas Padmanabhuni',
      designation: (
        <>
          AI Advisor, Marax AI<br />
          Faculty, IIIT Lucknow
        </>
      ),
      iconUrl: srinivasImage,
      link: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/',
    },
    {
      name: 'Dr Millie Pant',
      designation: (
        <>
          Professor & Head<br />
          IIT Roorkee
        </>
      ),
      iconUrl: milliImage,
      link: 'https://www.iitr.ac.in/~ASE/millifpt',
    },
    {
      name: 'Dr L Venkata Subramaniam',
      designation: <>IBM Quantum India Leader</>,
      iconUrl: venkataImage,
      link: 'https://www.linkedin.com/in/lvsubramaniam/?originalSubdomain=in',
    },
    {
      name: 'Prof. Ferrante Neri',
      designation: (
        <>
          Professor of ML & AI<br />
          University of Surrey
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
          University of Newcastle
        </>
      ),
      iconUrl: pabloImage,
      link: 'https://www.newcastle.edu.au/profile/pablo-moscato',
    },
    {
      name: 'Dr Sudha Ramalingam',
      designation: (
        <>
          Professor & Head<br />
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
          IIIT Hyderabad
        </>
      ),
      iconUrl: karthikVaidhyanathanImage,
      link: 'https://karthikvaidhyanathan.com/',
    },
    {
      name: 'Mr Srikanth Subramanian',
      designation: (
        <>
          VP, Engineering<br />
          Salesforce India
        </>
      ),
      iconUrl: srikanthImage,
      link: 'https://www.linkedin.com/in/srikanth-subramanian/?originalSubdomain=in',
    },
    {
      name: 'Dr Anjani Priyadarsini',
      designation: (
        <>
          Quantum Lead<br />
          AWS India
        </>
      ),
      iconUrl: anjaniImage,
      link: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/?originalSubdomain=in',
    },
    {
      name: 'Mr Mukund Bhoovaraghavan',
      designation: (
        <>
          Principal Group Eng. Manager<br />
          Microsoft India
        </>
      ),
      iconUrl: mukundImage,
      link: 'https://www.linkedin.com/in/mukundbhoovaraghavan/?originalSubdomain=in',
    },
    {
      name: 'Dr Arun Rajkumar',
      designation: (
        <>
          Assistant Professor<br />
          IIT Madras
        </>
      ),
      iconUrl: arunImage,
      link: 'https://www.cse.iitm.ac.in/profile.php?arg=MjA0MA==',
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Keynote Speakers and Panelists</SectionTitle>
      <CardGrid>
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            data-aos={index % 3 === 0 ? 'fade-right' : index % 3 === 1 ? 'fade-up' : 'fade-left'}
            data-aos-delay={`${index * 35}`}
          >
            <SpeakerImage src={speaker.iconUrl} alt={speaker.name} />
            <SpeakerName>{speaker.name}</SpeakerName>
            <SpeakerDesignation>{speaker.designation}</SpeakerDesignation>
            <SpeakerLink href={speaker.link} target="_blank" rel="noopener noreferrer">
              View Profile
            </SpeakerLink>
          </SpeakerCard>
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

export default SpeakerSection;
