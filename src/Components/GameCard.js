import React from "react";
import { Card, Button } from "react-bootstrap";
import dummyImg from "../Assets/Group 29.png";
const GameCard = ({ title, description }) => {
  return (
    <Card className="bg-dark text-white" key="">
      <Card.Img src={dummyImg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-left">{title}</Card.Title>
        <Card.Text className="text-left">{description}</Card.Text>
        <div className="text-left">
          <Button variant="success" style={{ fontSize: "14px" }}>
            PLAY GAME
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default GameCard;
