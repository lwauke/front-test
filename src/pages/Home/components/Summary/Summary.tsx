import Card from "@/components/Card/Card";
import CardContent from "@/components/Card/components/CardContent/CardContent";
import CardFooter from "@/components/Card/components/CardFooter/CardFooter";
import CardHeader from "@/components/Card/components/CardHeader/CardHeader";
import { SummaryContainer, StyledSummaryCard, StyledPlusIcon } from "./styles";
import { Flexbox } from "@/styles/helpers/Flexbox";

function Summaryy() {
  return (
    <SummaryContainer as="section">
      <Card>
        <Flexbox direction="column">
          <CardHeader text="+6%" variant="ghost" />
          <CardFooter mainText="R$ 3.000,00" description="Gasto desse mês" />
        </Flexbox>
      </Card>
      <Card>
        <Flexbox direction="column">
          <CardHeader text="+23%" variant="ghost" />
          <CardFooter mainText="R$ 3.000,00" description="Recebido desse mês" />
        </Flexbox>
      </Card>
      <Card>
        <Flexbox direction="column">
          <CardHeader text="+R$ 242,13 (+2.54%)" />
          <CardFooter mainText="R$ 9.000,00" description="Investimentos" />
        </Flexbox>
      </Card>
      <Card>
        <Flexbox direction="column">
          <CardFooter mainText="R$ 9.000,00" description="Cartões" />
        </Flexbox>
      </Card>
      <StyledSummaryCard>
        <StyledPlusIcon />
        <span>Configurar atalhos</span>
      </StyledSummaryCard>
    </SummaryContainer>
  );
}

export default Summaryy;
