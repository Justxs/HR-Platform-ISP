import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function DashBoardPage(props) {
  /*useEffect(()=>{
    axios.get('https://localhost:7230/WeatherForecast')
    .then(res=>{
      console.log(res)
      setTest(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])*/
  let navigate = useNavigate();
  if (props.username === undefined ){
    navigate('/');
  }
  return (
    <div className="container bg-white rounded">
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