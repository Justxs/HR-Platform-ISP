import React from 'react'
import { useNavigate } from "react-router-dom"


function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <br/>
      <button onClick={() => {navigate("/login")}}>Sing in</button>
      <br/>
      <button onClick={() => {navigate("/register")}}>Sing up</button>
    </div>
  )
}

export default HomePage