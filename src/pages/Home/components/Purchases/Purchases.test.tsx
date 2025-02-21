import { render, screen } from "@testing-library/react";
import Purchases from "./Purchases";
import { PaymentMethods } from "@/constants/PaymentMethods.enum";

const mockPurchases = [
  {
    id: 1,
    paymentMethod: PaymentMethods.CREDIT_CARD,
    store: "Bazar Mituzu",
    amount: 300,
  },
  {
    id: 2,
    paymentMethod: PaymentMethods.DEBIT_CARD,
    store: "Lanchonete Dez",
    amount: 100,
  },
  {
    id: 3,
    paymentMethod: PaymentMethods.CREDIT_CARD,
    store: "Loja Tatame Velho",
    amount: 700,
  },
];
const mockPurchasesList = [
  {
    title: "Purchase 1",
    items: mockPurchases,
  },
  {
    title: "Purchase 2",
    items: mockPurchases,
  },
];

describe("Purchases", () => {
  it("renders the component with the correct title and items", async () => {
    render(<Purchases purchasesList={mockPurchasesList} />);

    expect(screen.getByText("Últimas compras")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 4, name: "Purchase 1" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Purchase 2")).toBeInTheDocument();
    expect(screen.getByText("EXTRATO")).toBeInTheDocument();
  });
});
