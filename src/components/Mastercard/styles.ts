import styled from "styled-components";

// it was not possible to export this as svg, so I decided to develop it
export const StyledMastercard = styled.div`
  position: relative;
  width: 30px;
  height: 18px;
  &::before,
  &::after {
    content: "";
    width: 18px;
    height: 18px;
    display: block;
    border-radius: 50%;
    display: block;
    position: absolute;
  }
  &::before {
    background: #e5031b; // not a color from theme, definitly
    z-index: 1;
    mix-blend-mode: hard-light;
  }
  &::after {
    background: #dc9e3f;
    transform: translateX(70%);
  }
`;
