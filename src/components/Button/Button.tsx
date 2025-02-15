import { KeyboardEvent, MouseEvent } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
  className?: string;
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} className={className}>{text}</StyledButton>
  )
}

export default Button; 
