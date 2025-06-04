import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, typography } from '../styles/commonStyles';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background: linear-gradient(135deg, ${colors.blue}, #0a3d7a);
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Heading = styled.h2`
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  font-family: ${typography.heading.fontFamily};
`;

const Description = styled.p`
  color: ${colors.white};
  font-size: 16px;
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.5;
  font-family: ${typography.body.fontFamily};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;
  font-family: ${typography.body.fontFamily};

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: ${colors.white};
  }
`;

const SubmitButton = styled.button`
  background: ${colors.white};
  color: ${colors.blue};
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  font-family: ${typography.body.fontFamily};

  &:hover {
    transform: translateY(-2px);
    background: #f0f0f0;
  }
`;

const UpdatePopup = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    onClose();
  };

  return (
    <PopupOverlay>
      <PopupContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Heading>2025 UPDATES!!</Heading>
        <Description>Get THE MOST Current Info For The AI Conference</Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your working email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit">Subscribe for Updates</SubmitButton>
        </Form>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default UpdatePopup; 