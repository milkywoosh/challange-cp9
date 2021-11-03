import { useEffect, useState } from "react";
import { Button, Container, Stack, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../Assets/thumbnail-big.png";

const GameDetailPage = () => {
  const [info, setInfo] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem("GameInfo")));
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <div className="mb-5" style={{ height: "600px" }}>
      <Container
        className="game-detail-page-container pt-5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: "25px",
        }}
      >
        <Row>
          <Col className="col-3">
            <h1>{info.Title}</h1>
          </Col>
        </Row>
        <Row className="text-left mt-5 mb-5">
          <Col className="col-8">{info.Description}</Col>
        </Row>
        <Row>
          <Col className="col-4 text-left">
            <Stack direction="horizontal" gap={3}>
              <Button className="btn btn-primary" style={{ fontSize: "16px" }}>
                {username !== "" ? (
                  <Link to="/gamesuit" className="menu-link">
                    PLAY NOW
                  </Link>
                ) : (
                  <Link to="/login" className="menu-link">
                    PLAY NOW
                  </Link>
                )}
              </Button>
              <Button className="btn btn-primary" style={{ fontSize: "16px" }}>
                <Link to="/" className="menu-link">
                  LEADERBOARD
                </Link>
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameDetailPage;
