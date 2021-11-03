import { useState } from "react";
import { Card, Container, Carousel, Button } from "react-bootstrap";
import GameCard from "../Components/GameCard";
import bg from "../Assets/thumbnail-big.png";
import bg2 from "../Assets/thumbnail-big-2.jpg";
import bg3 from "../Assets/thumbnail-small-2.png";
import bg4 from "../Assets/thumbnail-small.png";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Container className="home-page">
        {/* <div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ height: "600px" }}
          >
            <Carousel.Item>
              <img className="d-block w-100" src={bg} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bg2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={bg} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div> */}
        <div className="card-thumbnail">
          <Card className="bg-dark text-white">
            <Card.Img src={bg2} alt="Card image" />
            <Card.ImgOverlay>
              <div className="mt-5">
                <Card.Title className="text-left mb-3">
                  <h1> Cyber Punk</h1>
                </Card.Title>
                <Card.Text className="text-left w-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nulla est, auctor mollis dictum sed, malesuada et
                  nisi. Morbi et rutrum tellus. Morbi vitae mollis turpis.
                  Nullam ipsum risus, molestie sed interdum et, consequat nec
                  mi.
                </Card.Text>
              </div>
              <div className="text-left mt-5">
                <Button variant="success" style={{ fontSize: "14px" }}>
                  PLAY GAME
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="card-wrapper">
          <GameCard title="title" description="overview" bg={bg3}></GameCard>
          <GameCard title="title" description="overview"></GameCard>
          <GameCard title="title" description="overview" bg={bg4}></GameCard>
        </div>
        <h3>Featured Games</h3>
        <div className="card-wrapper">
          <GameCard title="title" description="overview" bg={bg3}></GameCard>
          <GameCard title="title" description="overview"></GameCard>
          <GameCard title="title" description="overview" bg={bg4}></GameCard>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
