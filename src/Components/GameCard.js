import React from "react";
import { Card } from "react-bootstrap";

const GameCard = ({ title, description }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GameCard;
