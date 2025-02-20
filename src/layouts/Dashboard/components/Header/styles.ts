import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Flexbox } from "@/styles/helpers/Flexbox";

export const StyledHeader = styled(Flexbox).attrs({
  as: "header",
  align: "center",
})`
  width: 90%;
  margin: 0 auto;
  color: ${theme.colors.white};
`;

export const StyledNotificationContainer = styled(Flexbox).attrs({
  justify: "flex-end",
  align: "center",
})`
  flex-grow: 1;
  text-align: right;
  margin-right: 10px;
  .logout {
    margin-right: 8px;
    padding-bottom: 3px;
    cursor: pointer;
    color: inherit;
  }
`;
