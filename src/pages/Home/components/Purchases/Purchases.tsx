import Card from "@/components/Card/Card";
import { ListItemProps } from "@/components/List/components/ListItem";
import List from "@/components/List/List";
import { PaymentMethods } from "@/constants/PaymentMethods.enum";
import { StyledHeader } from "./styles";
import Button from "@/components/Button/Button";

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
    <Card as="section">
      <StyledHeader>Últimas compras</StyledHeader>
      <List title="03/12" items={mockItems} />
      <List title="05/12" items={mockItems} />
      <Button text="Extrato" />
    </Card>
  );
}

export default Purchases;
