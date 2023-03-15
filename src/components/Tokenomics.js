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

const TokenomicsHeader = styled.h3`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const Bar = styled.div`
  width: ${(props) => props.width};
  height: 20px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

function Tokenomics() {
  const maxSupply = 1000000000;
  const ido = 400000000;
  const liquidity = 170000000;
  const team = 150000000;
  const futureDevelopments = 150000000;
  const communityRewards = 50000000;
  const burn = 80000000;

  const idoPercentage = (ido / maxSupply) * 100;
  const liquidityPercentage = (liquidity / maxSupply) * 100;
  const teamPercentage = (team / maxSupply) * 100;
  const futureDevelopmentsPercentage = (futureDevelopments / maxSupply) * 100;
  const communityRewardsPercentage = (communityRewards / maxSupply) * 100;
  const burnPercentage = (burn / maxSupply) * 100;

  return (
    <Wrapper>
      <TokenomicsHeader>Tokenomics</TokenomicsHeader>
      <Section>
        <Label>IDO:</Label>
        <Bar width={`${idoPercentage}%`} color="#00FF94" />
        <Label>{idoPercentage.toFixed(2)}%</Label>
      </Section>
      <Section>
        <Label>Liquidity:</Label>
        <Bar width={`${liquidityPercentage}%`} color="#00FF94" />
        <Label>{liquidityPercentage.toFixed(2)}%</Label>
      </Section>
      <Section>
        <Label>Team:</Label>
        <Bar width={`${teamPercentage}%`} color="#00FF94" />
        <Label>{teamPercentage.toFixed(2)}%</Label>
      </Section>
      <Section>
        <Label>Future Developments:</Label>
        <Bar width={`${futureDevelopmentsPercentage}%`} color="#00FF94" />
        <Label>{futureDevelopmentsPercentage.toFixed(2)}%</Label>
      </Section>
      <Section>
        <Label>Community Rewards:</Label>
        <Bar width={`${communityRewardsPercentage}%`} color="#00FF94" />
        <Label>{communityRewardsPercentage.toFixed(2)}%</Label>
      </Section>
      <Section>
        <Label>Burn:</Label>
        <Bar width={`${burnPercentage}%`} color="#00FF94" />
        <Label>{burnPercentage.toFixed(2)}%</Label>
      </Section>
    </Wrapper>
  );
}

export default Tokenomics;
