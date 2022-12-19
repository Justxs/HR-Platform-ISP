import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../src/Hooks/useAuth";

import React from 'react'

const RequireAuth = () => {
    const {auth} = useAuth();
    console.log(auth.roles);
  return (
    auth?.roles
        ?<Outlet/>
        :<Navigate to='/login'/>
  )
}
export default RequireAuth