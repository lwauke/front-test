import Button from "@/components/Button/Button";
import { HelpContainer, HelpTitle, HelpParagraph } from "./styles";

function Help() {
  return (
    <HelpContainer>
      <HelpTitle>Precisa de ajuda?</HelpTitle>
      <HelpParagraph>Fale com um dos nossos especialistas</HelpParagraph>
      <Button text="CONTATAR" $ghost />
    </HelpContainer>
  );
}

export default Help;
