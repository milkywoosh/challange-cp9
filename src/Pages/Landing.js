import React from 'react';
import '../Styles/Landing.css';
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


import Img from './Aset/2077.png';
import Img1 from './Aset/Group 46.png';
import Img2 from './Aset/Group 47.png';
import Img3 from './Aset/Group 48.png';
import Img4 from './Aset/Group 49.png';
import Img5 from './Aset/image 43.png';

function Landing() {
    return (
        <div>
            <body>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src="/image-43.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src="/2077.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carousel-inner"
                            src="/2077.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 className="featured-text" style={{ fontSize: "medium", fontWeight: "bold" }}>
                    Featured Games
                </h1>
                <img src="/group-46"></img>
                <img src="/group-47"></img>
                <img src="/group-48"></img>
                <img src="/group-49"></img>
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