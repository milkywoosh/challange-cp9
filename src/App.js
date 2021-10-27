import "./App.css";
import GameSuit from "./gamesuit/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import { ProfilePage, EditProfilePage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/editprofile" component={EditProfilePage}></Route>
        <Route path="/gamesuit" component={GameSuit}></Route>
        <Footer></Footer>
      </Router>
      {/* <GameSuit /> */}
    </div>
  );
}

export default App;
