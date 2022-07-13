import { Image} from "react-bootstrap";
import res from "./responsive.gif"
import "./Skills.css"
import css from "./css.jpg"
import html from "./html.jpg"
import javascript from "./javascript.jpg"
import mongodb from "./mongodb.jpg"
import redux2 from "./Redux2.webp"
import react1 from "./react1.png"
import mysql from "./mysql.jpg"

const Skills = () => {
return(
  <div className="cont">
<h1 className="h1Comp">My Skills</h1>

    <div className="Card4">
    <img src="https://i.pinimg.com/originals/26/44/b4/2644b4fa1f0c1f40c387b1cbcf251e4e.gif"/>
    <div className="overlay">
      <div className="line"><h2 className="title">Responsive WebSites</h2></div>
      <div className="content">
        <p></p>
      </div>
    </div>
    </div>
    {/* ===========================================*/}
    <div className="Card4">

     <Image src={css}/>
    <div className="overlay">
      <div className="line"><h2 className="title">CSS</h2></div>
      <div className="content">
        <p></p>
      </div>
    </div> 
  </div> {/* ===========================================*/}
    <div className="Card4">

     <Image src={html}/>
    <div className="overlay">
      <div className="line"><h2 className="title">Html5</h2></div>
      <div className="content">
        <p></p>
      </div>
    </div> 
  </div> {/* ===========================================*/}
    <div className="Card4">

     <img src={javascript}/>
    <div className="overlay">
      <div className="line"><h2 className="title">Java Script</h2></div>
      <div className="content">
        <p></p>
      </div>
    </div> 
  </div> {/* ===========================================*/}
    <div className="Card4">

     <Image src={mongodb}/>
    <div className="overlay">
      <div className="line"><h2 className="title">Mongo DB</h2></div>
      <div className="content">
        <p></p>
      </div>
    </div> 
  </div> 
  {/* ===========================================*/}
  <div className="Card4">

<Image src={mysql}/>
<div className="overlay">
 <div className="line"><h2 className="title">My Sql</h2></div>
 <div className="content">
   <p></p>
 </div>
</div> 
</div> {/* ===========================================*/}
  <div className="Card4">

<Image src={redux2}/>
<div className="overlay">
 <div className="line"><h2 className="title">Redux</h2></div>
 <div className="content">
   <p></p>
 </div>
</div> 
</div> {/* ===========================================*/}
  <div className="Card4">

<Image src={react1}/>
<div className="overlay">
 <div className="line"><h2 className="title">React.JS</h2></div>
 <div className="content">
   <p></p>
 </div>
</div> 
</div>
 {/* ===========================================*/}
 
  </div>

)
}

export default Skills