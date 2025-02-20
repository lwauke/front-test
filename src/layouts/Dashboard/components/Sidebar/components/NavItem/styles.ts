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
  }
  & img {
    margin-right: 8px;
  }
  &:not(.active):hover {
    background-color: #efefef;
  }
`;
