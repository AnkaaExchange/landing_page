import Link from "next/link";
import styled from "styled-components";
import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 70px;
  opacity: 0.6;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled(Link)`
  background-image: url("/logo.svg");
  width: 340px;
  background-repeat: no-repeat;
  height: 48px;
  mix-blend-mode: luminosity;
  @media (max-width: 768px) {
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterItem = styled.div`
  margin: 0 1rem;
`;

const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0px 10px 30px 3px ${({ theme }) => theme.colors.primary_3};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      {/* <StyledLogo href={"/"} /> */}
      <FooterLinks>
        <FooterItem>
          <FooterLink href={"/"}>
            <FaTelegramPlane size={36} color={"#fff"} />
          </FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href={"/"}>
            <FaTwitter size={36} color={"#fff"} />
          </FooterLink>
        </FooterItem>
        {/* <FooterItem>
          <FooterLink href={"/"}>
            <FaDiscord size={36} color={"#fff"} />
          </FooterLink>
        </FooterItem> */}
        {/* <FooterItem>
          <FooterLink href={"/"}>
            <FaGithub size={36} color={"#fff"} />
          </FooterLink>
        </FooterItem> */}
        <FooterItem>
          <FooterLink href={"/"}>
            <FaMedium size={36} color={"#fff"} />
          </FooterLink>
        </FooterItem>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
