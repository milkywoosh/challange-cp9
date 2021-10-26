import React from "react";
import { Stack, Form, Button, Col } from "react-bootstrap";
import styles from "../Styles/profile.style.css";
import { AiOutlineMenu } from "react-icons/ai";

const MyNavbar = () => {
  return (
    <div className="menu">
      <Stack direction="horizontal" gap={4}>
        <AiOutlineMenu
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        ></AiOutlineMenu>
        <div>Games</div>
        <div>Featured Games</div>
        <div className="vr" />
        <Form.Control
          style={{
            background: "transparent",
            borderWidth: "0px",
            fontSize: "16px",
            color: "white",
          }}
          className="me-auto"
          placeholder="Search games . . ."
        />
      </Stack>
    </div>
  );
};

export default MyNavbar;
