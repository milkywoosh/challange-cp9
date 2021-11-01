import React from 'react';
import '../Styles/Landing.css';
import {
    Button,
    Carousel,
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Navbar from '../Components/Navbar'

function Landing() {
    return (
        <div>
        <Navbar />
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
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
                </Col>
            </Row>
            <h1 className="featured-text" style={{ fontSize: "medium", fontWeight: "bold" }}>
                Featured Games
            </h1>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <img style={{ width: "22%" }} src="/Group-46.png"></img>
                    <img style={{ width: "22%" }} src="/Group-47.png"></img>
                    <img style={{ width: "22%" }} src="/Group-48.png"></img>
                    <img style={{ width: "22%" }} src="/Group-49.png"></img>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button variant="outline-success" href="/">Show All Game</Button>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Landing;