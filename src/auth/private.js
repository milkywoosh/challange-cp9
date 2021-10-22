// import React,{useContext} from 'react'
// import {Route,Redirect} from 'reacet-router-dom'
// import { AuthSystem } from './authContext'

// const PrivateRoute = ({component: RouteComponent,...rest}) =>{
//     const {currentUser} = useContext(AuthSystem)
//     return(
//         <Route
//         {...rest}
//         render={routeProps=>!!currentUser ?(
//             <RouteComponent {...routeProps}/>
//         ) : (
//             <Redirect to={'/ogin'}/>
//         )
//     }
//     />
//     )
// }

// export default PrivateRoute