import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import ProtectedRoute from "./ProtectedRoute";

const mockStore = configureStore([]);

describe("ProtectedRoute", () => {
  it("renders children when token is present", () => {
    const store = mockStore({
      auth: {
        token: "exampleToken",
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProtectedRoute>
            <div data-testid="children">Test Children</div>
          </ProtectedRoute>
        </MemoryRouter>
      </Provider>,
    );

    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("redirects to login page when token is not present", () => {
    const store = mockStore({
      auth: {
        token: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <ProtectedRoute>Test Children</ProtectedRoute>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.queryByText("Test Children")).not.toBeInTheDocument();
  });
});
