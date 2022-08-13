import React, {useContext} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import authContext from "../context-api/authContext";

const RequireUnAuth = () =>{

    const {state} = useContext(authContext);
    const location = useLocation();
    
    return(
        state ?  <Navigate to="/" state={ {form:location} } /> : <Outlet/> 
    )
}

export default RequireUnAuth