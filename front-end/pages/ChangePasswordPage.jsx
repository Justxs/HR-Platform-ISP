import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChangePasswordPage() {

  const [password, setPassword] = useState({
    current: '',
    new: '',
  });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://localhost:5183/api/account/passwordChange', {
      method: 'PUT',
      body: JSON.stringify(password),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPassword(data);
      });
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formCurrentPassword">
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password"
          value={password.current}
          onChange={(event) =>
            setPassword({ ...password, current: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNewPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          value={password.new}
          onChange={(event) => setPassword({ ...password, new: event.target.value })}
        />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}

export default ChangePasswordPage