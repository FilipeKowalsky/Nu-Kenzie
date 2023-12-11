import { Button } from "../buttons/button";
import { Select } from "./select";
import { InputDescription, InputValue } from "./input";
import { SectionContainer, FormContainer } from "./styledForm";
import { Title4, Text } from "../../../styles/text";
import { ValueContainer } from "../valueTotal/value";
import React, { useState } from "react";

export const Form = ({ setProducts }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
  });

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z\s]*$/.test(inputValue)) {
      setFormData({ ...formData, name: inputValue });
    } else if (inputValue === "") {
      setFormData({ ...formData, name: "" });
    }
  };

  const handlePriceChange = (e) => {
    const inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      setFormData({ ...formData, price: inputValue });
    }
  };

  const handleTypeChange = (type) => {
    setFormData({ ...formData, type });
  };

  const generateUniqueId = () => {
    return new Date().getTime().toString();
  };

  const calculateTotalValue = () => {
    const total = products.reduce(
      (accumulator, product) => accumulator + parseFloat(product.price),
      0
    );
    return total;
  };

  const submit = (event) => {
    event.preventDefault();
    if (formData.name && formData.price && formData.type !== "") {
      if (!isNaN(formData.price)) {
        const product = { ...formData, id: generateUniqueId() };
        setProducts((prevProducts) => [...prevProducts, product]);
      } else {
        console.log("Apenas números são permitidos no valor.");
      }
    } else {
      console.log("Preencha todos os campos.");
    }

    setFormData({
      name: "",
      price: "",
      type: "",
    });
  };

  return (
    <>
      <SectionContainer>
        <FormContainer onSubmit={submit}>
          <Title4>Descrição</Title4>
          <InputDescription
            name={formData.name}
            onChange={handleNameChange}
          />
          <Text>Ex: Compra de roupas</Text>
          <Title4>Valor (R$)</Title4>
          <InputValue value={formData.price} onChange={handlePriceChange} />
          <Title4>Tipo de valor</Title4>
          <Select
            formData={formData}
            setFormData={setFormData}
            onChange={handleTypeChange}
          />
          <Button />
        </FormContainer>
        <ValueContainer priceTotal={formData.price} />
      </SectionContainer>
    </>
  );
};
