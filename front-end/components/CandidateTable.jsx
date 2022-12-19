import React from 'react'
import { Button } from 'react-bootstrap';
import axios from '../src/Api/axios';
import { useEffect, useState } from 'react';

 const CandidateTable = ({users}) => {
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
                <Button size="sm" variant="primary" onClick={() => {console.log(JSON.stringify(info.comments))}}>Offer job</Button>{' '}
                <Button size="sm" variant="warning" onClick={() => {}}>Comment</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => {}}>Delete</Button>{' '}
            </td>
        </tr>))}
        </>
    )
        
  
}
export default CandidateTable