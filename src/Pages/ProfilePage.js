import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MyNavbar from "../Components/MyNavbar";
import { Container, Row, Button, Col, Stack } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Header></Header>
      <MyNavbar></MyNavbar>
      <Container className="white-text profile-page-container">
        <Row>
          <Col className="col-3">
            <img src="/Ellipse.png" alt="" />
          </Col>
          <Col className="col-9 mt-5">
            <Stack gap={2} className="col-md-5 text-left">
              <h3>@prasetion</h3>
              <h1>Prasetio Nugroho</h1>
              <h5>email@gmail.com</h5>
            </Stack>
          </Col>
        </Row>
        <Row className="text-left mt-5 mb-5">
          <Col className="col-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            turpis orci, maximus finibus felis in, dapibus venenatis diam. Donec
            vehicula enim dolor, non bibendum libero lacinia ut. Sed ac sodales
            tellus. Nunc est lorem, tristique sit amet consequat eu, tincidunt
            at lorem. Phasellus a velit pulvinar, consectetur quam nec, vehicula
            velit. Morbi in enim sit amet nisi interdum finibus. Nullam viverra
            quam rhoncus mollis aliquam. Nam in aliquet dolor. Cras rhoncus
            scelerisque diam, sed interdum sapien eleifend nec. Nam ipsum quam,
            egestas at cursus eu, varius eleifend ipsum. Sed dui tellus, tempus
            congue lacus non, porttitor blandit mauris. Morbi id aliquam enim.
            Curabitur quis eros at mauris varius luctus. Proin sed congue orci,
            id auctor sem.
          </Col>
        </Row>
        <Row>
          <Col className="col-4 text-left">
            <Button className="btn btn-primary" style={{ fontSize: "16px" }}>
              Edit Profile
            </Button>{" "}
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
