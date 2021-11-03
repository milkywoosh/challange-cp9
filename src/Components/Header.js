import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import "../Styles/page.style.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Header = () => {
  const location = useLocation();
  const [isDisable, setDisable] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    } else {
      setUsername("");
    }

    if (location.pathname === "/login" || location.pathname === "/signup") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [location.pathname]);

  return (
    <>
      {!isDisable && (
        <div className="header">
          <Stack direction="horizontal" gap={4}>
            <img src="/smoke.png" className="mt-4" alt="" />
            <div className="text-center mt-3">SeTEAM</div>
            <div className="ms-auto">
              {username !== "" ? (
                <Link to="/profile" className="menu-link">
                  Welcome, {username}
                </Link>
              ) : (
                <Link to="/signup" className="menu-link">
                  <Button> Sign Up</Button>
                </Link>
              )}
            </div>
            <div>
              {username !== "" ? (
                <Link
                  to="/"
                  className="menu-link"
                  onClick={() => {
                    setUsername("");
                    localStorage.setItem("username", "");
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <Link to="/login" className="menu-link">
                  Login
                </Link>
              )}
            </div>
          </Stack>
        </div>
      )}
    </>
  );
};

export default Header;
