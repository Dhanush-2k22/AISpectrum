import React, { useState } from 'react';
import styled from 'styled-components';
import testimonialImage from './assets/image.png';

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
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
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
  display: flex;
  align-items: center;
  gap: 40px;
  transition: all 0.5s ease;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

const TestimonialImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 20px ${colors.yellow};
  transition: all 0.5s ease;
  cursor: pointer;
  filter: saturate(50%);

  &:hover {
    width: 400px;
    height: 100%;
    border-radius: 15px;
    transform: translateX(-20px);
    filter: saturate(110%);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;

    &:hover {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      transform: none;
    }
  }
`;

const TestimonialContent = styled.div`
  color: ${colors.white};
  flex: 1;
  transition: all 0.5s ease;
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
  }
`;

const TestimonialText = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    font-size: 1em;
    line-height: 1.4;
  }
`;

const TestimonialName = styled.h4`
  font-family: ${typography.heading.fontFamily};
  font-size: 1.2em;
  color: ${colors.yellow};
  margin: 0;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const TestimonialRole = styled.p`
  font-family: ${typography.body.fontFamily};
  font-size: 0.9em;
  color: ${colors.white};
  opacity: 0.9;
  margin-top: 5px;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const SingleTestimonial = () => {
  const testimonial = {
    name: "Dr. Badri N Subudhi",
    role: "Indian Institute of Technology Jammu, India",
    text: "AI Spectrum 2025 is where tomorrow's AI breakthroughs begin—uniting researchers, industry, and innovators to explore AI's origins, impact, future trends, and disruptive applications. More than just a conference, it's a nexus of interdisciplinary knowledge exchange and real‑world impact.",
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
