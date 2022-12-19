import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from '../src/Hooks/useAuth';
import { Table } from 'react-bootstrap';

function AccountPage() {
  const {auth} = useAuth();
  const [data, setData] = useState('null');
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5183/account/view',{
        headers:{
          'Authorization':`Bearer ${auth?.token}`,
        },
      })
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);


  
  let navigate = useNavigate();
  return (
    <div className="container bg-white rounded">
      <h1 className="text-center">Account page</h1>
      <br/>
      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/CV")}}>CV upload</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/import")}}>import data from linkedin</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/passwordChange")}}>Reset password</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/edit")}}>edit account</Button>

      <Button style={{display: 'inline-block', margin: '10px'}} className="mb-3" onClick={() => {navigate("/account/deleteUser")}}>DELETE account</Button>
      <br/><br/>

      <h1 className="text-center">Your info</h1>
      <Table striped border hover >
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{data.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{data.lastName}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{data.username}</td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>{data.birthdayDate}</td>
          </tr>
          <tr>
            <td>LinkedIn URL</td>
            <td>{data.linkedInURL}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>{data.about}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{data.phoneNumber}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AccountPage