import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import hamada from "./hamada.png"
import sooq from "./sooq.png"
const Projects = () => {
    return(
        <div style={{display: "flex", justifyContent:'space-evenly', marginTop:"10%"}}>
           
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:"30%" , width:"70%", marginBottom:"15%", textAlign:"center", marginTop:"20%", marginLeft:"15%"}} src={hamada} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    {/* ======================second project ======= */}
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sooq} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
 
            </div>
    )
}

export default Projects