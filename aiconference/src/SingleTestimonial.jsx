import React from 'react';
import styled from 'styled-components';
import testimonialImage from './assets/5856.jpg';

const colors = {
  white: '#ffffff',
  yellow: '#D9A353',
  blue: '#0d58a9'
};

const typography = {
  heading: {
    fontFamily: "'Poppins', sans-serif"
  },
  body: {
    fontFamily: "'Inter', sans-serif"
  }
};

const TestimonialsContainer = styled.section`
  padding: 80px 0;
  background: ${colors.blue};
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-family: ${typography.heading.fontFamily};
  font-size: 3rem;
  font-weight: 100;
  color: ${colors.yellow};
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${colors.yellow};
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 40px;
  width: 1200px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const TestimonialContent = styled.div`
  color: ${colors.white};
`;

const TestimonialText = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;
`;

const TestimonialName = styled.h4`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.2em;
  color: ${colors.yellow};
  margin: 0;
`;

const TestimonialRole = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 0.9em;
  color: ${colors.white};
  opacity: 0.9;
  margin-top: 5px;
`;

const SingleTestimonial = () => {
  const testimonial = {
    name: "Dr. Badri N Subudhi",
    role: "Indian Institute of Technology Jammu, India",
    text: "AI Spectrum 2025 is where tomorrow’s AI breakthroughs begin—uniting researchers, industry, and innovators to explore AI’s origins, impact, future trends, and disruptive applications. More than just a conference, it’s a nexus of interdisciplinary knowledge exchange and real‑world impact.",
    image: testimonialImage
  };

  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Expert Opinions on AI Spectrum 2025</TestimonialsTitle>
      <TestimonialCard>
        <TestimonialImage src={testimonial.image} alt={testimonial.name} />
        <TestimonialContent>
          <TestimonialText>"{testimonial.text}"</TestimonialText>
          <TestimonialName>{testimonial.name}</TestimonialName>
          <TestimonialRole>{testimonial.role}</TestimonialRole>
        </TestimonialContent>
      </TestimonialCard>
    </TestimonialsContainer>
  );
};

export default SingleTestimonial;
