import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledHelpContainer = styled.div`
  position: absolute;
  bottom: 32px;
  right: 30px;
  left: 30px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: 6px;
  padding: 16px;
  box-sizing: border-box;
`;

export const StyledHelpTitle = styled.h4`
  font-size: 1.5em;
  font-weight: ${theme.typography.fontWeight.bold};
  margin: 0;
`;

export const StyledHelpParagraph = styled.p`
  margin: 10px 0;
  font-size: 1em;
`;
