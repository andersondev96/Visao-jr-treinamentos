interface InputProps {
  name: string;
  title: string;
  children: ReactNode;
  type: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

import { ChangeEventHandler, ReactNode } from "react";

import { Container, Legend, InputContent } from "../styles/components/Input";

export function Input({
  name,
  title,
  type,
  placeholder,
  onChange,
  children,
}: InputProps) {
  return (
    <Container>
      <Legend>{title}</Legend>
      <InputContent>
        {children}
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
