import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const E_nav = () => {
  return (
    <div> <Navbar bg="dark" data-bs-theme="dark" className="justify-content-end me-auto">
    <Nav >
        <Nav.Item>
          <Nav.Link href="/Admin_dash.jsx">DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Home.jsx">LOGOUT</Nav.Link>
        </Nav.Item>
      </Nav>
  </Navbar></div>
  )
}

export default E_nav