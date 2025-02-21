import styled from "styled-components";
import { StyledCard } from "@/components/Card/styles";
import Button from "@/components/Button/Button";
import { theme } from "@/styles/theme";
import { Flexbox } from "@/styles/helpers/Flexbox";

export const StyledCardsContainer = styled(StyledCard).attrs({
  as: "section",
})`
  display: grid;
  @media (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: 240px 1fr;
  }
  grid-template-rows: auto auto 1fr;
  gap: 18px 60px;
  align-items: stretch;
  padding: 24px;
  font-weight: ${theme.typography.fontWeight.bolder};
`;

export const StyledSubtitle = styled.h3`
  font-size: 1.125em;
  @media (min-width: ${theme.breakpoints.md}px) {
    grid-column: 1 / 3;
  }
`;

export const StyledMonthlyLimit = styled(Flexbox).attrs({
  justify: "space-between",
})`
  font-weight: ${theme.typography.fontWeight.regular};
  font-size: 0.875em;
  margin-top: 4px;
`;

export const StyledCardsDetails = styled(Flexbox).attrs({
  direction: "column",
})`
  min-height: 120px;
  font-size: 1em;
  font-weight: ${theme.typography.fontWeight.light};
  margin: auto 0;
`;

export const StyledLimit = styled.span`
  font-weight: ${theme.typography.fontWeight.bolder};
  font-size: 1.5em;
  margin-bottom: auto;
`;

export const StyledLastPurchase = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledDetailsButton = styled(Button).attrs({ $primary: true })`
  height: auto;
`;
