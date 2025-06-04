// import React, { useState, useEffect } from 'react';

import React from 'react';
import styled from 'styled-components';
import psgImage from '../assets/PSGTECH.jpeg';

const ImageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${psgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FixedImage = () => {
  return <ImageWrapper />;
};

export default FixedImage;
