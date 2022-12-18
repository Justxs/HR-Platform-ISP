import React from 'react'
import { useNavigate } from "react-router-dom";

function AccountPage() {
  let navigate = useNavigate();
  return (
    <div>AccountPage
        <br/>
        <button onClick={() => {navigate("/account/CV")}}>CV upload</button>
        <br/>
        <button onClick={() => {navigate("/account/import")}}>import data from linkedin</button>
        <br/>
        <button onClick={() => {navigate("/account/passwordChange")}}>Reset password</button>
        <br/>
        <button onClick={() => {navigate("/account/edit")}}>edit account</button>
        <br/><br/>
    </div>
  )
}

export default AccountPage