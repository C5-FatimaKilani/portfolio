import {Container,Nav,Navbar , Image} from "react-bootstrap";
import logo from "../programmer-icon-14.jpg"

const Navbarr = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{opacity:"0.5"}}>
        <Container style={{display:"flex", justifyContent:"space-around", alignItems:"end"}}>
          <Navbar.Brand href="#home"><Image style={{height:"120px", width:"120px" }}  className="imgg" src="https://icon-library.com/images/programmer-icon/programmer-icon-14.jpg"  /></Navbar.Brand>
          <Nav  className="me-auto">
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="#pricing">Projects</Nav.Link>
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="#home">Skills</Nav.Link>
            <Nav.Link style={{color:"white", fontSize:"150%"}} href="#home">Resume</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>

  );
};

export default Navbarr;
