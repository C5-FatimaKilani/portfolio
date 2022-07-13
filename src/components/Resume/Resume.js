import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import cv from "./fatimaCv.png"
const Resume = () => {

    // const navigate = useNavigate();

    // useEffect(() => {
      
    // navigate("/resume")
     
    // }, [])
    

    return(
        <Card style={{ margin: "15%"}}>
        <Card.Body>
         
        </Card.Body>
        <Card.Img variant="bottom" src={cv} />
      </Card>
    )
}

export default Resume