import Head from "next/head";
import Link from "next/link";

import { ChangeEvent, useRef, useState, FormEvent } from "react";

import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Button } from "../components/Button";
import { InputWithoutIcon } from "../components/InputWithoutIcon";

import { FormHandles } from "@unform/core";

import { Container, Form } from "../styles/pages/newUser";
import api from "../services/api";

const NewUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault;

      const { name, email, password } = formData;
      const data = new FormData();

      data.append("name", name);
      data.append("email", email);
      data.append("password", password);

      console.log(formData);

      await api.post("/users", formData);
      alert("Usuário cadastrado com sucesso");
      window.location.href = "/";
    } catch (err) {
      alert("Erro ao realizar o cadastro");
    }
  }

  return (
    <Container>
      <Head>
        <title>Novo Usuário</title>
      </Head>

      <h1>Novo Usuário</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputWithoutIcon
          name="name"
          title="Nome"
          type="text"
          placeholder="Digite seu nome"
          onChange={handleInputChange}
        />
        <InputWithoutIcon
          name="email"
          title="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          onChange={handleInputChange}
        />

        <InputWithoutIcon
          name="password"
          title="Senha"
          type="password"
          placeholder="Digite uma senha"
          onChange={handleInputChange}
        />

        <InputWithoutIcon
          name="password-confirmation"
          title="Confirmar senha"
          type="password"
          placeholder="Digita a sua senha novamente"
          onChange={handleInputChange}
        />

        <Button name="SALVAR" type="submit" color="#263C9E" />

        <div className="footer">
          <Link href="/">
            <a>
              <BiArrowBack size={12} />
              <span> Voltar</span>
            </a>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default NewUser;
