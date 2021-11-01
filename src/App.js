import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../src/routes/index";
// import NavBar from "../src/Components/Navbar.js";
import Footer from "../src/Components/Footer.js";

function App() {
  return (
    <Router>
        {/* <NavBar /> */}
        <Switch>
          {routes.map((route) => {
            return (
              <Route exact={route.exact} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
