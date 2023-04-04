import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import configLocal from "../config";
import { message } from 'antd'; // or any other message module you are using
import { Navigate  } from 'react-router-dom'; // for redirecting to a new page

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await registerUser({
      email,
      password,
      name,
    });
    console.log(result)
    if (result.code === 400) {
      message.error(result.message)
    } else {
      message.success('Registrado com Sucesso');
      setLoggedIn(true);
    }

  }
  async function registerUser(credentials) {
    const result = fetch(`${configLocal.API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())

    return result
   }

   if (loggedIn) {
    return <Navigate to="/" />;
    }

    return (
    <div className="Register">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} onSubmit={handleSubmit}>
          Registrar
        </Button>
      </Form>
    </div>
  );
}