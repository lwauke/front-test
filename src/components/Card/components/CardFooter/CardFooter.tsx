import { StyledDescription, StyledMainText } from "./styles";

interface CardFooterProps {
  mainText: string;
  description?: string;
}
function CardFooter({ mainText, description }: CardFooterProps) {
  return (
    <>
      <StyledDescription>{description}</StyledDescription>
      <StyledMainText>{mainText}</StyledMainText>
    </>
  );
}

export default CardFooter;
