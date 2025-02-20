import styled from "styled-components";
import Button from "@/components/Button/Button";
import { CardContainer } from "@/components/Card/styles";
import { ListContainer } from "@/components/List/styles";

export const PurchasesContainer = styled(CardContainer).attrs({
  as: "section",
})`
  padding: 24px;
  ${ListContainer} {
    margin-bottom: 12px;
  }
`;

export const StyledHeader = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const StyledButton = styled(Button)`
  max-width: 170px;
  margin-top: 12px;
  margin-left: 50%;
  transform: translateX(-50%);
`;
