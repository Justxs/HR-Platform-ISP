import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";

import React from 'react'

const useAuth = () => {
  return useContext(AuthContext);
}
export default useAuth;