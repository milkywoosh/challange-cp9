import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../Styles/page.style.css";

const EditProfilePage = () => {
  return (
    <div>
      <Container className="edit-profile-page">
        <Row className="justify-content-center">
          <Col className="col-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <div className="text-left">Username</div>
                <Form.Control type="username" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicFullname">
                <div className="text-left">Full Name</div>
                <Form.Control type="fullname" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicProfile">
                <div className="text-left">Describe Yourself</div>
                <Form.Control type="profile" placeholder="who are you?" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="text-left">Email address</div>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="text-left">Password</div>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button
                className="mt-3"
                style={{ fontSize: "16px", width: "100%" }}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditProfilePage;
