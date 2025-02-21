import { StyledHome } from "./styles";
import Summary from "./components/Summary/Summary";
import Purchases from "./components/Purchases/Purchases";
import Cards from "./components/Cards/Cards";
import { ListItemProps } from "@/components/List/components/ListItem";
import { PaymentMethods } from "@/constants/PaymentMethods.enum";

function Home() {
  const mockPurchases: ListItemProps[] = [
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
  return (
    <StyledHome>
      <Summary />
      <Cards limit={3000} bill={200} />
      <Purchases
        purchasesList={[
          {
            title: "03/12",
            items: mockPurchases,
          },
          {
            title: "05/12",
            items: mockPurchases,
          },
        ]}
      />
    </StyledHome>
  );
}

export default Home;
