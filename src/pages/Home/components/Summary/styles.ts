import styled from "styled-components";
import { Flexbox } from "@/styles/helpers/Flexbox";
import { theme } from "@/styles/theme";
import { TABLET_BREAKPOINT } from "@/constants/breakpoints";
import { StyledCard } from "@/components/Card/styles";

export const StyledSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  grid-auto-rows: 140px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: initial;
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    grid-column: 1 / 3;
  }
  ${Flexbox} {
    height: 100%;
  }
`;

export const StyledSummaryCard = styled(StyledCard)`
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #eae9e9;
    box-shadow: initial;
  }
`;

export const StyledPlusIcon = styled.span.attrs({
  "aria-label": "ícone de adicionar",
})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.darkGray};
  font-size: 1.5em;
  color: ${theme.colors.white};
  &::after {
    content: "+";
    transform: translate(0px, -1px);
  }
`;
