import { HTMLInputTypeAttribute } from "react";
import { Input, Label } from "./styles";

interface FormGroupProps {
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
}

function FormGroup({ label, type, className }: FormGroupProps) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Input type={type} />
    </div>
  )
}

export default FormGroup; 
