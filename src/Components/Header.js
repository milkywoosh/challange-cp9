import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import "../Styles/page.style.css";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ isLogin, profileName }) => {
  const isLoggedIn = isLogin;
  const location = useLocation();
  const [isDisable, setDisable] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
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
              {isLoggedIn ? (
                <Link to="/profile" className="menu-link">
                  Welcome, {profileName}
                </Link>
              ) : (
                <Link to="/signup" className="menu-link">
                  <Button> Sign Up</Button>
                </Link>
              )}
            </div>
            <div>
              {isLoggedIn ? (
                <Link to="/logout" className="menu-link">
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

Header.defaultProps = {
  isLogin: false,
  profileName: "prasetion",
};

Header.propTypes = {
  isLogin: PropTypes.bool,
  profileName: PropTypes.string,
};

export default Header;
