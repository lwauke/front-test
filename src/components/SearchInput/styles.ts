import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledSearchInput = styled.input`
  background: transparent;
  border: 1px solid ${theme.colors.white};
  height: 36px;
  border-radius: 6px;
  width: 240px;
  padding: 8px;
  padding-left: 32px;
  box-sizing: border-box;
  &,
  &::placeholder {
    color: inherit;
  }
`;

export const StyledIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  width: 16px;
`;
