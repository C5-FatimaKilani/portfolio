import React from "react";
import {Container,Nav,Navbar , Image} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import logo from "../programmer-icon-14.jpg"
import "./Navbar.css"

const Navbarr = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Navbar className="myNav" bg="black" variant="dark" style={{color:"white", opacity:""}}>
        <Container>
          <Navbar.Brand href="#home"><Image style={{height:"120px", width:"120px" }}  className="imgg" src="https://icon-library.com/images/programmer-icon/programmer-icon-14.jpg"  /></Navbar.Brand>
          <Nav  className="me-left">
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/home" >Home</Nav.Link>
           
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
