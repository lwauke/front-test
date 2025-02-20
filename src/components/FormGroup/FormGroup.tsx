import { HTMLInputTypeAttribute, ChangeEvent } from "react";
import { StyledInput, StyledLabel } from "./styles";

interface FormGroupProps {
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormGroup({ label, type, className, onChange }: FormGroupProps) {
  return (
    <div className={className}>
      <StyledLabel id={label}>{label}</StyledLabel>
      <StyledInput type={type} onChange={onChange} aria-labelledby={label} />
    </div>
  );
}

export default FormGroup;
