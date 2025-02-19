import styled from 'styled-components';

export const StyledBankCard = styled.div`
  width: 240px; 
  min-height: 140px;
  background: linear-gradient(248.54deg, #1BC681 1.38%, #0D603F 89.61%);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 16px;
  color: #fff;
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
  & span {
    margin-right: 8px;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
`