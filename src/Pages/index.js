import Signup from "./Register";
import Login from "./Login";
import GameSuit from "../Pages/GameSuit";
import Landing from "./Landing";
// import Landing from "./Landing/Landing";
import AddGame from "../Pages/AddGamePage";
import EditProfile from "../Pages/EditProfilePage";
import GameList from "./GameListPage";
import GameDetail from "./GameDetailPage";
import Profile from "./ProfilePage";
import HomePage from "./HomePage";

const pages = [
  {
    path: "/signup",
    component: <Signup />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/gamesuit",
    component: <GameSuit />,
  },
  {
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    path: "/addgame",
    component: <AddGame />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
  {
    path: "/games",
    component: <GameList />,
  },
  {
    path: "/gamedetail",
    component: <GameDetail />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
];

export default pages;
