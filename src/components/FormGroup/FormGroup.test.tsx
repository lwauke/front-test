import { render, screen, fireEvent } from "@testing-library/react";
import FormGroup from "./FormGroup";

describe("FormGroup", () => {
  it("renders the label and input correctly", () => {
    const label = "Test Label";
    const type = "text";
    render(<FormGroup label={label} type={type} />);

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", type);
  });

  it("calls the onChange callback when input value changes", () => {
    const onChange = jest.fn();
    render(<FormGroup label="Test Label" type="text" onChange={onChange} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Test Value" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
