import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function JobOfferCreate() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();    

    await fetch('http://localhost:5183/api/JobOffers/create',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        name,
        description,
        salary
      })
    });

    //navigate("/login");
  }

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Create a job offer</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Name of job</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name of job"
              onChange={(event) => setName(event.target.value)}
              />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Job Description"
              onChange={(event) => setDescription(event.target.value)}
              />
          </Form.Group>
        </Col>
        </Row>
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Salary"
            onChange={(event) => setSalary(event.target.value)}
          />
        </Form.Group>        
        <Button className="mb-3" type="submit">Submit job offer</Button>
      </Form>
    </div>
  );
}

export default JobOfferCreate