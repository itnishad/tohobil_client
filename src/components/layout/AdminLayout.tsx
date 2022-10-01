import React, { useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import { initialState, reducer } from '../../reducer/AuthReducer';
import AuthContext from '../../context-api/authContext';

const AdminLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    {console.log(state)}
    <AuthContext.Provider value={{ state, dispatch }}>
    <Outlet/>
    </AuthContext.Provider>
    </>
  )
}

export default AdminLayout;