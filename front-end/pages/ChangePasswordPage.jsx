import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../src/Hooks/useAuth';

function ChangePasswordPage() {

  const {auth} = useAuth();
  const [model, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
  });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://localhost:5183/account/passwordChange', {
      method: 'POST',
      body: JSON.stringify(model),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${auth?.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPassword(data);
      });
      navigate("/account");
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formCurrentPassword">
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password"
          value={model.oldPassword}
          onChange={(event) =>
            setPassword({ ...model, oldPassword: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNewPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          value={model.newPassword}
          onChange={(event) => setPassword({ ...model, newPassword: event.target.value })}
        />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}

export default ChangePasswordPage