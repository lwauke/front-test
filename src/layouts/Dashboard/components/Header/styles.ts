import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const StyledNotificationContainer = styled.div`
  flex-grow: 1;
  text-align: right;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .logout {
    margin-right: 8px;
    padding-bottom: 3px;
    cursor: pointer;
    color: inherit;
  }
`;
