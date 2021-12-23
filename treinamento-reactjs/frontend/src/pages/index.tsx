import Head from "next/head";
import Link from "next/link";

import { useRef, FormEvent, useState, ChangeEvent, useEffect } from "react";

import { Button } from "../components/Button";
import { InputWithoutIcon } from "../components/InputWithoutIcon";

import { FormHandles } from "@unform/core";

import { Container, Form } from "../styles/pages/Home";
import api from "../services/api";

export default function login() {
  const formRef = useRef<FormHandles>(null);
  const [formData, setFormData] = useState({
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

      const { email, password } = formData;
      const data = new FormData();

      data.append("email", email);
      data.append("password", password);

      const response = await api.get(`/users/`, {
        params: {
          email,
        },
      });

      let key = "";
      for (let i = 0; i < response.data.length; i++) {
        if (
          response.data[i].email === email &&
          response.data[i].password === password
        ) {
          key = response.data[i].id; // usuário consegue entrar
          console.log(typeof key);
        }
      }

      if (key) {
        console.log(key);
        localStorage.setItem("@user", key);
        window.location.href = "/dashboard";
      } else if (!key) {
        alert("Credenciais incorretas! Tente novamente!");
      }
    } catch (err) {
      alert("Erro ao fazer login");
    }
  }

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <div className="logo">
        <img src="/assets/logo.png" />
      </div>

      <Form ref={formRef} onSubmit={handleSubmit}>
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
          placeholder="Digite sua senha"
          onChange={handleInputChange}
        />

        <Button name="ENTRAR" color="#263C9E" />

        <div className="footer">
          <a href="#">
            <span>Esqueci minha senha</span>
          </a>

          <Link href="/newUser">
            <a>
              <span>Cadastrar</span>
            </a>
          </Link>
        </div>
      </Form>
    </Container>
  );
}
