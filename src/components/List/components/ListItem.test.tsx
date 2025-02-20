import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import { PaymentMethods } from "@/constants/PaymentMethods.enum";

describe("ListItem", () => {
  const listItemProps = {
    id: 1,
    paymentMethod: PaymentMethods.CREDIT_CARD,
    store: "Test Store",
    amount: 13.73,
  };

  it("renders the store name and payment method correctly", () => {
    render(<ListItem {...listItemProps} />);

    const storeElement = screen.getByText("Test Store");
    const paymentMethodElement = screen.getByText("Compra no crédito");

    expect(storeElement).toBeInTheDocument();
    expect(paymentMethodElement).toBeInTheDocument();
  });
});
