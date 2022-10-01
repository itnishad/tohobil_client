import React, { useReducer } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer';
import AuthContext from '../../context-api/authContext';
import { initialState, reducer } from '../../reducer/AuthReducer';
const UserLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <AuthContext.Provider value={{ state, dispatch }}>
    <Navbar />
    <div style={{overflow:"hidden"}}>
      <Outlet />
    </div>
    <Footer />
    </AuthContext.Provider>
    </>
  )
}

export default UserLayout;