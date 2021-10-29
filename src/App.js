import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyNavbar from "./Components/MyNavbar";
import {
  ProfilePage,
  EditProfilePage,
  GameListPage,
  AddGamePage,
} from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <MyNavbar></MyNavbar>
        <Route path="/profile" component={ProfilePage}></Route>
        <Route path="/editprofile" component={EditProfilePage}></Route>
        <Route path="/games" component={GameListPage}></Route>
        <Route path="/addgame" component={AddGamePage}></Route>
        <Footer></Footer>
      </Router>
      {/* <GameSuit /> */}
    </div>
  );
}

export default App;
