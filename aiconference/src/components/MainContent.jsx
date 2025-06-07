import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider.jsx';
import CountdownTimer from './CountdownTimer.jsx';
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
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '3rem',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <img
            src={PSGLogo}
            alt="PSGCT Logo"
            style={{
              height: '105px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0.9)',
            }}
          />

          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <h1 style={{ 
              margin: 0, 
              fontSize: '2.2rem', 
              color: '#0D58A9', 
              fontWeight: '700',
              textAlign: 'center'
            }}>
              PSG COLLEGE OF TECHNOLOGY
            </h1>
            <p style={{ 
              margin: 0, 
              fontSize: '1.2rem', 
              color: '#0D58A9',
              textAlign: 'center'
            }}>
              Coimbatore, Tamil Nadu, India - 641004
            </p>
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.8rem', 
              color: '#D9A353', 
              fontWeight: '700',
              textAlign: 'center'
            }}>
              PSG - <span style={{ fontWeight: 'bold' }}>AI CONSORTIUM</span>
            </h2>
          </div>

          <img
            src={AIConsLogo}
            alt="AI Consortium Logo"
            style={{
              height: '140px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </InfoSection>
      <SliderContainer>
        <Title style={{ width: '100%', whiteSpace: 'nowrap', textAlign: 'center' }}>
          INTERNATIONAL CONFERENCE
          <Line />
          on
          <Line />
          THE AI SPECTRUM: BRIDGING RESEARCH, INDUSTRY & INNOVATION
          <Line />
          Date : 22 - 24 December 2025
          <Line />
          <div style={{ 
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit, index) => (
              <div key={index} style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '15px 25px',
                borderRadius: '10px',
                minWidth: '100px',
                textAlign: 'center',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold',
                  color: '#D9A353',
                  marginBottom: '5px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div style={{ 
                  fontSize: '0.9rem',
                  color: '#D9A353',
                  fontWeight: '400',
                  opacity: '0.9'
                }}>
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </Title>
        <ImageSlider style={{ width: '200%', height: '100%' }} />
      </SliderContainer>
    </AppContainer>
  );
};

export default MainContent;
