import { JSX } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

function Card({ children, as }: CardProps) {
  return <CardContainer as={as}>{children}</CardContainer>;
}

export default Card;
