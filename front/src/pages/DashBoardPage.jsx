import React from 'react'
import { useNavigate } from "react-router-dom";
function DashBoardPage() {
  let navigate = useNavigate();
  return (
    <div>DashBoardPage
        <button onClick={() => {navigate("/login")}}>login</button>
        <button onClick={() => {navigate("/register")}}>sing up</button>
        <button onClick={() => {navigate("/logout")}}>logout</button>
        <button onClick={() => {navigate("/account")}}>Account</button>
        <button onClick={() => {navigate("/applications")}}>Application list</button>
        <button onClick={() => {navigate("/job")}}>Job ads list</button>
        <button onClick={() => {navigate("/comment")}}>comment</button>
        <button onClick={() => {navigate("/createAccount")}}>create reqruiter</button>
        <button onClick={() => {navigate("/job/create")}}>Create job</button>
        <button onClick={() => {navigate("/jobOffer")}}>Create job offer</button>
    </div>
  )
}

export default DashBoardPage