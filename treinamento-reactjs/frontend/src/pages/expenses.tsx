import Head from "next/head";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import { FormHandles } from "@unform/core";
import { MdAttachMoney } from "react-icons/md";

import { Input } from "../components/Input";
import { InputWithoutIcon } from "../components/InputWithoutIcon";

import Select from "../components/Select";
import DatePickerInput from "../components/DatePickerInput";
import Toogle from "../components/Toggle";
import BackPage from "../components/BackPage";

import { Container, Form, ButtonSave } from "../styles/pages/Recip";
import api from "../services/api";

export default function Recip() {
  const formRef = useRef<FormHandles>(null);
  const [checked, setChecked] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    value: "",
    description: "",
    date: "",
  });

  const options = [
    { value: "Alimentação", label: "Alimentação" },
    { value: "Educação", label: "Educação" },
    { value: "Lazer", label: "Lazer" },
    { value: "Moradia", label: "Moradia" },
    { value: "Saúde", label: "Saúde" },
    { value: "Infraestrutura", label: "Infraestrutura" },
    { value: "Viagens", label: "Viagens" },
    { value: "Transporte", label: "Transporte" },
    { value: "Outros", label: "Outros" },
  ];

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: -value });
  }

  function handleSelectCategory(event: ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value;

    setSelectedCategory(category);
  }

  async function handleSubmit(event: FormEvent) {
    try {
      const user_id = localStorage.getItem("@user");
      const { value, description, date } = formData;

      const category = selectedCategory;
      const isFixed = checked;

      const response = await api.post(
        `/finances/${localStorage.getItem("@user")}`,
        {
          user_id,
          value,
          description,
          date,
          category,
          isFixed,
        }
      );
      window.location.href = "/dashboard";
      alert("Transação cadastrada com sucesso");
    } catch (err) {
      alert("Erro ao cadastrar transação");
    }
  }

  return (
    <Container>
      <Head>
        <title>Cadastrar Despesa | MyFinances</title>
      </Head>
      <BackPage />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastrar Despesa</h1>
        <Input
          name="value"
          type="text"
          title="Valor"
          onChange={handleValueChange}
        >
          <MdAttachMoney size={24} />
        </Input>

        <InputWithoutIcon
          name="description"
          type="text"
          title="Descrição"
          onChange={handleInputChange}
        />

        <DatePickerInput
          name="date"
          title="Data"
          type="date"
          onChange={handleInputChange}
        />

        <Select
          name="category"
          label="Categoria"
          value={selectedCategory}
          onChange={handleSelectCategory}
          options={options}
        />

        <Toogle
          checked={checked}
          onChange={(e) => {
            setChecked(e);
          }}
        />

        <ButtonSave>
          <button type="submit">Salvar</button>
        </ButtonSave>
      </Form>
    </Container>
  );
}
