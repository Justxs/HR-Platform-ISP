import React from 'react'
import { useNavigate } from "react-router-dom";
function LogoutPage() {
  let navigate = useNavigate();
  return (
    <div>LogoutPage
        <button onClick={() => {navigate("/login")}}>login</button>
    </div>
  )
}

export default LogoutPage