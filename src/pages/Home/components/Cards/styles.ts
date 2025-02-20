import styled from "styled-components";
import { CardContainer } from "@/components/Card/styles";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { StyledProgressBar } from "@/components/ProgressBar/styles";
import Button from "@/components/Button/Button";

export const StyledCardsContainer = styled(CardContainer).attrs({
  as: "section",
})`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 18px 60px;
  align-items: stretch;
  padding: 24px;
`;

export const StyledSubtitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  grid-column: 1 / 3;
`;

export const StyledMonthlyLimit = styled.div`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

export const StyledCardsDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  font-size: 16px;
  font-weight: 300;
  margin: auto 0;
`;

export const StyledLimit = styled.span`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: auto;
`;

export const StyledLastPurchase = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

export const StyledDetailsButton = styled(Button)`
  min-width: 170px;
`;
