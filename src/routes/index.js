import NavBar from "../component/navbar";
import Register from '../component/register'
import Login from '../component/login'
import LandPage from "../component/landPage";

const routes =[
    {
        path :'/',
        component:<NavBar/>,
        exact : true,
    },
    {
        path:'/register',
        component:<Register/>
    },
    {
        path:'/login',
        component:<Login/>
    },
    {
        path:'land',
        component:<LandPage/>
    }

]

export default routes