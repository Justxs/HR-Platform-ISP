import React from 'react'
import { useNavigate } from "react-router-dom";

function DashBoardPage() {
  let navigate = useNavigate();
  return (
    <div className="container bg-white rounded">
      <h1>DashBoardPage</h1>

        <button onClick={() => {navigate("/logout")}}>logout</button>
        <br/>
        <button onClick={() => {navigate("/account")}}>Account</button>
        <br/>
        <button onClick={() => {navigate("/applications")}}>Application list</button>
        <br/>
        <button onClick={() => {navigate("/job")}}>Job ads list</button>
        <br/>
        <button onClick={() => {navigate("/comment")}}>comment</button>
        <br/>
        <button onClick={() => {navigate("/createAccount")}}>create reqruiter</button>
        <br/>
        <button onClick={() => {navigate("/job/create")}}>Create job</button>
        <br/>
        <button onClick={() => {navigate("/jobOffer")}}>Create job offer</button>

    </div>
  )
}

export default DashBoardPage