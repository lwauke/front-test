import Button from "@/components/Button/Button";
import {
  StyledHelpContainer,
  StyledHelpTitle,
  StyledHelpParagraph,
} from "./styles";

function Help() {
  return (
    <StyledHelpContainer>
      <StyledHelpTitle>Precisa de ajuda?</StyledHelpTitle>
      <StyledHelpParagraph>
        Fale com um dos nossos especialistas
      </StyledHelpParagraph>
      <Button text="CONTATAR" $ghost />
    </StyledHelpContainer>
  );
}

export default Help;
