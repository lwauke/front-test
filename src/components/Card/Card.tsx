import { JSX } from "react";
import { StyledCard } from "./styles";

interface CardProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

function Card({ children, as }: CardProps) {
  return <StyledCard as={as}>{children}</StyledCard>;
}

export default Card;
