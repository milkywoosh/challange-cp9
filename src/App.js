import "./App.css";
import GameSuit from "./gamesuit/index.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyNavbar from "./Components/MyNavbar";
import { ProfilePage, EditProfilePage, GameDetailPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <MyNavbar></MyNavbar>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/editprofile" component={EditProfilePage}></Route>
        <Route path="/gamesuit" component={GameSuit}></Route>
        <Route path="/games" component={GameDetailPage}></Route>
        <Footer></Footer>
      </Router>
      {/* <GameSuit /> */}
    </div>
  );
}

export default App;
