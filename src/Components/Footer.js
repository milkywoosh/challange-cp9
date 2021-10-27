import React from "react";
import "../Styles/page.style.css";
import { Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Stack direction="horizontal" gap={5}>
        <div></div>
        <div>Home</div>
        <div>About</div>
        <div>Contact Us</div>
        <div className="ms-auto">© 2021</div>
      </Stack>
    </div>
  );
};

export default Footer;
