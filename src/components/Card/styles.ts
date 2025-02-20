import { JSX } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledCard = styled.div<{ as: keyof JSX.IntrinsicElements }>`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  color: ${theme.colors.darkGray};
  box-shadow: 0 4px 4px #00000040;
`;
