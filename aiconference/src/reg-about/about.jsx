import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ablockImage from '../assets/Ablock.jpeg';
import psgAiImage from '../assets/AICons_logo.jpg';
import psgCareImage from '../assets/PSGCARE.jpg';

const SeeMore = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore && <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic">{children}</div>}
      <p
        style={{
          cursor: 'pointer',
          color: '#3b82f6',
          fontWeight: '600',
          marginTop: '1rem',
          transition: 'color 0.3s ease',
        }}
        onClick={() => setShowMore((prev) => !prev)}
        onMouseEnter={(e) => e.target.style.color = '#1d4ed8'}
        onMouseLeave={(e) => e.target.style.color = '#3b82f6'}
      >
        {showMore ? 'See less ▲' : 'See more ▼'}
      </p>
    </>
  );
};

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
      delay: 0,
      mirror: false
    });
  }, []);

  return (
    <div
      style={{
        background: '',
        minHeight: '100vh',
        padding: '2rem 1rem',
        marginTop: '60px',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 0' }}>
        
        {/* --- PSGCT FLOATING CARD --- */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 4px 12px rgba(13, 88, 169, 0.5) ',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5) ';
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#0d58a9',
                marginBottom: '1rem',
                background: '#0d58a9',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About PSGCT
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="ease-out-cubic"
              style={{
                width: '150px',
                height: '4px',
                background: '#D9A353',
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1.5fr',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Image Card */}
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(13, 88, 169, 0.5) ',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={ablockImage}
                alt="PSG College main building"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
              />
            </div>

            {/* Content */}
            <div 
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              <p
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                }}
              >
                PSG College of Technology (PSG CT), established by PSG & Sons' Charities in 1951, is a premier institution
                imparting cutting-edge engineering education. The college boasts a strong alumni network with top positions
                in government and corporate sectors.
              </p>
              <p
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                }}
              >
                PSG CT offers 21 undergraduate and 24 postgraduate programmes, covering Engineering, Technology, Computer
                Applications, and Applied Sciences.
              </p>

              <SeeMore>
                <p
                  style={{
                    marginBottom: '1.5rem',
                    lineHeight: '1.8',
                    color: '#475569',
                    fontSize: '1.1rem',
                    textAlign: 'justify',
                  }}
                >
                  The college hosts advanced Centers of Excellence like TIFAC Core, Virtual Reality Centre, Nano-tool Centre,
                  and more. It operates in-campus manufacturing units and has strong industry and research collaborations.
                </p>
                <p
                  style={{
                    marginBottom: '1.5rem',
                    lineHeight: '1.8',
                    color: '#475569',
                    fontSize: '1.1rem',
                    textAlign: 'justify',
                  }}
                >
                  PSG CT ranked second in ARIIA 2021 and received AICTE-CII's Best Industry-linked Institute award in 2012.
                </p>
                <p
                  style={{
                    lineHeight: '1.8',
                    color: '#475569',
                    fontSize: '1.1rem',
                    textAlign: 'justify',
                  }}
                >
                  Recognized among the 75 institutions during India's G20 Presidency in 2022, PSG CT was tasked with national
                  academic and cultural outreach to promote the G20 agenda.
                </p>
              </SeeMore>
            </div>
          </div>
        </div>

        {/* --- AI CONSORTIUM FLOATING CARD --- */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 4px 12px rgba(13, 88, 169, 0.5)',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#0d58a9',
                marginBottom: '1rem',
                background: '#0d58a9',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              The AI Consortium @ PSG College of Technology
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="ease-out-cubic"
              style={{
                width: '150px',
                height: '4px',
                background: '#D9A353',
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1.5fr',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Image Card */}
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(13, 88, 169, 0.5) ',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={psgAiImage}
                alt="PSG AI Consortium"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                }}
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <p
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                }}
              >
                The growth of Artificial Intelligence must be guided by strong ethical principles and Responsible AI, ensuring that its development promotes fairness, transparency, and societal well-being.
                The AI Consortium at PSG College of Technology, inspired by the vision of EPIQ AI – Empowering Ethics, Progress, Innovation & Quality in AI, serves as a dynamic platform for fostering AI research, innovation, and industry collaboration.
              </p>

              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#0d58a9',textAlign: 'justify', }}>Key Measures for AI Integration</h3>
                <ul style={{ paddingLeft: '1.5rem', color: '#374151', lineHeight: '1.6',textAlign: 'justify',marginBottom: '1.5rem' }}>
                  <li>AI Affirmation Pledge</li>
                  <li>Campus-wide AI Awareness Campaigns</li>
                  <li>AI First Curriculum</li>
                  <li>Faculty Development Programs</li>
                  <li>Industry Collaboration</li>
                </ul>
              </div>

              <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#475569', fontSize: '1.1rem' ,textAlign: 'justify',}}>
                AI excellence at PSG Tech began in 2019 with the launch of the Centre for Artificial Intelligence Research (AIR), laying the groundwork for impactful research and collaborations.
              </p>

              <SeeMore>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#0d58a9' ,textAlign: 'justify'}}>AI Wing and Specialized Centers</h3>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.8', color: '#374151' ,textAlign: 'justify'}}>
                    Located on the 3rd floor of E-Block and managed by the CSE Department, the AI Wing houses four specialized centers:
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', color: '#374151', lineHeight: '1.6',textAlign: 'justify' }}>
                    <li>Centre for Algorithms and Applied AI (3AI)</li>
                    <li>Centre for AI Research (AIR)</li>
                    <li>Centre for Smart Cyber-Physical Systems (SCPS)</li>
                    <li>Centre for Cyber Security and Privacy (CSP)</li>
                  </ul>
                </div>
              </SeeMore>
            </div>
          </div>
        </div>

        {/* --- PSG CARE FLOATING CARD --- */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 4px 12px rgba(13, 88, 169, 0.5)',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#0d58a9',
                marginBottom: '1rem',
                background: '#0d58a9',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About PSG CARE
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="ease-out-cubic"
              style={{
                width: '150px',
                height: '4px',
                background: '#D9A353',
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1.5fr',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Image Card */}
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 10px 25px -5px rgba(168, 85, 247, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.04)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={psgCareImage}
                alt="PSG CARE"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'contain',
                  borderRadius: '16px',
                }}
              />
            </div>

            {/* Content */}
            <div data-aos="fade-left">
              <p
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                }}
              >
                The PSG Center for Academic Research and Excellence was founded in October, 2015 by the PSG & Sons' Charities Trust with a mission to promote teaching excellence in all the colleges under the Trust. Toward this end, CARE will encourage the use of learner-centric pedagogical practices that facilitate effective learning and will foster dialogue and reflection on effective teaching through workshops, seminars.
              </p>
              <p
                style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.8',
                  color: '#475569',
                  fontSize: '1.1rem',
                  textAlign: 'justify',
                }}
              >
                <strong style={{ color: '#0d58a9' }}>Dr. R. Rudramoorthy</strong> is the Director of PSG CARE. The center also focuses on creating and sustaining effective faculty student relationships and aims to pursue its mission.
              </p>
              
              <SeeMore>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#0d58a9' ,textAlign: 'justify'}}>Mission Objectives</h3>
                  <ul style={{ paddingLeft: '1.5rem', color: '#374151', lineHeight: '1.7',textAlign: 'justify' }}>
                    <li>Helping faculty members assess the effectiveness of their teaching through appropriate student and peer feedback mechanisms</li>
                    <li>Encouraging research activities that enhance the quality of teaching at PSG</li>
                    <li>Supporting dissemination of research findings about the teaching learning process</li>
                  </ul>
                </div>
              </SeeMore>
            </div>
          </div>
        </div>

        {/* --- CONFERENCE SCOPE FLOATING CARD --- */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 4px 12px rgba(13, 88, 169, 0.5)',
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 88, 169, 0.5)';
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
              style={{
                fontSize: '3rem',
                fontWeight: '800',
                color: '#0d58a9',
                marginBottom: '1rem',
                background: '#0d58a9',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Scope of the Conference
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="ease-out-cubic"
              style={{
                width: '150px',
                height: '4px',
                background: '#D9A353',
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: '#fffbeb',
              borderRadius: '16px',
              padding: '2.5rem',
              border: '1px solid #fed7aa',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <p
              style={{
                lineHeight: '1.8',
                color: '#475569',
                fontSize: '1.2rem',
                textAlign: 'justify',
              }}
            >
              Contemporary Intelligent System focuses on methods and algorithms for solving challenging problems and systems that behave intelligently in specialized domains such as medical diagnostics, decision making, security, gene expression analysis, speech and text recognition. The scope of this conference is to welcome original research papers contributing innovative ideas and out of box thinking in broad domains of Artificial Intelligence and allied areas in the perspective of Communication, IoT and Cyber Security. The conference aims to integrate the researchers from industry with academicians and scholars together to interchange their findings and results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;