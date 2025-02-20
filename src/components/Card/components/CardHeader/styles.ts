import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledDefaultHeader = styled.span`
  font-size: 0.75em;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 4px 8px;
  border-radius: 6px;
  align-self: flex-start;
`;

export const StyledGhostHeader = styled.span`
  font-size: 1.5em;
  font-weight: ${theme.typography.fontWeight.light};
  color: ${theme.colors.primary};
`;
