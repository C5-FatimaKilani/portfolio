import Card from "react-bootstrap/Card";
import { BsGithub , BsLinkedin} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
  return (
    
      <Container>
      <Row>
        <Col><Card className="cardHome" style={{ width: "90%",marginTop:"10%", marginLeft:"10%" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            🚀 HI THERE , I'M
          </Card.Subtitle>
          <Card.Title style={{fontSize:'200%'}}>🎓Eng. Fatima Kilani</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            Full Stack Web Developer
          </Card.Subtitle>
          <Card.Text>
            👨‍💻 I am really enthusiastic about learning new technologies & more
            programming languages.
          </Card.Text>
          <Card.Text>You can find me at :</Card.Text>
          <Card.Link href="https://www.linkedin.com/in/fatimakilani/">
          <BsLinkedin/>
          </Card.Link>
          <Card.Link href="https://github.com/FatimaKilani"><BsGithub/></Card.Link>
          
          <Card.Link href="#"><SiGmail/></Card.Link>
        </Card.Body>
      </Card></Col>
      </Row>
    </Container>
      
   
  );
};

export default Home;
