import styled from "styled-components";
import { TABLET_BREAKPOINT } from "@/constants/breakpoints";

export const StyledHome = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: self-start;
  @media (max-width: ${TABLET_BREAKPOINT}) {
    grid-template-columns: 1fr;
  }
`;
