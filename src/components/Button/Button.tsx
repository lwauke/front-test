import { KeyboardEvent, MouseEvent } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick?: (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
  ) => void;
  className?: string;
  $primary?: boolean;
  $ghost?: boolean;
}

function Button({
  text,
  onClick = () => {},
  className = "",
  $primary = true,
  $ghost = false,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      $primary={$primary}
      $ghost={$ghost}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
