import React, { useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import configLocal from "../config";

export default function Login({ setToken }) {
  console.log(setToken)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({
      email,
      password
    });

    const token = user.tokens.access.token
    setToken(token);
  }
  async function loginUser(credentials) {
    const result = fetch(`${configLocal.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
    return result
   }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}