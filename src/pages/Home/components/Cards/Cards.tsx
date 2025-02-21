import BankCard from "@/components/BankCard/BankCard";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import {
  StyledCardsContainer,
  StyledCardsDetails,
  StyledDetailsButton,
  StyledLimit,
  StyledMonthlyLimit,
  StyledSubtitle,
} from "./styles";
import { Flexbox } from "@/styles/helpers/Flexbox";
import { format } from "@/helpers/currency";

interface CardsProps {
  limit: number;
  bill: number;
}

function Cards({ limit, bill }: CardsProps) {
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
        <StyledLimit>{format(limit)}</StyledLimit>
        <span>Última compra</span>
        <Flexbox justify="space-between" wrap="wrap">
          <span className="w-600">Bazar Mituzi</span>
          <span className="w-600">R$ 300,00</span>
        </Flexbox>
      </StyledCardsDetails>
      <div>
        <ProgressBar progress={bill} total={limit} width="240px" />
        <StyledMonthlyLimit>
          <span>Limite mensal: </span>
          <span>
            {format(bill)} / {format(limit)}
          </span>
        </StyledMonthlyLimit>
      </div>
      <StyledDetailsButton text="Mais detalhes" />
    </StyledCardsContainer>
  );
}

export default Cards;
