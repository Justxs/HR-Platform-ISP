import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import JobAdsTable from '../components/JobAdsTable';
import useAuth from '../src/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function JobAdsPage() {
  const {auth} = useAuth();
  const Navigate = useNavigate();
  const [jobAds, setJobAds] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth.token}`
  };
  
  useEffect(() =>  {
    axios.get('http://localhost:5183/api/job-ads', { headers })
    .then(res =>{
      setJobAds(res.data);
    }).catch(res =>{
      setErrMsg(res);
    })
  },[]);
  
  return (
    <div className="container bg-white rounded">
      <h1>JobsAdListPage</h1>
      <p className='text-danger'>{errMsg}</p>
      <Table responsive>
        <thead>
          <tr>{/* hardcoded*/}
            <th>#</th>
            <th>Name</th>
            <th>About</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <JobAdsTable jobAds={jobAds}/>
        </tbody>
      </Table>
    </div>
  )
}

export default JobAdsPage