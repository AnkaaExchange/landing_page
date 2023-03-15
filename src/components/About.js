import React from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import Chart from "/public/chart.json";

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

const AboutContainer = styled.div`
  display: flex;
  /* align-items: flex-start; */
  flex-direction: row;
  /* justify-content: space-between; */
  margin-top: 120px;
  /* text-align: center; */
  @media (max-width: 768px) {
    margin: auto 20px;
    text-align: center;
    /* width: 100%; */
  }
`;

const AboutWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  /* justify-content: space-between; */
  /* z-index: 1; */
  @media (max-width: 768px) {
  }
`;

const AboutTitle = styled.h3`
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

const AboutText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  width: 75%;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    width: 95%;
  }
`;

const LottieStyles = styled(Lottie)`
  width: 100%;
  /* height: 500px; */
  @media (max-width: 768px) {
    display: none;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutTitle>About</AboutTitle>
        <AboutText>
          Ankaa Exchange operates as a decentralized exchange, offering both
          spot and perpetual trading options with incredibly low swap fees and
          zero price impact trades. Its innovative multi-asset pool enables
          liquidity providers to earn fees from market making, swap fees, and
          leverage trading, making it a uniquely attractive option in the world
          of cryptocurrency trading.
        </AboutText>
      </AboutWrapper>
      <LottieStyles animationData={Chart} />
    </AboutContainer>
  );
}

export default About;
