import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';

import Comitte from './comitte';
import ThemeSection from './Theme/theme.jsx';
import TopicsSection from './Topics/Topics.jsx';
// import CallForPapers from './CallForPaper/CallForPaper.jsx';
import Sponsor from './Sponsor.jsx';
import EventsSection from './events.jsx';
import VenueContactSection from './VenueContactSection.jsx';
import Footer from './Footer.jsx';
import About from './reg-about/about.jsx';
import ImpDates from './reg-about/reg.jsx';
import RegDetails from './reg-about/reg.jsx';
import WelcomeCardSection from './cbeplaces.jsx';
import MainContent from './components/MainContent.jsx';
import TempComponent from './temp.jsx';
import Dates from './imp.jsx';
import SpeakerSection from './speaker.jsx';
import ConferenceSection from './Topics/Topics.jsx';
import PublicationSection from './PublicationSection.jsx';

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: 'none',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M5 12L12 5L19 12"
          stroke="#0D58A9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State to handle which component to show
  const [showTemp, setShowTemp] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Export showTemp state and setter for Navbar to use
  window.appState = {
    showTemp,
    setShowTemp
  };

  // Handle mouse movement to influence the animation
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'committee', 'theme', 'cfp',
        'topics', 'Dates', 'registration', 'events', 'venue-contact',
        'sponsors', 'welcome',
      ];
      
      let currentActiveSection = 'home';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActiveSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 70, // Adjust offset for fixed navbar
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Background Animation */}
      <BackgroundAnimation mousePosition={mousePosition} />
      
      {/* Only show Navbar when not displaying TempComponent */}
      {!showTemp && (
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Navbar />
        </div>
      )}

      {/* Conditionally render content based on state */}
      {showTemp ? (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <TempComponent />
          {/* Back button to return to main page */}
          <div style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 10,
            padding: '10px 20px',
            background: '#004AAD',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
          onClick={() => setShowTemp(false)}>
            ← Back to Main
          </div>
        </div>
      ) : (
        <>
          {/* Main Content */}
          <div id="main-content" className="mainctnt" style={{ position: 'relative', zIndex: 1 }}>
            <MainContent />
          </div>

          {/* Section Content */}
          <div style={{ color: '#FFFFFF', position: 'relative', zIndex: 1 }}>
            <div id="about"><About /></div>
            <br />
            <div id="committee"><SpeakerSection/></div>
            <div id="theme"><ThemeSection /></div><br />
            <div id="topics"><TopicsSection /></div>
            <div id="Publication"><PublicationSection /></div>
            <div id="Dates"><Dates /></div>
            <div id="registration"><RegDetails /></div>
            <div id="events"><EventsSection/></div>
            <div id="venue-contact"><VenueContactSection /></div>
            <div id="sponsors"><Sponsor /></div>
            <div id="welcome"><WelcomeCardSection /></div> {/* Places in Coimbatore */}
            <Footer/>
          </div>
        </>
      )}
      
      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
}

// Background Animation Component
function BackgroundAnimation({ mousePosition }) {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate initial particles
    const generateParticles = () => {
      const newParticles = [];
      const count = 60; // Number of particles
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          speedX: (Math.random() - 0.5) * 0.3, // Constant speed
          speedY: (Math.random() - 0.5) * 0.3, // Constant speed
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Animation loop
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let { x, y, speedX, speedY } = particle;

          // Move particle with constant speed
          x += speedX;
          y += speedY;

          // Wrap around edges instead of bouncing
          if (x > 100) x = 0;
          if (x < 0) x = 100;
          if (y > 100) y = 0;
          if (y < 0) y = 100;

          return { ...particle, x, y };
        })
      );

      requestAnimationFrame(animateParticles);
    };

    const animationFrameId = requestAnimationFrame(animateParticles);

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Remove mousePosition dependency
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'rgba(0, 74, 173, 0.6)',
            borderRadius: '50%',
            opacity: particle.opacity,
            transition: 'none', // Remove any transitions
          }}
        />
      ))}
    </div>
  );
}

export default App;