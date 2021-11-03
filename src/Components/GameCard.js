import { Card, Button } from "react-bootstrap";
import dummyImg from "../Assets/Group 29.png";
import { useHistory } from "react-router-dom";

const GameCard = ({ title, description }) => {
  const history = useHistory();

  return (
    <Card className="bg-dark text-white">
      <Card.Img src={dummyImg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-left">{title}</Card.Title>
        <Card.Text className="text-left card-overview">{description}</Card.Text>
        <div className="text-left">
          <Button
            variant="success"
            style={{ fontSize: "14px" }}
            onClick={() => {
              history.push("/gamesuit");
            }}
          >
            PLAY GAME
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default GameCard;
