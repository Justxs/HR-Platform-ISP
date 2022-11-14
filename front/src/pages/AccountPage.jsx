import React from 'react'
import { useNavigate } from "react-router-dom";

function AccountPage() {
  let navigate = useNavigate();
  return (
    <div>AccountPage
        <button onClick={() => {navigate("/account/CV")}}>CV upload</button>
        <button onClick={() => {navigate("/account/import")}}>import data from linkedin</button>
        <button onClick={() => {navigate("/account/passwordReset")}}>Reset password</button>
        <button onClick={() => {navigate("/account/edit")}}>edit account</button>
    </div>
  )
}

export default AccountPage