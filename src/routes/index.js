import Register from '../component/register'
import Login from '../component/login'
import LandPage from "../component/landPage";

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
        path:'/land',
        component:<LandPage/>
    }

]

export default routes