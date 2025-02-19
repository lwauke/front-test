import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders the button component with correct text", () => {
    const buttonText = "Click me";
    render(<Button text={buttonText} />);

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button text="Click me" onClick={onClickMock} />);

    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies the provided className to the button", () => {
    const className = "custom-button";
    render(<Button text="Click me" className={className} />);

    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toHaveClass(className);
  });
});
