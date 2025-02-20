import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import FormGroup from "@/components/FormGroup/FormGroup";
import {
  StyledBgImage,
  StyledForm,
  StyledParagraph,
  StyledContainer,
  StyledButton,
  StyledGreenLogo,
  StyledPasswordFormGroup,
  StyledWhiteLogo,
  StyledSubTitle,
} from "./styles";
import { useLoginMutation } from "@/redux/api";
import { setCredentials } from "@/redux/authSlice";
import { Flexbox } from "@/styles/helpers/Flexbox";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCredentials, setRememberCredentials] = useState(false);

  useEffect(() => {
    setShowError(!!error);
  }, [error]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setShowError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowError(false);
  };

  const handleRemeberCredentialsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRememberCredentials(e.target.checked);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await login({ username, password }).unwrap();
    dispatch(
      setCredentials({ token: response?.token, username, rememberCredentials }),
    );
    navigate("/");
  };

  return (
    <StyledContainer>
      <StyledWhiteLogo />
      <StyledBgImage />
      <Flexbox grow={1} justify="center" align="center">
        <StyledForm onSubmit={handleLogin}>
          <StyledGreenLogo />
          <StyledSubTitle>
            Bem vindo <span className="green">:)</span>
          </StyledSubTitle>
          <StyledParagraph>Entre na sua conta</StyledParagraph>
          <FormGroup
            className="align-start"
            label="Usuário"
            type="text"
            onChange={handleUsernameChange}
          />
          <StyledPasswordFormGroup
            className="align-start"
            label="Senha"
            type="password"
            onChange={handlePasswordChange}
          />
          <Flexbox justify="space-between">
            <span className="w-600">
              <input
                type="checkbox"
                onChange={handleRemeberCredentialsChange}
                data-testid="keep-logged"
                aria-label="Lembrar dispositivo"
              />
              <span>Lembrar dispositivo</span>
            </span>
            <a href="/" className="blue">
              Esqueceu a senha?
            </a>
          </Flexbox>
          <StyledButton text={isLoading ? "Carregando" : "Entrar"} />
          {showError && <p className="red">erro ao logar usuário</p>}
          <p>
            Não tem conta?{" "}
            <a href="/" className="green w-600">
              Faça uma agora
            </a>
          </p>
        </StyledForm>
      </Flexbox>
    </StyledContainer>
  );
}

export default Login;
