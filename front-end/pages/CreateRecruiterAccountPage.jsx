import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../src/Api/axios';

function CreateRecruiterAccountPage() {
  const [username, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [pwdr, setPwdr] = useState('');
  const [firstname, setName] = useState('');
  const [lastname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  let navigate = useNavigate();
  useEffect(()=>{
    setErrMsg('')
  },[username, password, pwdr,email]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password!==pwdr){
      setErrMsg('Passwords dont match');
      return;
    }
    try{
      const response = await axios.post('/api/register/recruiter',
      JSON.stringify({
        firstname, lastname,
        username, password,
        email
        }),
        {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
        });
      navigate("/login");
    }
    catch(err){
      if(!err?.response){
        setErrMsg('No server response');
      }else if(err.response?.status===409){
        setErrMsg(err.response.data.message);
      }else{
        setErrMsg('Something wrong');
      }
    }
    

  }

  return (
    <div className="shadow container w-50 p-3 bg-white rounded">
      <h1 className="text-center">Create a recruiter account</h1>
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
      <p className='text-danger'>{errMsg}</p>
    </div>
  );
}

export default CreateRecruiterAccountPage