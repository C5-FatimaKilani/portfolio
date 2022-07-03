import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Image} from "react-bootstrap";

import { BsGithub} from 'react-icons/bs';
import { ImTrello} from 'react-icons/im';
import { IoLogoJavascript,IoLogoNodejs} from 'react-icons/io';
 import {GrReactjs ,GrHtml5} from 'react-icons/gr';
import { SiMysql,SiRedux,SiMongodb,SiCss3} from 'react-icons/si';


import hamada from "./hamada.png"
import sooq from "./sooq.png"
const Projects = () => {
    return(
        
        <div style={{display: "flex", justifyContent:'space-evenly', marginTop:"10%"}}>
          
    {/* <Card style={{ width: '25rem',  boxShadow:" 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"}}>
      <Card.Img variant="top" style={{height:"30%" , width:"70%", marginBottom:"15%", textAlign:"center", marginTop:"20%", marginLeft:"15%"}} src={hamada} />
      <Card.Body>
        <Card.Title>Abed-Hamada restaurant <br/> Full Stack App</Card.Title>
        <Card.Text>
        It's a personal app that sells its products to customers online, It contains the feature of entering by Google login and paying by credit card, and there is also an admin section and everything that concerns the manager
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><IoLogoJavascript/><IoLogoNodejs/> <SiMysql/></ListGroup.Item>
        <ListGroup.Item><GrReactjs/><SiRedux/><GrHtml5/><SiCss3/></ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
      <Card.Link href="https://github.com/C5-FatimaKilani/MERAKI_Academy_Project_5"><BsGithub/></Card.Link>
        <Card.Link href="https://trello.com/b/t4DVOZ4B/simple-project-board"><ImTrello/></Card.Link>
      </Card.Body>
    </Card>
    {/* ======================second project ======= */}
   
   {/* <Card style={{ width: '25rem' ,  boxShadow:" 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"}}>
      <Card.Img variant="top" src={sooq} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        It's app like open sooq  allowed to users sell and buy any thing they want .. also they can create  comments  on other products and making crud on  comments and their products,
       
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item><IoLogoJavascript/><IoLogoNodejs/> <SiMongodb/></ListGroup.Item>
      <ListGroup.Item><GrReactjs/><GrHtml5/><SiCss3/></ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Link href="https://github.com/C5-FatimaKilani/MERAKI_Academy_Project_4"><BsGithub/></Card.Link>
        <Card.Link href="https://trello.com/b/syRp8d4q/project4-e-commerce"><ImTrello/></Card.Link>
        
      </Card.Body>
    </Card> */}
    {/* //=========================== */}
    <div className="Card3">
    <Image src={hamada}/>
    <div className="overlay">
      <div className="line"><h2 className="title" style={{fontSize:"smaller"}}>Abed-Hamada restaurant <br/> Full Stack App</h2></div>
      <div className="content">
        <p>Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. </p>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><IoLogoJavascript/><IoLogoNodejs/> <SiMysql/></ListGroup.Item>
        <ListGroup.Item><GrReactjs/><SiRedux/><GrHtml5/><SiCss3/></ListGroup.Item>
       
      </ListGroup>
      
      <Card.Link href="https://github.com/C5-FatimaKilani/MERAKI_Academy_Project_5" f><BsGithub/></Card.Link>
        <Card.Link href="https://trello.com/b/t4DVOZ4B/simple-project-board"><ImTrello/></Card.Link>
    </div>
    </div>
    {/* //============second project =========== */}
    <div className="Card3">
    <Image src={sooq}/>
    <div className="overlay">
      <div className="line"><h2 className="title" style={{fontSize:"smaller"}}>SooqCom <br/>Full Stack App</h2></div>
      <div className="content">
        <p> It's app like open sooq  allowed to users sell and buy any thing they want .. also they can create  comments  on other products and making crud on  comments and their products. </p>
      </div>
      <ListGroup className="list-group-flush">
      <ListGroup.Item><IoLogoJavascript/><IoLogoNodejs/> <SiMongodb/></ListGroup.Item>
      <ListGroup.Item><GrReactjs/><GrHtml5/><SiCss3/></ListGroup.Item>
      </ListGroup>
      
      <Card.Link href="https://github.com/C5-FatimaKilani/MERAKI_Academy_Project_4"><BsGithub/></Card.Link>
        <Card.Link href="https://trello.com/b/syRp8d4q/project4-e-commerce"><ImTrello/></Card.Link>
    </div>
   
  </div> 
 
            </div>
 )   
}

export default Projects