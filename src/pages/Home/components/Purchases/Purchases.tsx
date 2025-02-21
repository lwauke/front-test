import { ListItemProps } from "@/components/List/components/ListItem";
import List from "@/components/List/List";
import { StyledButton, StyledHeader, StyledPurchases } from "./styles";

interface PurchaseList {
  title: string;
  items: ListItemProps[];
}

interface PurchasesProps {
  purchasesList: PurchaseList[];
}

function Purchases({ purchasesList }: PurchasesProps) {
  return (
    <StyledPurchases>
      <StyledHeader>Últimas compras</StyledHeader>
      {purchasesList.map((purchase) => (
        <List title={purchase.title} items={purchase.items} />
      ))}
      <StyledButton text="EXTRATO" />
    </StyledPurchases>
  );
}

export default Purchases;
