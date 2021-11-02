import Signup from '../Pages/Register'
import Login from '../Pages/Login'
import LandPage from "../Pages/Home";
import Login from '../Pages/Login/index'
import LandPage from "../Pages/Landing/Landing";
import GameSuit from '../Pages/GameSuit';
import Landing from '../Pages/Landing';
// import AddGame from '../Pages/AddGamePage';
// import EditProfile from '../Pages/EditProfilePage';
// import GameList from '../Pages/GameListPage';
// import Profile from '../Pages/ProfilePage';


const routes =[
    {
        path :'/signup',
        component:<Signup/>,
        exact : true,
    },
    {
        path:'/login',
        component:<Login/>
    },
    {
        path:'/landpage',
        component:<Landing/>
    },
    {
        path:'/gamesuit',
        component:<GameSuit/>
    },
    {
        path:'/',
        component:<Landing/>
    },
    // {
    //     path :'/addgame',
    //     component:<AddGame/>,
    // },
    // {
    //     path:'/editprofile',
    //     component:<EditProfile/>
    // },
    // {
    //     path:'/gamelist',
    //     component:<GameList/>
    // },
    // {
    //     path:'/profile',
    //     component:<Profile/>
    // }


]

export default routes