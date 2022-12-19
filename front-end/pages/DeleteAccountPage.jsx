import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../src/Hooks/useAuth';

function DeleteAccountPage() {

  const {auth} = useAuth();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://localhost:5183/account/deleteUser', {
      method: 'DELETE',
      headers: {
        'Authorization':`Bearer ${auth?.token}`,
      },
    })
      navigate("/login");
  };
  return (

    <div className="container bg-white rounded">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center">CONFIRM ACCOUNT DELETION</h1>
        <Button className='m-2' variant="danger" type="submit">
          DELETE
        </Button>
      </Form>
    </div>
  )
}

export default DeleteAccountPage