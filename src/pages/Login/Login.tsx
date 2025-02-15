import FormGroup from '@/components/FormGroup/FormGroup'
import { BgImage, Container, Form, FormContainer, FormOptions, Paragraph, StyledButton, StyledGreenLogo, StyledPasswordFormGroup, StyledWhiteLogo, SubTitle } from './styles'

function Login() {
  return (
    <Container>
      <StyledGreenLogo />
      <StyledWhiteLogo />
      <BgImage />
      <FormContainer>
        <Form>
          <SubTitle>Bem vindo <span className="green">:)</span></SubTitle>
          <Paragraph>Entre na sua conta</Paragraph>
          <FormGroup label="Usuário" type="email" />
          <StyledPasswordFormGroup label="Senha" type="password" />
          <FormOptions>
            <span>
              <input type="checkbox" name="" id="" />
              Lembrar dispositivo
            </span>
            <a href="#" className="green">Esqueceu a senha?</a>
          </FormOptions>
          <StyledButton text="Entrar" onClick={() => {}} />
          <p>Não tem conta? <a href="#" className="green">Faça uma agora</a></p>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Login
