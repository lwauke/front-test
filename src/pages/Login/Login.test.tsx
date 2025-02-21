import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { vi } from "vitest";
import { createMemoryRouter, RouteObject, RouterProvider } from "react-router";
// import { setCredentials } from "@/redux/authSlice";
import Login from "./Login";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const mockedUseSelector = vi.fn();
const mockStore = configureStore([]);
const mockRoutes: RouteObject[] = [
  {
    path: "/protected",
    element: (
      <ProtectedRoute>
        <div data-testid="children">Test Children</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: <Login />,
  },
];

describe("Login", () => {
  beforeEach(() => {
    vi.mock("react-redux", async () => {
      const mod = await vi.importActual("react-redux");
      return {
        ...mod,
        useSelector: () => mockedUseSelector,
      };
    });
  });

  it("renders the login form", () => {
    mockedUseSelector.mockReturnValue({ token: null });
    render(
      <Provider store={mockStore({ token: null })}>
        <RouterProvider
          router={createMemoryRouter(mockRoutes, { initialEntries: ["/"] })}
        />
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
      <Provider store={mockStore({ token: null })}>
        <RouterProvider
          router={createMemoryRouter(mockRoutes, { initialEntries: ["/"] })}
        />
      </Provider>,
    );
    const usernameInput = screen.getByLabelText("Usuário") as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    expect(usernameInput.value).toBe("testuser");
  });

  it("handles password change", () => {
    render(
      <Provider store={mockStore({ token: null })}>
        <RouterProvider
          router={createMemoryRouter(mockRoutes, { initialEntries: ["/"] })}
        />
      </Provider>,
    );

    const passwordInput = screen.getByLabelText("Senha") as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(passwordInput.value).toBe("testpassword");
  });

  it("handles remember credentials change", () => {
    render(
      <Provider store={mockStore({ token: null })}>
        <RouterProvider
          router={createMemoryRouter(mockRoutes, { initialEntries: ["/"] })}
        />
      </Provider>,
    );

    const rememberCredentialsCheckbox = screen.getByLabelText(
      "Lembrar dispositivo",
    ) as HTMLInputElement;
    fireEvent.click(rememberCredentialsCheckbox);

    expect(rememberCredentialsCheckbox.checked).toBe(true);
  });
});
