import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import useAuth from '../src/Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../src/Api/axios';

function CommentPage({}) {
  const{auth} = useAuth();
  const [comm, setComm] = useState('');
  const {state} = useLocation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    try {
      const response= await axios.post(`/api/candidate/WriteComment/${state}/${comm}`,
        {headers: {'Authorization':`Bearer ${auth?.token}`},
        withCredentials: true
        });
      navigate('/applications');
    } catch (err) {
      if(!err?.response){
        console.log(err);
        console.error('No server response');
      }else{
        console.error('Something wrong');
      }
    }
  }
  return (
    <div className="shadow container w-50 p-3 bg-white rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Comment">
            <Form.Label>Comment this user</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Comment"
              onChange={(event) => setComm(event.target.value)}
            />
          </Form.Group>
          <Button type="submit">Comment</Button>
      </Form>
    </div>
  )
}

export default CommentPage