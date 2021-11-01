import React, { useState, useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import '../Styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
// import { firebaseAu../Services/firebase/../Services/firebase";
import firebase from "../Services/firebase";
const firebaseAuthentication = firebase.auth();

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
    <div className="login, login-header">
      <Form className="register" onSubmit={handleSubmit}>
      <h1 className="text"><img src="/smoke.png" alt="SeTeam Logo" height="64px" /> SeTeam</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="username">
        <Form.Label className="label">Email</Form.Label>
          <Form.Control className="input"
            type="username"
            ref={emailRef}
            placeholder="Enter Email"
            name="email"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group controlId="email">
        <Form.Label className="label">Password</Form.Label>
          <Form.Control className="input"
            type="password"
            ref={passwordRef}
            placeholder="Password"
            name="password"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Button className="button" type="submit">Login </Button>
        </Form>
        <Form.Label> <Link to="/register" color="inherit"> Don't have an account? SIGN UP NOW </Link> </Form.Label>
    </div>
  );
}
