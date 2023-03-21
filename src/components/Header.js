import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
// import logo from "/logo.svg";
// import logoSm from "/logoSm.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  /* background-color: red; */
  /* background-color: #fff; */
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
`;
const RightSideLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  /* background-color: red; */
  /* background-color: #fff; */
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
`;
const StyledLogo = styled.img`
  margin-right: 60px;
  width: 272px;
  height: 56px;
  @media (max-width: 768px) {
    width: 58px;
    height: 58px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.body};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0px 10px 30px 3px ${({ theme }) => theme.colors.primary_3};
  }
`;

const DisabledNavLink = styled(NavLink)`
  opacity: 0.3;
  pointer-events: none;
`;

const Header = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <HeaderContainer>
        {/* Right Side Menu  */}

        <RightSideLink>
          {width < 768 ? (
            <StyledLogo src="/logoSm.svg" alt="logo" />
          ) : (
            <StyledLogo src="/logo.svg" alt="logo" />
          )}
          <NavLinks>
            <NavItem>
              <DisabledNavLink disabled href={"/"}>
                Dashboard
              </DisabledNavLink>
            </NavItem>
            <NavItem>
              <DisabledNavLink disabled href={"/"}>
                Leaderboard
              </DisabledNavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target={"_blank"}
                href={"https://ankaa.gitbook.io/ankaa-exchange-doc/"}
              >
                Whitepaper
              </NavLink>
            </NavItem>
          </NavLinks>
        </RightSideLink>
        <Button
          title={"Launch app"}
          smWidth={"60%"}
          width={"18%"}
          opacity={0.3}
          disabled
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
