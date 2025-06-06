import React from 'react';
import styled from 'styled-components';
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
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  width: 100%;
  background: transparent;
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
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SpeakerCard = styled.div`
  background: linear-gradient(135deg, ${colors.blue}, #0a3d7a);
  border-radius: 15px;
  padding: 30px 20px;
  color: ${colors.white};
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 620px;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const SpeakerImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${colors.white};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const SpeakerName = styled.h3`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.5em;
  margin: 0;
  color: ${colors.white};
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

const SpeakerDesignation = styled.div`
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  line-height: 1.5;
  color: ${colors.white};
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

const SpeakerLink = styled.a`
  color: ${colors.yellow};
  text-decoration: none;
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  margin-top: auto;
  padding: 8px 20px;
  border: 2px solid ${colors.yellow};
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.white};
    background: ${colors.yellow};
  }
`;

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
    
  ];

  return (
    <SectionContainer>
      <SectionTitle>Keynote Speakers and Panelists</SectionTitle>
      <CardGrid>
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index}>
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