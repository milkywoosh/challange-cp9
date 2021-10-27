import React from "react";
import { Stack, Form } from "react-bootstrap";
import "../Styles/page.style.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div className="menu">
      <Stack direction="horizontal" gap={4}>
        <AiOutlineMenu
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
          onClick={() => {
            console.log("tes");
          }}
        ></AiOutlineMenu>
        <div>
          <Link to="/gamedetail" className="menu-link">
            Games
          </Link>
        </div>
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
