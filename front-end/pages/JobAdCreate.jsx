import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useAuth from '../src/Hooks/useAuth';
import axios from '../src/Api/axios';

function JobAdCreate() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [salary, setSalary] = useState('');
  const [technologyf, setTechnology] = useState('');
  const [levelf, setLevel] = useState('');
  const [data, setData] = useState('');
  const [userID, setUserID] = useState('');

  const {auth} = useAuth();

  

  async function getUserData() {
    try {
      const user = await axios.get("/api/GetMe",
        {
        headers: {'Authorization': `Bearer ${auth?.token}`},
        withCredentials: true
        });
      setData(user.data);

    }
    catch (error) {
      console.log(error);
    }
  }
  




  const handleSubmit = async (e) => {
    e.preventDefault();    

    const requirements = [{
      technology: technologyf,
      level: {
        technologyLevel: levelf
      }
    }]
    await getUserData();
    await axios.post('/api/job-ads',      
      JSON.stringify({
        name,
        about,
        userID: data.id,
        salary,
        requirements
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
      <h1 className="text-center">Create a job ad</h1>
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
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Technology</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Technology"
            onChange={(event) => setTechnology(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Reister">
          <Form.Label>Level</Form.Label>
          <Form.Control
            required
            as="select"
            onChange={(event) => setLevel(parseInt(event.target.value))}
          >
            <option value="1">Intern</option>
            <option value="2">Junior</option>
            <option value="3">Mid</option>
            <option value="4">Senior</option>
          </Form.Control>
        </Form.Group>        
        <Button className="mb-3" type="submit">Submit job offer</Button>
      </Form>
    </div>
  );
}

export default JobAdCreate