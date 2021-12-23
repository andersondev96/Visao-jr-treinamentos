import { ChangeEventHandler } from "react";
import {
  Container,
  Legend,
  InputContent,
} from "../styles/components/InputWithoutIcon";

interface InputProps {
  name: string;
  title: string;
  type: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export function InputWithoutIcon({
  name,
  title,
  type,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <Container>
      <Legend>{title}</Legend>
      <InputContent>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </InputContent>
    </Container>
  );
}
