import React from "react";
import styled, { keyframes } from "styled-components";
import { Carousel } from "./Carousel";

const gradientAnimation = keyframes`
  0% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const RoadmapContainer = styled.div`
  @media (max-width: 768px) {
  }
`;

const HeaderTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  font-family: ${({ theme }) => theme.fonts.body};
  background-image: linear-gradient(-45deg, #fc5185, #00ff94, #fc5185);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 2s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
  }
`;

function RoadMap() {
  return (
    <RoadmapContainer>
      <HeaderTitle>Roadmap</HeaderTitle>
      <Carousel />
    </RoadmapContainer>
  );
}

export default RoadMap;
