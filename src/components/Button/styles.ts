import { styled } from 'styled-components'

export const StyledButton = styled.button`
  background-color: #1BC681;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 24px;
  color: #fff;
  border: none;
  cursor: pointer;
  :active {
    border: initial // provides keyboard accessibility when navigating with tab key
  }
`;
