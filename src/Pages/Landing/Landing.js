import React from 'react';
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Container,
    Nav,
    Button,
    NavDropdown,
    Form,
    FormControl,
    Offcanvas,
    Carousel
} from 'react-bootstrap';

import Logo from './Aset/smoke.png';
import Img from './Aset/2077.png';
import Img1 from './Aset/Group 46.png';
import Img2 from './Aset/Group 47.png';
import Img3 from './Aset/Group 48.png';
import Img4 from './Aset/Group 49.png';
import Img5 from './Aset/image 43.png';

function Landing() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="gray" variant="dark">
                <Container>
                    <Nav><img src={Logo} href="/"></img></Nav>
                    <Navbar.Brand className="text_seteam" href="/">SeTeam</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Button variant="outline-success" href="/register">Sign Up</Button>
                        <Nav.Link href="/Login">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar className="navbar-dropdown" bg="gray" expand="{false}">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown.Divider />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Nav.Link style={{ color: "white" }} href="/gamesuit">Games</Nav.Link>
                    <Nav.Link style={{ color: "white" }} href='/'>Featured Games</Nav.Link>
                    <Form className="d-flex me-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Container>
            </Navbar>
            <body>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src={Img5}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src={Img}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src={Img}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 className="featured-text" style={{ fontSize: "medium", fontWeight: "bold" }}>
                    Featured Games
                </h1>
                <img src={Img1}></img>
                <img src={Img2}></img>
                <img src={Img3}></img>
                <img src={Img4}></img>
                <Button className="button-all-game" variant="outline-success" href="/">Show All Game</Button>
                <Navbar fixed="bottom" expand="dark" variant="dark" bg="gray">
                    <Container className="buttomnavbar">
                        <Nav className="d-flex flex-row bd-highlight mb-3">
                            <Navbar.Brand className="navbartext" href="/">Home</Navbar.Brand>
                            <Navbar.Brand className="navbartext" href="">About</Navbar.Brand>
                            <Navbar.Brand className="navbartext" href="">Contact Us</Navbar.Brand>
                        </Nav>
                        <Nav className="d-flex flex-row bd-highlight mb-3 d-flex align-items-end">
                            <Navbar.Brand className="navbartext" href="">&copy; 2021</Navbar.Brand>
                        </Nav>
                    </Container>
                </Navbar>
            </body>
        </div>
    );
}

export default Landing;