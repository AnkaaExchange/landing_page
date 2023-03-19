import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 20px;
  }

  @media screen and (max-width: 768px) {
    .slick-slide > div {
      margin: 10;
    }
  }
`;

const Slide = styled.div`
  background-color: rgba(0, 255, 148, 0.1);
  border: solid 1px ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 10px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.body};
  @media (max-width: 768px) {
  }
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const ListContainer = styled.ul``;

const ListOrder = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider {...settings}>
      <Slide>
        <CardTitle>Stage 1</CardTitle>
        <ListContainer>
          <ListOrder>Idea</ListOrder>
          <ListOrder>Team building</ListOrder>
          <ListOrder>Product development</ListOrder>
          <ListOrder>Audit & KYC</ListOrder>
        </ListContainer>
      </Slide>
      <Slide>
        <CardTitle>Stage 2</CardTitle>
        <ListContainer>
          <ListOrder>Marketing campaign & Community Growth</ListOrder>
          <ListOrder>Release Ankaa Exchange on Arbitrum Goerli</ListOrder>
          <ListOrder>IDO</ListOrder>
          <ListOrder>Dex Listing</ListOrder>
        </ListContainer>
      </Slide>
      <Slide>
        <CardTitle>Stage 3</CardTitle>
        <ListContainer>
          <ListOrder>Marketing campaign</ListOrder>
          <ListOrder>Release Ankaa Exchange on Arbitrum One</ListOrder>
          <ListOrder>Expand to Other blockchains</ListOrder>
          <ListOrder>Interface Improvements</ListOrder>
          <ListOrder>Cex Listings</ListOrder>
        </ListContainer>
      </Slide>
      <Slide>
        <CardTitle>Stage 4</CardTitle>
        <ListContainer>
          <ListOrder>NFT’s floor price leverage</ListOrder>
          <ListOrder>
            Forex & commodities leverage feature up to 1000x
          </ListOrder>
          <ListOrder>
            Development of new features such as take-profit stop-loss
          </ListOrder>
          <ListOrder>zkEVM Integration</ListOrder>
          <ListOrder>Stock leverage feature 150x</ListOrder>
        </ListContainer>
      </Slide>
      <Slide>
        <CardTitle>Roadmap V2</CardTitle>
        <ListContainer>
          <ListOrder>...</ListOrder>
          <ListOrder>...</ListOrder>
          <ListOrder>...</ListOrder>
        </ListContainer>
      </Slide>
    </StyledSlider>
  );
}
