import { PaymentMethods } from "@/constants/PaymentMethods.enum";
import { StyledListItem } from "./styles";

export interface ListItemProps {
  id: number;
  paymentMethod: PaymentMethods;
  store: string;
  amount: string;
}

function ListItem({ id, paymentMethod, store, amount }: ListItem) {
  const paymentMethodLabel = paymentMethod === PaymentMethods.CREDIT_CARD ? 'crédito' : 'débito';
  return <StyledListItem key={id}>
    <div>
      <p>{store}</p>
      <span>Compra no {paymentMethodLabel}</span>
    </div>
    <span className="green">{amount}</span>
  </StyledListItem>;
}

export default ListItem;