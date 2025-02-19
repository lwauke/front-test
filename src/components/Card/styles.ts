import { JSX } from "react";
import styled from "styled-components";

export const CardContainer = styled.div<{ as: keyof JSX.IntrinsicElements }>`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  color: #484848;
  box-shadow: 0 4px 4px #00000040;
`;
