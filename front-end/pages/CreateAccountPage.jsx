import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateAccountPage() {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdr, setPwdr] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //navigate("/dashboard");
  }

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Create an account</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              onChange={(event) => setName(event.target.value)}
              />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              onChange={(event) => setSurname(event.target.value)}
              />
          </Form.Group>
        </Col>
        </Row>
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Username"
            onChange={(event) => setUser(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(event) => setPwd(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(event) => setPwdr(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Button className="mb-3" type="submit">Register</Button>
      </Form>
    </div>
  );
}

export default CreateAccountPage