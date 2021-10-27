import "./App.css";
import GameSuit from "./gamesuit/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Profile from "./Profile/Profile";
// import EditProfile from "./Pages/EditProfile";

// import pages from "./Pages";

import { ProfilePage, EditProfilePage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/editprofile" component={EditProfilePage}></Route>
        <Route path="/gamesuit" component={GameSuit}></Route>
      </Router>
      {/* <GameSuit /> */}
    </div>
  );
}

export default App;
