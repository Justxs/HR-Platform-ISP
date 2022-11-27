import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'

function HomePage() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <br/>
      <Button onClick={() => {navigate("/login")}}>Sing in</Button>
      <br/>
      <Button onClick={() => {navigate("/register")}}>Sing up</Button>
    </div>
  )
}

export default HomePage