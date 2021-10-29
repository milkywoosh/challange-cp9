import Register from '../Pages/register/index'
import Login from '../Pages/Login/index'
import LandPage from "../Pages/Home/index";
import GameSuit from '../Pages/GameSuit';

const routes =[
    {
        path :'/register',
        component:<Register/>,
        exact : true,
    },
    {
        path:'/login',
        component:<Login/>
    },
    {
        path:'/landpage',
        component:<LandPage/>
    },
    {
        path:'/gamesuit',
        component:<GameSuit/>
    }


]

export default routes