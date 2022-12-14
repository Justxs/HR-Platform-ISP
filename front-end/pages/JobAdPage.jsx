import React from 'react'
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function JobAdPage() {
  let navigate = useNavigate();
  return (
    <div className="p-2 container bg-white rounded">
      <h1>JobAdPage</h1>
      <Row className="d-flex justify-content-center">
        <Card className='m-2' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Job title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Creation date</Card.Subtitle>
            <Card.Text>
              about job
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
          <Button variant="primary">Aplicate</Button>
        </Card>
        <Card className='m-2' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Job title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Creation date</Card.Subtitle>
            <Card.Text>
              about job
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
          <Button variant="primary">Aplicate</Button>
        </Card>
        <Card className='m-2' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Job title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Creation date</Card.Subtitle>
            <Card.Text>
              about job
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
          <Button variant="primary">Aplicate</Button>
        </Card>
      </Row>
      {/*<button onClick={() => {navigate("/jobsad/id")}}>aplicate to job</button>*/}
    </div>
  )
}

export default JobAdPage