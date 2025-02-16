import { NavLink } from "react-router";
import styled from "styled-components";


export const StyledNavItem = styled(NavLink)`
  padding: 16px 24px 16px 30px;
  border-radius: 12px 0 0 12px;
  color: #484848;
  display: flex;
  align-items: center;
  &.active {
    background: #1BC681;
    color: #fff;
  }
  & img {
    margin-right: 8px;
  }
  &:not(.active):hover {
    background-color: #efefef
  }
`