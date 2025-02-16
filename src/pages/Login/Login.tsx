import FormGroup from '@/components/FormGroup/FormGroup'
import { BgImage, Container, Form, FormContainer, FormOptions, Paragraph, StyledButton, StyledGreenLogo, StyledPasswordFormGroup, StyledWhiteLogo, SubTitle } from './styles'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '@/redux/api';
import { setCredentials } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberCredentials, setRememberCredentials] = useState(false);

  useEffect(() => {
    setShowError(!!error);
  }, [error]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setShowError(false)
  }
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowError(false)
  }

  const handleRemeberCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberCredentials(e.target.checked);
  }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await login({ username, password }).unwrap();
    dispatch(setCredentials({ token: response?.token, username, rememberCredentials}));
    navigate('/');
  }

  return (
    <Container>
      <StyledWhiteLogo />
      <BgImage />
      <FormContainer>
        <Form onSubmit={handleLogin}>
          <StyledGreenLogo />
          <SubTitle>Bem vindo <span className="green">:)</span></SubTitle>
          <Paragraph>Entre na sua conta</Paragraph>
          <FormGroup label="Usuário" type="text" onChange={handleUsernameChange}/>
          <StyledPasswordFormGroup label="Senha" type="password" onChange={handlePasswordChange}/>
          <FormOptions>
            <span className="w-600">
              <input type="checkbox" name="" id="" onChange={handleRemeberCredentialsChange}/>
              Lembrar dispositivo
            </span>
            <a href="#" className="blue">Esqueceu a senha?</a>
          </FormOptions>
          <StyledButton text={isLoading ? "Carregando" : "Entrar"}/>
          { showError && <p className="red">erro ao logar usuário</p> }
          <p>Não tem conta? <a href="#" className="green w-600">Faça uma agora</a></p>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Login
