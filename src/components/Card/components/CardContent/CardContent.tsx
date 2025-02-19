import React from "react";
import { StyledCardContent } from "./styles";

interface CardContentProps {
  children: React.ReactNode;
}

function CardContent({ children }: CardContentProps) {
  return <StyledCardContent>{children}</StyledCardContent>;
}

export default CardContent;
