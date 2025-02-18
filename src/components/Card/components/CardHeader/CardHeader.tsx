import { StyledDefaultHeader, StyledGhostHeader } from "./styles";

interface CardHeaderProps {
  variant?: "ghost" | "default",
  text: string
}
function CardHeader({ variant, text }: CardHeaderProps) {
  if (variant === "ghost") {
    return <StyledGhostHeader>{text}</StyledGhostHeader>
  }
  return <StyledDefaultHeader>{text}</StyledDefaultHeader>
}

export default CardHeader;
