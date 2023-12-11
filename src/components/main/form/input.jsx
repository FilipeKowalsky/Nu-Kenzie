import React from "react";
import { Input } from "./styledForm";

export const InputDescription = ({ name, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Digite aqui sua descrição"
      value={name}
      onChange={onChange}
    />
  );
};

export const InputValue = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="1"
      value={value}
      onChange={onChange}
    />
  );
};