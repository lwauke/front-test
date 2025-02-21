import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledDashboard = styled.div`
  background: ${theme.colors.primary};
  min-height: 100vh;
  @media (min-width: ${theme.breakpoints.md + 1}px) {
    display: grid;
    grid-template-columns: 280px auto;
    grid-template-rows: 84px auto;
  }
  @media (max-width: ${theme.breakpoints.md}px) {
    padding-top: 24px;
  }
`;

export const StyledMain = styled.main`
  width: 90%;
  margin: 0 auto;
  padding-top: 28px;
`;
