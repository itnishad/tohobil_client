import React from "react";
import authContext from "../context-api/authContext";
import {getUser} from '../services/auth-service';

const AuthProvider = (props)=>{

    console.log(props)
    const User = getUser();

    <authContext.Provider value={User}>
        {props.children}
    </authContext.Provider>
}

export default AuthProvider