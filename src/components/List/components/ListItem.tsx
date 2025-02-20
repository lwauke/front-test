import { PaymentMethods } from "@/constants/PaymentMethods.enum";
import { StyledDescription, StyledHeader, StyledListItem } from "./styles";

export interface ListItemProps {
  id: number;
  paymentMethod: PaymentMethods;
  store: string;
  amount: string;
}

function ListItem({ id, paymentMethod, store, amount }: ListItemProps) {
  const paymentMethodLabel =
    paymentMethod === PaymentMethods.CREDIT_CARD ? "crédito" : "débito";
  return (
    <StyledListItem key={id}>
      <div>
        <StyledHeader>{store}</StyledHeader>
        <StyledDescription>Compra no {paymentMethodLabel}</StyledDescription>
      </div>
      <span className="green">{amount}</span>
    </StyledListItem>
  );
}

export default ListItem;
