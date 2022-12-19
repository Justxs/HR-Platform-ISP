import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../src/Hooks/useAuth';
import { Button } from 'react-bootstrap';
function DashBoardPage() {
    const navigate=useNavigate();
    const {auth} = useAuth();
  return (
    <div className="shadow container w-50 p-3 bg-white rounded">
      <h1 className='text-center'>DashBoardPage</h1>
        <Button onClick={() => {navigate("/applications")}}>Application list</Button>
        <br/>
        <Button onClick={() => {navigate("/job")}}>Job ads list</Button>
        <br/>
        <Button onClick={() => {navigate("/comment")}}>comment</Button>
        <br/>
        <Button onClick={() => {navigate("/createAccount")}}>create reqruiter</Button>
        <br/>
        <Button onClick={() => {navigate("/job/create")}}>Create job</Button>
        <br/>
        <Button onClick={() => {navigate("/jobOffer")}}>Create job offer</Button>
      
    </div>

  );
  
}

export default DashBoardPage