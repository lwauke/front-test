import styled from "styled-components";
import { Flexbox } from "@/styles/helpers/Flexbox";
import { theme } from "@/styles/theme";

export const StyledUserName = styled(Flexbox).attrs({
  align: "center",
  as: "span",
})`
  padding-bottom: 3px;
  margin-left: 10px;
  .user {
    font-weight: ${theme.typography.fontWeight.bold};
  }
`;
