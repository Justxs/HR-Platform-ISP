import React from 'react'
import { Button } from 'react-bootstrap';
import axios from '../src/Api/axios';
import { useEffect, useState } from 'react';
import CommentPage from '../pages/CommentPage';
import { useNavigate } from 'react-router-dom';
import useAuth from '../src/Hooks/useAuth';

 const CandidateTable = ({users, refresh}) => {
    const navigate = useNavigate()
    const {auth} = useAuth();
    const handleSubmit = (event) => {
        fetch(`http://localhost:5183/api/candidate/DeleteComment/${event}`, {
          method: 'DELETE',
          headers: {
            'Authorization':`Bearer ${auth?.token}`,
          },
        })
      };
      const offer = (event) => {
        fetch(`http://localhost:5183/DownloadOffer/${event}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            'Authorization':`Bearer ${auth?.token}`,
          },
        }).then((response) => {
            response.blob().then((blob) => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement("a");
              a.href = url;
              a.download = "JobOffer.docx";
              a.click()});
            });
      };

    return(

        <>
        {users.map((info) => (<tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.email}</td>
            <td>{info.phoneNumber}</td>
            <td>{info.linkedInUrl}</td>
            <td>{info?.comments[0]?.header}</td>
            <td>
                <Button size="sm" variant="primary" onClick={() => {offer(info?.id)}}>Offer job</Button>{' '}
                <Button size="sm" variant="warning" onClick={() => {navigate('/comment',{state: info.id})}}>Comment</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => {handleSubmit(info?.comments[0]?.id); refresh()}}>Delete</Button>{' '}
            </td>
        </tr>))}
        </>
    )
        
  
}
export default CandidateTable