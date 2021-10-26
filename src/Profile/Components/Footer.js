import React from "react";

import { Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Stack direction="horizontal" gap={5}>
        <div style={{ width: "30px", height: "30px" }}></div>
        <div>Home</div>
        <div>About</div>
        <div>Contact Us</div>
        <div className="ms-auto">© 2021</div>
      </Stack>
    </div>
  );
};

export default Footer;
