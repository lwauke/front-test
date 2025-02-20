import BankCard from "@/components/BankCard/BankCard";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import {
  StyledCardsContainer,
  StyledCardsDetails,
  StyledDetailsButton,
  StyledLastPurchase,
  StyledLimit,
  StyledMonthlyLimit,
  StyledSubtitle,
} from "./styles";
import { Flexbox } from "@/styles/helpers/Flexbox";

function Cards() {
  const toLocaleCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <StyledCardsContainer>
      <StyledSubtitle>Cartões</StyledSubtitle>
      <BankCard
        cardNumber="1234123412341234"
        fullName="Tide Cardoso"
        validity="12/32"
      />
      <StyledCardsDetails>
        <span>Limite disponível</span>
        <StyledLimit>R$ 3000,00</StyledLimit>
        <span>Última compra</span>
        <Flexbox justify="space-between" wrap="wrap">
          <span>Bazar Mituzi</span>
          <span>R$ 300,00</span>
        </Flexbox>
      </StyledCardsDetails>
      <div>
        <ProgressBar total={3000} progress={300} $width="240px" />
        <StyledMonthlyLimit>
          <span>Limite mensal: </span>
          <span>
            {toLocaleCurrency(300)} / {toLocaleCurrency(3000)}
          </span>
        </StyledMonthlyLimit>
      </div>
      <StyledDetailsButton text="Mais detalhes" />
    </StyledCardsContainer>
  );
}

export default Cards;
