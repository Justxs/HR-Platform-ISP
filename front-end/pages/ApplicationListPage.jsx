import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CandidateTable from '../components/CandidateTable';
import useAuth from '../src/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ApplicationListPage() {
  const {auth} = useAuth();
  const Navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth.token}`
  };
  useEffect(() =>  {
    axios.get('http://localhost:5183/api/candidate/GetAll', { headers })
    .then(res =>{
      setUsers(res.data);
    }).catch(res =>{
      setErrMsg(res);
    })
  },[]);
  const refresh = async() =>{
    let response = await axios.get('http://localhost:5183/api/candidate/GetAll', { headers })
    setUsers(response.data)
  }
  return (
    <div className="shadow container bg-white rounded">
      <h1>ApplicationListPage</h1>
      <p className='text-danger'>{errMsg}</p>
      <Table responsive>
        <thead>
          <tr>{/* hardcoded*/}
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>LinkedIn</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <CandidateTable users={users} refresh={refresh}/>
        </tbody>
      </Table>
    </div>
  )
}

export default ApplicationListPage