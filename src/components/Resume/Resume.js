import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import cv from "./fatimaCv.png"
import "./Resume.css"

const Resume = () => {

    return(
        <Card className="resCard" style={{ marginTop: "7%", marginLeft:"15%", marginRight:"15%", marginBottom:"10%"}}>
        <Card.Body>
         
        </Card.Body>
        <Card.Img variant="bottom" src={cv} />
      </Card>
    )
}

export default Resume