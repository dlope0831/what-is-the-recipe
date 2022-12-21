import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import Auth from "../utils/auth"

  function Bar() {
      return (
        <Navbar bg="dark" variant="dark" expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link as={Link} to="/"> Home</Nav.Link>
              <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
              <Nav.Link as={Link} to="/savedrecipes">Saved</Nav.Link>
              <Button className="m-2"><a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
            </Button>
              </Nav>
              </Navbar.Collapse>
      </Container>
    </Navbar>
      );
    }




export default Bar
