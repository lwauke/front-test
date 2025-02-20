import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Flexbox } from "@/styles/helpers/Flexbox";

export const StyledBankCard = styled.div`
  width: 240px;
  min-height: 140px;
  font-family: "JetBrains Mono";
  background: linear-gradient(
    248.54deg,
    ${theme.colors.primary} 1.38%,
    ${theme.colors.forestGreen} 89.61%
  );
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 16px;
  color: ${theme.colors.white};
`;

export const StyledLogoIcon = styled.img`
  width: 90px;
  display: block;
  margin-bottom: 16px;
`;

export const StyledChipIcon = styled.img`
  width: 26px;
  margin-right: 8px;
`;

export const StyledContactlessIcon = styled.img`
  width: 20px;
`;

export const StyledCardNumber = styled.p`
  margin: 16px 0;
  font-size: 14px;
  & span {
    margin-right: 8px;
  }
`;

export const StyledFullName = styled.span`
  font-size: 12px;
`;

export const StyledValidityContainer = styled(Flexbox).attrs({
  direction: "column",
})`
  font-size: 6px;
`;

export const StyledValidity = styled.span`
  font-size: 9px;
`;
