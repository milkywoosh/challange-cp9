import React, { useState, useRef } from "react";
import { Form, Button, Container, Alert,Nav, Navbar } from "react-bootstrap";
import "../Styles/Sign-up.css";
import { Link, useHistory } from "react-router-dom";
// import { firebaseAuthentication } from "../../Services/firebase";
import firebase from "../Services/firebase";
const firebaseAuthentication = firebase.auth();
// logic 2
export default function Register() {
  const [error, setError] = useState("");
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPassRef.current.value) {
      return setError("Password Did Not Match");
    }
    firebaseAuthentication
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((res) => {
        firebaseAuthentication.currentUser
          .sendEmailVerification()
          .then(() => {
            alert("Please Kindly Check Your Email");
            history.push("/login");
          })
          .catch((error) => {
            setError("Login Failed Check your Credential");
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    
    <Container className="registerbg">
      <Form className="register" onSubmit={handleSubmit}>
        
      <h1 className="textsignup">
        Sign Up
      </h1>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3" controlId="username" style={{ color: "white" }}>
          <Form.Label  style={{fontSize: "medium"}}>Username</Form.Label>
          <Form.Control
            type="username"
            ref={usernameRef}
            placeholder="Username"
            name="username"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label style={{fontSize: "medium"}}>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Example@email.com"
            name="email"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password" >
          <Form.Label style={{fontSize: "medium"}}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            name="password"
            required
          />
        </Form.Group>
        <Form.Text></Form.Text>

        <Form.Group className="mb-3" controlId="confirmpassword">
          <Form.Label style={{fontSize: "medium"}}>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            ref={confirmPassRef}
            name="confirmpass"
            placeholder="Confirm Password"
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="I Already Agree with Terms and Conditions"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                required
              />
            </div>
          ))}
        </Form>
        <Button type="submit">Sign Up</Button>
        
        <p style={{ color: "white", fontSize: "small" }}>
          Have an account ? <Link to="/login">Login here</Link>
        </p>
      </Form>
    
    <Navbar fixed="bottom" expand="dark" variant="dark" bg="gray">
    <Container className="buttomnavbar">
      <Nav className="d-flex flex-row bd-highlight mb-3">
        <Navbar.Brand className="navbartext" href="/">Home</Navbar.Brand>
        <Navbar.Brand className="navbartext" href="">About</Navbar.Brand>
        <Navbar.Brand className="navbartext" href="">Contact Us</Navbar.Brand>
      </Nav>
      <Nav className="d-flex flex-row bd-highlight mb-3 align-items-end">
        <Navbar.Brand className="navbartext" href="">&copy; 2021</Navbar.Brand>
      </Nav>
    </Container>
  </Navbar>
  </Container>
    
  );
}