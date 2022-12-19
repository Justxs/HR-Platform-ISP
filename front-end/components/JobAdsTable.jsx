import React from 'react'
import { Button } from 'react-bootstrap';
import axios from '../src/Api/axios';
import useAuth from "../src/Hooks/useAuth";

import { useEffect, useState } from 'react';

 const JobAdsTable = ({jobAds}) => {
  const {auth} = useAuth();

    

    async function DeleteJobAd(jobId) {
        try {
          await axios.delete(`/api/job-ads/${jobId}`,
            {
            headers: {'Authorization': `Bearer ${auth?.token}`},
            withCredentials: true
            });    
        }
        catch (error) {
          console.log(error);
        }
      }
    return(

        <>
        {jobAds.map((info) => (<tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.name}</td>
            <td>{info.about}</td>
            <td>{info.salary}</td>
            <td>
                <Button size="sm" variant="primary" onClick={() => {}}>View</Button>{' '}
                <Button size="sm" variant="warning" onClick={() => {}}>Export</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => DeleteJobAd(info.id)} href="/jobsad">Delete</Button>{' '}
                <Button size="sm" variant="warning" onClick={() => {}}>Edit</Button>{' '}
            </td>
        </tr>))}
        </>
    )
        
  
}
export default JobAdsTable