import React from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import "../Styles/page.style.css";

const Header = () => {
  return (
    <div className="header">
      <Stack direction="horizontal" gap={4}>
        <img src="/smoke.png" className="mt-4" />
        <div className="text-center mt-3">SeTEAM</div>
        <div className="ms-auto">Welcome, prasetion</div>
        <div>Log Out</div>
      </Stack>
    </div>
  );
};

export default Header;
