import "./App.css";
import GameSuit from "./gamesuit/index.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/gamesuit" component={GameSuit}></Route>
      </Router>
      {/* <GameSuit /> */}
    </div>
  );
}

export default App;
