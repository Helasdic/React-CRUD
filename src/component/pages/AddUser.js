import React, { useState } from "react";
import apiUser from "../api/apiUser";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pesan, setPesan] = useState("");

  const handleRegistration = async (data) => {
    try {
      const result = await apiUser.create(data);
      setPesan(result.data.message);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    username: { required: "Username is required" },
    image: { required: "Image is required" },
    role: { required: "Role is required" },
  };

  return (
    <div>
      <h2 className="text-uppercase text-center">registrasi</h2>
      <h4 className="text-uppercase text-center">Silahkan Isi Data Anda</h4>
      <Container>
        <row>
          <Form onSubmit={handleSubmit(handleRegistration)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" {...register("email", registerOptions.email)} />
              <Form.Text className="text-muted">{errors.email && <p>{errors.email.message}</p>}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register("password", registerOptions.password)} />
              {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" {...register("username", registerOptions.username)} />
              {errors.username && <p>{errors.username.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" {...register("image", registerOptions.image)} />
              {errors.image && <p>{errors.image.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" {...register("role", registerOptions.role)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Control>
              {errors.role && <p>{errors.role.message}</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <div>{pesan}</div>
          </Form>
        </row>
      </Container>
    </div>
  );
};

export default AddUser;
