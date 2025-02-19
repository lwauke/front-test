import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("renders the search input component", () => {
    render(<SearchInput onChange={() => {}} />);
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
  });

  it("calls the onChange callback when input value changes", () => {
    const onChangeMock = jest.fn();
    render(<SearchInput onChange={onChangeMock} />);
    const searchInput = screen.getByRole("textbox") as HTMLInputElement;
    const inputValue = "test value";
    fireEvent.change(searchInput, { target: { value: inputValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(searchInput.value).toBe(inputValue);
  });
});
