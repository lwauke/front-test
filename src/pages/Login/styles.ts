import { styled } from 'styled-components';
import bgImage from '../../assets/woman-bg.jpg'
import FormGroup from '@/components/FormGroup/FormGroup';
import Button from '@/components/Button/Button';
import WhiteLogo from '../../assets/white-logo.svg'
import GreenLogo from '../../assets/green-logo.svg'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const BgImage = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: top;
  width: 40%;
  @media (min-width: 1400px) {
    width: 55%;
  }
  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 2200px) {
    max-width: 800px;
  }
  @media (min-width: 2200px) {
    max-width: 1600px;
  }
`;

export const StyledWhiteLogo = styled.img.attrs({ src: WhiteLogo, alt: 'Logo do Meu Banco' })`
  position: absolute;
  top: 42px;
  left: 32px;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const StyledGreenLogo = styled.img.attrs({ src: GreenLogo, alt: 'Logo do Meu Banco' })`
  margin: 16px 0 32px;
  @media (min-width: 993px) {
    display: none;
  }
`;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 48px;
`;

export const Paragraph = styled.p`
  margin: 0 0 48px;
  font-size: 24px;
  font-weight: 300;
  color: #484848;
`

export const FormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  max-width: 360px;
  width: 80%;
`;

export const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledPasswordFormGroup = styled(FormGroup)`
  margin: 4px 0 12px 0;
`

export const StyledButton = styled(Button)`
  margin: 12px 0 16px 0;
`