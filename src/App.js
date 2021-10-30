import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../src/routes/index";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {routes.map((route) => {
            return (
              <Route exact={route.exact} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
