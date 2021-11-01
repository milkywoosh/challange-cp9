import React from "react";
import { Stack } from "react-bootstrap";
import "../Styles/page.style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Stack direction="horizontal" gap={4}>
        <img src="/smoke.png" className="mt-4" />
        <div className="text-center mt-3">SeTEAM</div>
        <div className="ms-auto">
          <Link to="/profile" className="menu-link">
            Welcome, prasetion
          </Link>
        </div>
        <div>Log Out</div>
      </Stack>
    </div>
  );
};

export default Header;
