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

const SectionContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`;

const SectionTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.blue};
  text-align: center;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #D9A353;
    border-radius: 2px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 85%;
  }
`;

const SpeakerCard = styled.div`
  position: relative;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 400px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto 0 auto;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 4px solid white;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  flex-shrink: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const SpeakerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  display: block;
  border-radius: 50%;
  transform: translateZ(0);
  backface-visibility: hidden;

  ${SpeakerCard}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(13, 88, 169, 0.9));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
  transform: translateZ(0);
  backface-visibility: hidden;

  ${SpeakerCard}:hover & {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  text-align: center;
  margin-top: -20px;
`;

const SpeakerName = styled.h3`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.blue};
  margin: 0 0 10px 0;
`;

const SpeakerDesignation = styled.div`
  font-family: ${typography.body.fontFamily};
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 15px;
`;

const SpeakerLink = styled.a`
  display: inline-block;
  background: #D9A353;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: auto;

  &:hover {
    background: #c08a3f;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${colors.blue};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #D9A353;
  }
`;

  const speakers = [
    {
    name: 'Prof. Yadati Narahari',
    designation: 'Honorary Professor, Department of CSA, IISC Bangalore',
      iconUrl: yadatiImage,
      link: 'https://gtl.csa.iisc.ac.in/hari',
    social: {
      linkedin: 'https://www.linkedin.com/in/yadati-narahari-0b0b0b0b/',
      twitter: '#',
      website: 'https://gtl.csa.iisc.ac.in/hari'
    }
    },
    {
      name: 'Dr Srinivas Padmanabhuni',
    designation: 'AI Advisor, Marax AI & Faculty, IIIT Lucknow',
      iconUrl: srinivasImage,
      link: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/',
    social: {
      linkedin: 'https://www.linkedin.com/in/srinivas-padmanabhuni/',
      twitter: '#',
      website: 'https://iiitl.ac.in/index.php/personnel/dr-srinivas-padmanabhuni/'
    }
    },
    {
      name: 'Dr Millie Pant',
    designation: 'Professor & Head, IIT Roorkee',
      iconUrl: milliImage,
      link: 'https://www.iitr.ac.in/~ASE/millifpt',
    social: {
      linkedin: 'https://www.linkedin.com/in/millie-pant-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.iitr.ac.in/~ASE/millifpt'
    }
    },
    {
      name: 'Dr L Venkata Subramaniam',
    designation: 'IBM Quantum India Leader',
      iconUrl: venkataImage,
    link: 'https://www.linkedin.com/in/lvsubramaniam/',
    social: {
      linkedin: 'https://www.linkedin.com/in/lvsubramaniam/',
      twitter: '#',
      website: '#'
    }
    },
    {
    name: 'Prof. Ferrante Neri',
    designation: 'Professor of ML & AI, University of Surrey',
      iconUrl: ferranteImage,
      link: 'https://www.surrey.ac.uk/people/ferrante-neri',
    social: {
      linkedin: 'https://www.linkedin.com/in/ferrante-neri-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.surrey.ac.uk/people/ferrante-neri'
    }
    },
    {
      name: 'Dr Pablo Moscato',
    designation: 'Professor of Data Science, University of Newcastle',
      iconUrl: pabloImage,
      link: 'https://www.newcastle.edu.au/profile/pablo-moscato',
    social: {
      linkedin: 'https://www.linkedin.com/in/pablo-moscato-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.newcastle.edu.au/profile/pablo-moscato'
    }
    },
    {
      name: 'Dr Sudha Ramalingam',
    designation: 'Professor & Head, PSG IMSR, India',
      iconUrl: sudhaImage,
      link: 'https://psgimsr.ac.in/old/community-medicine/dr-sudha-ramalingam/',
    social: {
      linkedin: 'https://www.linkedin.com/in/sudha-ramalingam-0b0b0b0b/',
      twitter: '#',
      website: 'https://psgimsr.ac.in/old/community-medicine/dr-sudha-ramalingam/'
    }
    },
    {
      name: 'Dr Karthik Vaidhyanathan',
    designation: 'Assistant Professor, IIIT Hyderabad',
      iconUrl: karthikVaidhyanathanImage,
      link: 'https://karthikvaidhyanathan.com/',
    social: {
      linkedin: 'https://www.linkedin.com/in/karthik-vaidhyanathan-0b0b0b0b/',
      twitter: '#',
      website: 'https://karthikvaidhyanathan.com/'
    }
    },
    {
      name: 'Mr Srikanth Subramanian',
    designation: 'VP, Engineering, Salesforce India',
      iconUrl: srikanthImage,
    link: 'https://www.linkedin.com/in/srikanth-subramanian/',
    social: {
      linkedin: 'https://www.linkedin.com/in/srikanth-subramanian/',
      twitter: '#',
      website: '#'
    }
    },
    {
      name: 'Dr Anjani Priyadarsini',
    designation: 'Quantum Lead, AWS India',
      iconUrl: anjaniImage,
    link: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/',
    social: {
      linkedin: 'https://www.linkedin.com/in/dr-anjani-priyadarsini/',
      twitter: '#',
      website: '#'
    }
  },
  {
    name: 'Mr Mukund Bhoovaraghavan',
    designation: 'Principal Group Eng. Manager, Microsoft India',
    iconUrl: mukundImage,
    link: 'https://www.linkedin.com/in/mukundbhoovaraghavan/',
    social: {
      linkedin: 'https://www.linkedin.com/in/mukundbhoovaraghavan/',
      twitter: '#',
      website: '#'
    }
    },
    {
      name: 'Dr Arun Rajkumar',
    designation: 'Assistant Professor, IIT Madras',
      iconUrl: arunImage,
      link: 'https://www.cse.iitm.ac.in/profile.php?arg=MjA0MA==',
    social: {
      linkedin: 'https://www.linkedin.com/in/arun-rajkumar-0b0b0b0b/',
      twitter: '#',
      website: 'https://www.cse.iitm.ac.in/profile.php?arg=MjA0MA=='
    }
  }
];

const Speaker = () => {
  return (
    <SectionContainer>
      <SectionTitle>Keynote Speakers and Panelists</SectionTitle>
      <CardGrid>
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index}>
            <ImageContainer>
            <SpeakerImage src={speaker.iconUrl} alt={speaker.name} />
              <Overlay />
            </ImageContainer>
            <ContentContainer>
              <div>
            <SpeakerName>{speaker.name}</SpeakerName>
            <SpeakerDesignation>{speaker.designation}</SpeakerDesignation>
              </div>
              <div>
            <SpeakerLink href={speaker.link} target="_blank" rel="noopener noreferrer">
              View Profile
            </SpeakerLink>
                <SocialLinks>
                  <SocialLink href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </SocialLink>
                  <SocialLink href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </SocialLink>
                  <SocialLink href={speaker.social.website} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe"></i>
                  </SocialLink>
                </SocialLinks>
              </div>
            </ContentContainer>
          </SpeakerCard>
        ))}
      </CardGrid>
    </SectionContainer>
  );
};

export default Speaker;
