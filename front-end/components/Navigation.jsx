import Navbar from 'react-bootstrap/Navbar';
import React, {useState, useEffect} from 'react';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation(props) {

  const logout = async () => {
    await fetch('http://localhost:5183/api/logout',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      credentials: 'include',
    });
  }
    
    let menu;

    if(props.username === undefined){
      menu =( <>
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <div className="p-2 bg-white rounded">
              <img
                src="../src/assets/hr.png"
                width="50"
                />
              </div>
              </Navbar.Brand>
        </Container>
        <Navbar.Collapse>
            <Nav className="me-auto fs-4 ">
              <Nav.Link className='bg-light rounded mx-2' href="#">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>)
    }
    else {
      menu = (<>
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <div className="p-2 bg-white rounded">
              <img
                src="../src/assets/hr.png"
                width="50"
                />
              </div>
              </Navbar.Brand>
        </Container>
        <Navbar.Collapse>
            <Nav className="me-auto fs-4 ">
              <Nav.Link className='bg-light rounded mx-2' href="#">Home</Nav.Link>
              <Nav.Link className='bg-light rounded mx-2' href="#">Link</Nav.Link>
              <Nav.Link className='bg-light rounded mx-2' href="#">Link</Nav.Link>
              <Nav.Link  className='bg-light rounded mx-2' onClick={logout} href="/">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>)
    }
  return (
    menu
  );
}

export default Navigation;