import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../src/Hooks/useAuth";

import React from 'react'

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
  return (
    auth?.roles
        ?<Outlet/>
        :<Navigate to='/login'/>
  )
}
export default RequireAuth