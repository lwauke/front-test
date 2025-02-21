import styled from "styled-components";
import GreenLogo from "@/assets/logos/green-logo.svg";
import { theme } from "@/styles/theme";

export const StyledGreenLogo = styled.img.attrs({
  src: GreenLogo,
  alt: "Logo do Meu Banco",
})`
  display: block;
  margin: 32px auto 64px;
`;

export const StyledSidebar = styled.aside<{ open: boolean }>`
  background: ${theme.colors.white};
  position: relative;
  grid-row: 1 / 3;
  @media (max-width: ${theme.breakpoints.md}px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({ open }) => (open ? "0" : "-100%")};
    z-index: 2;
    padding-left: 30px;
    transition-duration: 0.3s;
    box-shadow: 0 0 10px #000;
  }
`;

export const StyledCloseBtn = styled.a`
  color: ${theme.colors.darkGray};
  margin-top: 16px;
  display: inline-block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-left: auto;
`;
