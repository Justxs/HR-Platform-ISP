import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function DashBoardPage(props) {

  let navigate = useNavigate();
  if (props.username === undefined ){
    navigate('/');
  }
  return (
    <div className="shadow container w-25 bg-white rounded">
      <h1>DashBoardPage</h1>
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

  );
  
}

export default DashBoardPage