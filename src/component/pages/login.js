import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import apiUser from "../api/apiUser";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();

  const submitHandler = async () => {
    const login = await apiUser.loginUsers(form);
    console.log(login);
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" className="form-control" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" className="form-control" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </Form.Group>

        <Button variant="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
