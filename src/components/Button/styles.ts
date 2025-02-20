import { styled } from "styled-components";
import { theme } from "@/styles/theme";

interface StyledButtonProps {
  $primary?: boolean;
  $ghost?: boolean;
  border?: "primary" | "white";
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ $ghost }) => {
    return $ghost ? "transparent" : theme.colors.primary;
  }};
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 24px;
  color: ${({ $ghost, color, $primary }) => {
    if ($primary) return theme.colors.white;
    if ($ghost) return theme.colors.primary;
    return color;
  }};
  border: 1px solid;
  border-color: ${({ $ghost, border, $primary }) => {
    if ($primary) return "none";
    if ($ghost) return theme.colors.white;
    return border;
  }};
  cursor: pointer;
  :active {
    border: initial; // provides keyboard accessibility when navigating with tab key
  }
`;
