import { styled } from "styled-components";
import { theme } from "@/styles/theme";

export const Input = styled.input`
  border: 2px solid ${theme.colors.lightGray};
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: ${theme.colors.darkGray};
`;
