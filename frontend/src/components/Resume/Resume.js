import Card from 'react-bootstrap/Card';
import cv from "./fatimaCv.png"
const Resume = () => {
    return(
        <Card style={{margin:"10%"}}>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={cv} />
      </Card>
    )
}

export default Resume