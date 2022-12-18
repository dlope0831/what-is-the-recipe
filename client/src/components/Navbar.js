import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link } from "react-router-dom"

const Bar = () => {
  return (
    <>  
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/savedrecipes">Saved</Nav.Link>
            </Nav>
            <Button variant="outline-success" href="/login">Login</Button>
            <Button className="m-2" href="/signup">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<section>
<Outlet></Outlet>
</section> 
  </>
  )
}

export default Bar;