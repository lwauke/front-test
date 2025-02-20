import { NavLink } from "react-router";
import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledNavItem = styled(NavLink)`
  padding: 16px 24px 16px 30px;
  border-radius: 12px 0 0 12px;
  color: ${theme.colors.darkGray};
  display: flex;
  align-items: center;
  &.active {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    svg {
      fill: ${theme.colors.white};
    }
  }
  & svg {
    margin-right: 8px;
    fill: ${theme.colors.darkGray};
  }
  &:not(.active):hover {
    background-color: #efefef;
  }
`;
