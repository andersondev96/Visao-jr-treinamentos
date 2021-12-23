import React from "react";
import { ChangeEventHandler } from "react";

import { Container } from "../styles/components/DatePickerInput";

interface InputDateProps {
  name: string;
  title: string;
  type: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function DatePickerInput({
  name,
  title,
  type,
  placeholder,
  onChange,
}: InputDateProps) {
  return (
    <Container>
      <label>Data</label>
      <input
        name={name}
        title={title}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Container>
  );
}
