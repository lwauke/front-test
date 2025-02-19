import styled from "styled-components";
import GreenLogo from "../../../../assets/green-logo.svg";

export const StyledGreenLogo = styled.img.attrs({
  src: GreenLogo,
  alt: "Logo do Meu Banco",
})`
  display: block;
  margin: 32px auto 64px;
`;

export const StyledSidebar = styled.aside`
  background: #fff;
  position: relative;
  grid-row: 1 / 3;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-left: auto;
`;
