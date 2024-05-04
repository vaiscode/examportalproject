import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const E_nav = () => {
  return (
    <div>
       <Navbar bg="success" data-bs-theme="dark" className="justify-content-end me-auto">
      <Nav >
        <Nav.Item>
          <Nav.Link href="/addash" style={{color:'white',textDecoration:'none'}}>DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/l" style={{color:'white',textDecoration:'none'}}>LOGOUT</Nav.Link>
        </Nav.Item>
      </Nav>
  </Navbar>
  </div>
  )
}

export default E_nav