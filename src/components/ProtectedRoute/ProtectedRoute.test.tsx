import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  RouterProvider,
  createMemoryRouter,
  RouteObject,
} from "react-router-dom";
import configureStore from "redux-mock-store";
import { vi } from "vitest";
import ProtectedRoute from "./ProtectedRoute";

const mockStore = configureStore([]);
const mockedUseNavigate = vi.fn();

vi.mock("react-router", async () => {
  const mod = await vi.importActual("react-router-dom");
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

const mockRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div data-testid="children">Test Children</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <div data-testid="login">login</div>,
  },
];

describe("ProtectedRoute", () => {
  it("renders children when token is present", () => {
    render(
      <Provider store={mockStore({ token: "token" })}>
        <RouterProvider
          router={createMemoryRouter(mockRoutes, { initialEntries: ["/"] })}
        />
      </Provider>,
    );

    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("redirect to login when token is null", () => {
    render(
      <Provider store={mockStore({ token: null })}>
        <RouterProvider
          router={createMemoryRouter(mockRoutes, { initialEntries: ["/"] })}
        />
      </Provider>,
    );

    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
