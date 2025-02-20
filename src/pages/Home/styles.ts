import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: self-start;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
