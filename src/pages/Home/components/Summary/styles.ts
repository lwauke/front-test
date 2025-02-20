import styled from "styled-components";
import { TABLET_BREAKPOINT } from "../../styles";

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  grid-auto-rows: 140px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${TABLET_BREAKPOINT}) {
    grid-column: 1 / 3;
  }
`;
