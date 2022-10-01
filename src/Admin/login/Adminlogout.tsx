import React,{useContext, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import {logout} from '../../services/auth-service'
import AuthContext from '../../context-api/authContext';

const Logout = ()=>{

    const navigate = useNavigate();
    const {state, dispatch} = useContext(AuthContext);

    useEffect(()=>{
        dispatch({type:'USER', payload:null});
        logout()
        navigate('../../login')
    },[])


    return(
        <></>
    )
}

export default Logout