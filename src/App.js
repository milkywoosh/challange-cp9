import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../src/routes/index";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
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
