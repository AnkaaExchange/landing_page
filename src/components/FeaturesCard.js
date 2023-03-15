import React from "react";
import styled, { keyframes } from "styled-components";

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

const CardContainer = styled.div`
  margin: auto 20px;
  text-align: center;
  transition: all 200ms ease-in-out;
  @media (max-width: 768px) {
  }
  &:hover {
    /* padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 12px; */
  }
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.body};

  background-image: linear-gradient(-45deg, #fc5185, #00ff94, #fc5185);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 2s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
  }
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.6;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

function FeaturesCard({ title, desc }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </CardContainer>
  );
}

export default FeaturesCard;
