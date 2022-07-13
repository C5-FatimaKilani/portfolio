import React from "react";
import {Container,Nav,Navbar , Image} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import logo from "../programmer-icon-14.jpg"
import "./Navbar.css"

const Navbarr = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Navbar className="myNav"  variant="dark" style={{color:"white", opacity:""}}>
        <Container>
          <Navbar.Brand href="/"><Image  className="imgg" style={{height:"120px", width:"120px" }}  src="https://icon-library.com/images/programmer-icon/programmer-icon-14.jpg"  /></Navbar.Brand>
          <Nav  className="me-left">
            <Nav.Link className="navLink" style={{}} href="/" >Home</Nav.Link>
           
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/skills">Skills</Nav.Link>
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/resume">Resume</Nav.Link>
            
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/projects">Projects</Nav.Link>


          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>

  );
};

export default Navbarr;
