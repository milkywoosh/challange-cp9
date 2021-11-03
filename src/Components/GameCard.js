import { Card, Button } from "react-bootstrap";
import dummyImg from "../Assets/Group 29.png";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const GameCard = ({ title, description, onClick, bg }) => {
  const history = useHistory();

  return (
    <Card className="bg-dark text-white">
      <Card.Img src={bg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-left">{title}</Card.Title>
        <Card.Text className="text-left card-overview">{description}</Card.Text>
        <div className="text-left">
          <Button
            variant="success"
            style={{ fontSize: "14px" }}
            onClick={onClick}
          >
            PLAY GAME
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

GameCard.defaultProps = {
  bg: dummyImg,
};

export default GameCard;
