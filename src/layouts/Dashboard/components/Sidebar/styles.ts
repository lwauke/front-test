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

export const StyledSidebar = styled.aside`
  background: ${theme.colors.white};
  position: relative;
  grid-row: 1 / 3;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-left: auto;
`;
