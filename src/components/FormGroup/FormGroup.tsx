import { HTMLInputTypeAttribute, ChangeEvent } from "react";
import { Input, Label } from "./styles";

interface FormGroupProps {
  label: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormGroup({ label, type, className, onChange }: FormGroupProps) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Input type={type} onChange={onChange}/>
    </div>
  )
}

export default FormGroup; 
