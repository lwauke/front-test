import styled from "styled-components";
import { theme } from "@/styles/theme";

export const HelpContainer = styled.div`
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

export const HelpTitle = styled.h4`
  font-size: 1.5em;
  font-weight: ${theme.typography.fontWeight.bold};
  margin: 0;
`;

export const HelpParagraph = styled.p`
  margin: 10px 0;
  font-size: 1em;
`;
