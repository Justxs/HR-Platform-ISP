import React from 'react'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useAuth from '../src/Hooks/useAuth';
import axios from '../src/Api/axios';

function JobAdEdit() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [salary, setSalary] = useState('');
  const params = useParams();
  const {auth} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();    

    await axios.put(`/api/job-ads/${params.id}`,      
      JSON.stringify({
        name,
        about,
        salary
      }),
      {
        headers: {'Content-Type' : 'application/json',
                'Authorization': `Bearer ${auth?.token}`},
      }
    );

    //navigate("/login");
  }

  return (
    <div className="container w-25 bg-white rounded">
      <h1 className="text-center">Edit ad {params.id}</h1>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Name of job</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name of job"
              onChange={(event) => setName(event.target.value)}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Reister">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Job Description"
              onChange={(event) => setAbout(event.target.value)}
              />
          </Form.Group>

        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Salary"
            onChange={(event) => setSalary(parseInt(event.target.value))}
          />
        </Form.Group>
        <Button className="mb-3" type="submit">Submit job offer</Button>
      </Form>
    </div>
  );
}

export default JobAdEdit