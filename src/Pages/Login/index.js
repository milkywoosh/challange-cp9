import React, { useState, useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { firebaseAuthentication } from "../../services/firebase";

export default function Login() {
  const [error, setError] = useState("");
  const passwordRef = useRef();
  const emailRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    var errorCode = error.code;

    if (errorCode === "auth/worng-password") {
      return setError("Login Failed");
      // baru di console
    } else {
      await firebaseAuthentication.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      alert("SuccessFully Login");
      history.push("/landpage");
    }
  }

  return (
    <Container>
      <Form className="register" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}> Login </h1>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="username"
            ref={emailRef}
            placeholder="Enter Email"
            name="email"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            name="password"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Button type="submit">Login </Button>
        <br />
        <br />
        <br />
        <p style={{ color: "white" }}>
          Do not have an account ? Please <Link to="/register"> Register </Link>{" "}
          First
        </p>
      </Form>
    </Container>
  );
}
