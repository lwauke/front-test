import styled from "styled-components";
import Button from "@/components/Button/Button";
import { StyledList } from "@/components/List/styles";
import { theme } from "@/styles/theme";
import { StyledCard } from "@/components/Card/styles";

export const StyledPurchases = styled(StyledCard).attrs({
  as: "section",
})`
  padding: 24px;
  ${StyledList} {
    margin-bottom: 12px;
  }
`;

export const StyledHeader = styled.h3`
  font-weight: ${theme.typography.fontWeight.bolder};
  font-size: 1.125em;
  margin-bottom: 16px;
`;

export const StyledButton = styled(Button)`
  max-width: 170px;
  margin-top: 12px;
  margin-left: 50%;
  transform: translateX(-50%);
`;
