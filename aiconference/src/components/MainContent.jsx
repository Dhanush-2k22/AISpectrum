import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider.jsx';
import CountdownTimer from './CountdownTimer.jsx';
import styled from 'styled-components';
import {
  AppContainer,
  InfoSection,
  SliderContainer,
  Title,
  Line
} from './App.styles';
import { colors } from '../styles/commonStyles';

import PSGLogo from '../assets/PSG_College_of_Technology_logo.png';
import AIConsLogo from '../assets/AICons_logo.jpg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 15px;
  }
`;

const PSGLogoImage = styled.img`
  height: 105px;
  width: auto;
  object-fit: contain;
  filter: brightness(0.9);
  margin-left: 5px;
  margin-top: 12px;

  @media (max-width: 768px) {
    height: 70px;
    margin-left: 0;
    margin-top: 0;
    order: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
    order: 2;
    gap: 0.2rem;
    width: 100%;
    padding: 0 10px;
  }
`;

const CollegeName = styled.h1`
  margin: 0;
  font-size: 2.2rem;
  color: #0D58A9;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;

const Address = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #0D58A9;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

const ConsortiumName = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: #D9A353;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.2;
  }
`;

const AIConsLogoImage = styled.img`
  height: 140px;
  width: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 80px;
    order: 3;
  }
`;

const StyledTitle = styled(Title)`
  width: 100%;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 768px) {
    white-space: normal;
    word-break: keep-all;
    word-wrap: break-word;
    padding: 0 15px;
    font-size: 1rem;
    width: 100vw;
    box-sizing: border-box;
    margin: 2px 0;
  }
`;

const TitleContent = styled.div`
  @media (max-width: 768px) {
    display: inline-block;
    white-space: normal;
    word-break: keep-all;
    width: 100%;
    max-width: 100%;
    overflow-wrap: break-word;
    padding: 0 3px;
  }
`;

const ConferenceTitle = styled.div`
  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 8px;
    padding: 0 8px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const MainContent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-12-22T09:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppContainer>
      <InfoSection>
        <HeaderContainer>
          <PSGLogoImage src={PSGLogo} alt="PSGCT Logo" />
          <ContentContainer>
            <CollegeName>PSG COLLEGE OF TECHNOLOGY</CollegeName>
            <Address>Coimbatore, Tamil Nadu, India - 641004</Address>
            <ConsortiumName>PSG - <span style={{ fontWeight: 'bold' }}>AI CONSORTIUM</span></ConsortiumName>
          </ContentContainer>
          <AIConsLogoImage src={AIConsLogo} alt="AI Consortium Logo" />
        </HeaderContainer>
      </InfoSection>
      <SliderContainer>
        <StyledTitle>
          <TitleContent>
            <ConferenceTitle>
              INTERNATIONAL CONFERENCE
            </ConferenceTitle>
            <Line />
            on
            <Line />
            THE AI SPECTRUM: BRIDGING RESEARCH, INDUSTRY & INNOVATION
            <Line />
            22 - 24 December 2025
          </TitleContent>
          <Line />
          <div style={{ 
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            '@media (max-width: 768px)': {
              marginTop: '15px',
              gap: '8px',
              padding: '0 10px'
            }
          }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div key={index} style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                minWidth: '80px',
                textAlign: 'center',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '@media (max-width: 768px)': {
                  padding: '8px 12px',
                  minWidth: '65px',
                  width: '65px',
                  borderRadius: '6px'
                }
              }}>
                <div style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: 'bold',
                  color: '#D9A353',
                  marginBottom: '4px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  '@media (max-width: 768px)': {
                    fontSize: '1.2rem',
                    marginBottom: '2px'
                  }
                }}>
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div style={{ 
                  fontSize: '0.8rem',
                  color: '#D9A353',
                  fontWeight: '400',
                  opacity: '0.9',
                  '@media (max-width: 768px)': {
                    fontSize: '0.7rem'
                  }
                }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </StyledTitle>
        <ImageSlider style={{ width: '200%', height: '100%' }} />
      </SliderContainer>
    </AppContainer>
  );
};

export default MainContent;
