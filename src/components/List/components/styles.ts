import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Flexbox } from "@/styles/helpers/Flexbox";

export const StyledListItem = styled(Flexbox).attrs({
  as: "li",
  justify: "space-between",
  align: "center",
})`
  padding: 4px;
  border-bottom: 1px solid ${theme.colors.mediumGray};
`;

export const StyledHeader = styled.h5`
  font-weight: ${theme.typography.fontWeight.regular};
  font-size: 0.875em;
  color: ${theme.colors.darkGray};
`;

export const StyledDescription = styled.p`
  font-weight: ${theme.typography.fontWeight.bolder};
  font-size: 0.75em;
  color: ${theme.colors.mediumGray};
`;
