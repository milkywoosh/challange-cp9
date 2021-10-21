// import React, { useEffect, useState } from "react";
// import fbConfig from "../config/firebase";
// // import firebase from "@firebase/app-compat";

// export const AuthContext = React.createContext()

// export const AuthSystem=({children})=>{
//     const [currentUser,setCurrentUser]=useState(null)

// useEffect(()=>{
//     fbConfig.auth().onAuthStateChanged(setCurrentUser)
// },[])
//    return(
//     <AuthContext.Provider value={{currentUser}}>
//         {children}
//     </AuthContext.Provider>
//     )
// }
   