import { ListItemProps } from "@/components/List/components/ListItem";
import List from "@/components/List/List";
import { PaymentMethods } from "@/constants/PaymentMethods.enum";
import { PurchasesContainer, StyledButton, StyledHeader } from "./styles";

function Purchases() {
  const mockItems: ListItemProps[] = [
    {
      id: 1,
      paymentMethod: PaymentMethods.CREDIT_CARD,
      store: "Store A",
      amount: "R$ 100,00",
    },
    {
      id: 2,
      paymentMethod: PaymentMethods.DEBIT_CARD,
      store: "Store B",
      amount: "R$ 100,00",
    },
    {
      id: 3,
      paymentMethod: PaymentMethods.CREDIT_CARD,
      store: "Store C",
      amount: "R$ 100,00",
    },
  ];
  return (
    <PurchasesContainer>
      <StyledHeader>Últimas compras</StyledHeader>
      <List title="03/12" items={mockItems} />
      <List title="05/12" items={mockItems} />
      <StyledButton text="EXTRATO" />
    </PurchasesContainer>
  );
}

export default Purchases;
