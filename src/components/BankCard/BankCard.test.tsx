import { render, screen } from "@testing-library/react";
import BankCard from "./BankCard";

describe("BankCard", () => {
  const cardNumber = "1234567890123456";
  const fullName = "John Doe";
  const validity = "12/24";

  it("renders the bank card component with correct props", () => {
    render(
      <BankCard
        cardNumber={cardNumber}
        fullName={fullName}
        validity={validity}
      />,
    );

    const cardNumberParts = screen.getByText("1234");
    expect(cardNumberParts).toBeInTheDocument();
    const fullNameElement = screen.getByText(fullName);
    const validityElement = screen.getByText(validity);
    expect(fullNameElement).toBeInTheDocument();
    expect(validityElement).toBeInTheDocument();
  });
});
