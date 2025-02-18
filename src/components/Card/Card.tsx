import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
  children:  React.ReactNode;
}

function Card ({ children }: CardProps) {
  return (
    <CardContainer>
      { children }
    </CardContainer>
  );
};

export default Card;