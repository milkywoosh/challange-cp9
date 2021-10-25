import React from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function Signup() {
  return (
    <header className="App-header">
      <h1 className="text">
        SIGN UP
      </h1>
      <Form>
        <Form.Group className="form" style={{ color: "white" }}>
          <Form.Label className="label">Username</Form.Label>
          <Form.Control type="username"></Form.Control>
          <Form.Label className="label">Fullname</Form.Label>
          <Form.Control type="fullname"></Form.Control>
          <Form.Label className="label">Email</Form.Label>
          <Form.Control type="email" placeholder="Example@email.com"></Form.Control>
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
          <Form.Label className="label">Confirm Password</Form.Label>
          <Form.Control type="password"></Form.Control>
        </Form.Group>
      </Form>
      <p className="terms">I Already Agree with Terms and Conditions</p>
      <Button className="button">Sign Up</Button>
    </header>
  );
}

export default Signup;
