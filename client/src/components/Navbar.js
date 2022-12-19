<<<<<<< HEAD
import React  from 'react';


const Sidebar = () => {
    return(
        <>
<div class="ui secondary  menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
   Recipes
  </a>
  <a class="item">
   Your saved
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
</>
);
    }

export default Sidebar;
=======
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link } from "react-router-dom"

const Bar = () => {
  return (
    <>  
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/savedrecipes">Saved</Nav.Link>
            </Nav>
            <Button variant="outline-light" href="/login">Login</Button>
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
>>>>>>> c0b9b47c261db0adc88c828466b37ecc27bb2da3
