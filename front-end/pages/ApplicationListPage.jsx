import React from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
function ApplicationListPage() {
  return (
    <div className="container bg-white rounded">
      <h1>ApplicationListPage</h1>
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
          <tr>
            <td>1</td>
            <td>Justas</td>
            <td>Pranauskis</td>
            <td>KTU@KTU.lt</td>
            <td>+3706262644</td>
            <td>linked.com</td>
            <td>Komentaras</td>
            <td>
              <Button size="sm" variant="primary">Offer job</Button>{' '}
              <Button size="sm" variant="warning">Comment</Button>{' '}
              <Button size="sm" variant="danger">Delete</Button>{' '}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Just</td>
            <td>Pran</td>
            <td>KT@KU.lt</td>
            <td>+3706262644</td>
            <td>linked.com</td>
            <td>Komentaras</td>
            <td>
              <Button size="sm" variant="primary">Offer job</Button>{' '}
              <Button size="sm" variant="warning">Comment</Button>{' '}
              <Button size="sm" variant="danger">Delete</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ApplicationListPage