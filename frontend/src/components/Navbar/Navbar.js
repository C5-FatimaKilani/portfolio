// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import {Container,Nav,Navbar , Image} from "react-bootstrap";
import logo from "../programmer-icon-14.jpg"

const Navbarr = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{opacity:"0.5"}}>
        <Container>
          <Navbar.Brand href="#home"><Image style={{height:"120px", width:"120px" }}  className="imgg" src="https://icon-library.com/images/programmer-icon/programmer-icon-14.jpg"  /></Navbar.Brand>
          <Nav  className="me-left">
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/home" >Home</Nav.Link>
            {/* onClick={()=>navigate("/home")} */}
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/projects">Projects</Nav.Link>
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/skills">Skills</Nav.Link>
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="/resume">Resume</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>

  );
};

export default Navbarr;
