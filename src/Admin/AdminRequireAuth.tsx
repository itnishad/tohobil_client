import React, {useContext} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import authContext from "../context-api/authContext";

const RequireAuth = () =>{

    const {state} = useContext(authContext);
    const location = useLocation();
    console.log(state);
    return(
        state?.User.admin ? <Outlet/> : <Navigate to="/admin/login" state={ {form:location} } replace />
    )
}

export default RequireAuth