import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../src/Hooks/useAuth";

import React from 'react'

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
  return (
    auth?.role?.find(role=>allowedRoles?.includes(role))
        ?<Outlet/>
        : auth?.user
            ?<Navigate to='/dashboard' state={{from: location}} replace/>
            :<Navigate to='/login' state={{from: location}} replace/>
  )
}
export default RequireAuth