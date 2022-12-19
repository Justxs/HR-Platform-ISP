import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditAccountPage() {

  const [user, setUser] = useState({});
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:5183/api/account/edit', {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Edit your account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            onChange={(event) => setUser({ ...user, name: event.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            value={user.surname}
            onChange={(event) => setUser({ ...user, surname: event.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={user.username}
            onChange={(event) => setUser({ ...user, username: event.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBirthdayDate">
          <Form.Label>Birthday Date</Form.Label>
          <Form.Control
            type="date"
            value={user.birthdayDate}
            onChange={(event) => setUser({ ...user, birthdayDate: event.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLinkedInURL">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control
            type="text"
            value={user.linkedInUrl}
            onChange={(event) => setUser({ ...user, linkedInUrl: event.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAbout">
          <Form.Label>About</Form.Label>
          <Form.Control
            type="textarea"
            value={user.about}
            onChange={(event) => setUser({ ...user, about: event.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            value={user.phoneNumber}
            onChange={(event) => setUser({ ...user, phoneNumber: event.target.value })}
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default EditAccountPage