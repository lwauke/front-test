import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { useLoginMutation } from "@/redux/api";
// import { setCredentials } from "@/redux/authSlice";
import Login from "./Login";

jest.mock("@/redux/api");
jest.mock("@/redux/authSlice");

const mockStore = configureStore([]);
const initialStore = mockStore({
  auth: {
    token: null,
  },
});

describe("Login", () => {
  beforeEach(() => {
    (useLoginMutation as jest.Mock).mockReturnValue([
      jest.fn(),
      { isLoading: false, error: null },
    ]);
  });

  it("renders the login form", () => {
    render(
      <Provider store={initialStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText("Usuário")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha")).toBeInTheDocument();
    expect(screen.getByText("Lembrar dispositivo")).toBeInTheDocument();
    expect(screen.getByText("Esqueceu a senha?")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByText("Não tem conta?")).toBeInTheDocument();
  });

  it("handles username change", () => {
    render(
      <Provider store={initialStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    const usernameInput = screen.getByLabelText("Usuário") as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    expect(usernameInput.value).toBe("testuser");
  });

  it("handles password change", () => {
    render(
      <Provider store={initialStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    const passwordInput = screen.getByLabelText("Senha") as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(passwordInput.value).toBe("testpassword");
  });

  it("handles remember credentials change", () => {
    render(
      <Provider store={initialStore}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );

    const rememberCredentialsCheckbox = screen.getByLabelText(
      "Lembrar dispositivo",
    ) as HTMLInputElement;
    fireEvent.click(rememberCredentialsCheckbox);

    expect(rememberCredentialsCheckbox.checked).toBe(true);
  });

  // it("handles form submission", async () => {
  //   const mockDispatch = jest.fn();
  //   (setCredentials as jest.Mock).mockReturnValue(jest.fn());
  //   useLoginMutation.mockReturnValue([
  //     jest.fn().mockResolvedValue({ token: "testtoken" }),
  //     { isLoading: false, error: null },
  //   ]);

  //   render(
  //     <Provider store={mockStore}>
  //       <MemoryRouter>
  //         <Login />
  //       </MemoryRouter>
  //     </Provider>,
  //   );

  //   const usernameInput = screen.getByLabelText("Usuário");
  //   const passwordInput = screen.getByLabelText("Senha");
  //   const rememberCredentialsCheckbox = screen.getByLabelText(
  //     "Lembrar dispositivo",
  //   );
  //   const loginButton = screen.getByText("Entrar");

  //   fireEvent.change(usernameInput, { target: { value: "testuser" } });
  //   fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  //   fireEvent.click(rememberCredentialsCheckbox);
  //   fireEvent.click(loginButton);

  //   expect(useLoginMutation).toHaveBeenCalledWith();
  //   expect(mockDispatch).toHaveBeenCalledWith(
  //     setCredentials({
  //       token: "testtoken",
  //       username: "testuser",
  //       rememberCredentials: true,
  //     }),
  //   );
  //   expect(mockNavigate).toHaveBeenCalledWith("/");
  // });
});
