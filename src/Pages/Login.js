import React, { useState, useRef } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "../Styles/page.style.css";
// import "../Styles/Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { firebaseAu../Services/firebase/../Services/firebase";
import { Link, useHistory } from "react-router-dom";
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
      localStorage.setItem("username", emailRef.current.value);
      history.push("/");
    }
  }

  return (
    <div className="row justify-content-md-center login-page">
      <Container className="col-3">
        <div class="hstack gap-2 justify-content-center">
          <div>
            <img src="./smoke.png" alt="" />
          </div>
          <div>SeTEAM</div>
        </div>

        <Form className="register mt-5" onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="username">
            <div className="mb-1">Email</div>
            <Form.Control
              type="username"
              ref={emailRef}
              placeholder="Enter Email"
              name="email"
              required
            />
            <Form.Text></Form.Text>
          </Form.Group>

          <Form.Group controlId="email">
            <div className="mt-3 mb-1">Password</div>
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Password"
              name="password"
              required
            />
            <Form.Text></Form.Text>
          </Form.Group>
          <div className="mt-4 mw-100">
            <Button type="submit" style={{ fontSize: "16px", width: "100%" }}>
              Login
            </Button>
          </div>
        </Form>
        <Link to="/signup" className="menu-link">
          Don't have an account? Sign Up Now!
        </Link>
      </Container>
    </div>
  );
}
