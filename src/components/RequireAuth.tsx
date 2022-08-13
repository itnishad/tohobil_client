import React, {useContext} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import authContext from "../context-api/authContext";

const RequireAuth = () =>{

    const {state} = useContext(authContext);
    const location = useLocation();
    return(
        state ? <Outlet/> : <Navigate to="/login" state={ {form:location} } replace />
    )
}

export default RequireAuth