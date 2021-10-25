import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Landing() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container fluid>
        <Navbar.Brand href="#">SeTeam</Navbar.Brand>
          <Nav className="ms-auto">
            <Button href="/Signup">Sign Up</Button>
            <Nav.Item><Nav.Link href="#action2">Login</Nav.Link></Nav.Item>
          </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default Landing;
