import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyNavbar from "./Components/MyNavbar";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    } else {
      setUsername("");
    }
  });

  return (
    <Router>
      <Header profileName={username}></Header>
      <MyNavbar></MyNavbar>
      <Switch>
        {Pages.map((page) => {
          return (
            <Route exact={page.exact} path={page.path} key="">
              {page.component}
            </Route>
          );
        })}
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
