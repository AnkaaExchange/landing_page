import Button from "@/components/Button";
import Header from "@/components/Header";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import dapp from "/dapp.png";
import ReactTypingEffect from "react-typing-effect";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FeaturesCard from "@/components/FeaturesCard";
import RoadMap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      217deg,
      rgba(0, 255, 138, 0.1),
      rgba(255, 0, 148, 0.08) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 0, 4, 1), rgba(0, 0, 4, 1) 70.71%),
    linear-gradient(336deg, rgba(0, 255, 138, 1), rgba(0, 0, 4, 1) 70.71%);
  padding: 0 90px 25px 90px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0 20px 25px 20px;

    /* height: 100vh; */
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroTitle = styled(ReactTypingEffect)`
  color: ${({ theme }) => theme.colors.primary};
  /* box-shadow: inset 0px -8px 20px 0px ${({ theme }) =>
    theme.colors.primary_2},
    0px 10px 30px 3px ${({ theme }) => theme.colors.primary_2}; */
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xxLarge};
  font-family: ${({ theme }) => theme.fonts.body};
  @media (max-width: 768px) {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const StyledHeroImage = styled.img`
  width: 768px;
  height: 448px;
  transition: all 320ms ease-in-out;
  @media (max-width: 768px) {
    width: 448px;
    height: 326px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const FeaturesWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ankaa Exchange | Decentralized Perpetual Exchange</title>
        <meta
          name="Trade BTC, ETH, LINK and other top cryptocurrencies with up to 50x leverage directly from your wallet"
          content="Decentralized Perpetual Exchange"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppWrapper>
        <NoiseOverlay />
        <Header />
        <HeroContainer>
          <HeroTitle
            speed={120}
            eraseSpeed={80}
            text={[
              "Pioneering the Boundless World of Perpetual DEXs on Arbitrum",
            ]}
          />

          <StyledHeroImage src="/dapp.png" alt="heroImg" />

          <ButtonContainer>
            <Button
              title={"IDO - Soon"}
              smWidth={"100%"}
              width={"25%"}
              opacity={0.3}
              disabled
            />
            <Button
              title={"Whitepaper - Soon"}
              smWidth={"100%"}
              width={"25%"}
              disabled
            />
          </ButtonContainer>
        </HeroContainer>
        <About />
        <FeaturesWrapper>
          <FeaturesCard
            title={"Lower Liquidation Risk"}
            desc={
              "A combination of top-notch price feeds decide the timing of liquidations, ensuring that positions remain secure against short-lived market fluctuations."
            }
          />
          <FeaturesCard
            title={"Cut Down on Expenses"}
            desc={
              "Open and close positions with minimal spread and no impact on market prices. Obtain the best possible price without incurring extra charges."
            }
          />
          <FeaturesCard
            title={"Up to 100x leverage"}
            desc={
              "allows traders to open larger positions than their account balance, offering the potential for greater profits."
            }
          />
        </FeaturesWrapper>
        <RoadMap />
        <Tokenomics />
        <Footer />
      </AppWrapper>
    </>
  );
}
