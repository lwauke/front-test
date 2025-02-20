import { render, screen } from "@testing-library/react";
import List from "./List";
import { PaymentMethods } from "@/constants/PaymentMethods.enum";

describe("List", () => {
  const items = [
    {
      id: 1,
      paymentMethod: PaymentMethods.CREDIT_CARD,
      store: "Test Store",
      amount: 10.0,
    },
    {
      id: 2,
      paymentMethod: PaymentMethods.DEBIT_CARD,
      store: "Grocery store",
      amount: 105.0,
    },
  ];
  const title = "Test List";

  it("renders the list component with correct title and items", () => {
    render(<List items={items} title={title} />);

    const listTitle = screen.getByText(title);
    expect(listTitle).toBeInTheDocument();

    const listItemText = screen.getByText("Grocery store");
    expect(listItemText).toBeInTheDocument();

    const listItemPrice = screen.getByText("R$ 105,00");
    expect(listItemPrice).toBeInTheDocument();
  });
});
