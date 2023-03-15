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
  @media (max-width: 768px) {
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  opacity: 0.3;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  font-family: ${({ theme }) => theme.fonts.body};
  @media (max-width: 768px) {
  }
`;

const HorizontalLine = styled.hr`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  opacity: 0.1;
  margin: 70px 0 0 0;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
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
    <>
      <HorizontalLine />
      <FooterContainer>
        <FooterWrapper>
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
          <p>&copy; 2023 Ankaa. All rights reserved.</p>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}

export default Footer;
