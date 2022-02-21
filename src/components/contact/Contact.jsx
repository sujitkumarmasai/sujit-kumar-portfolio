import { useState ,useEffect} from "react";
import "./contact.scss";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css"

export default function Contact() {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200});
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div id="contact">
    <br />
    <br />

     <h1 style={{textAlign: "center", color: "white"}} >Contact Me Here</h1>
     <hr style={{width: 250, marginTop: "-18px",height: 4, backgroundColor: "#18d26e", border: "none"}}/>
      <div className="contact">
      <div className="left">
        {/* <br /> */}
        <p >Let's get in touch and build something together.</p>
        <br />
        <br />
        <br />
        <div className="contactMain">
        <div className="div1"> <a href={"https://goo.gl/maps/VnFwZAjYXbovJ6vH7"} target="_blank" rel="noreferrer">
        <FaHome className="icon1"
 style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/></a>
          <h1>Location</h1>
          <p>Saran, Bihar</p>
          
        </div>
        <div><a href="tel:93746455352" target="_blank" rel="noreferrer">
        <FaPhone className="icon1" 
 style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/></a>
          <h1>Phone</h1>
          <p>(+91) 9523918874</p>
        </div>
        <div><a href="mailto:sujitkmr1098@gmail.com" target="_blank" rel="noreferrer">
        <GrMail className="icon1" 
 style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/></a>
          <h1>Email</h1>
          <p>sujitkmr1098@gmail.com</p>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/sujit-kumar-dev/" target="_blank" rel="noreferrer"
><AiFillLinkedin className="icon1" style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/></a>
        <h1>Linkedin</h1>
        <p>sujit-kumar-dev</p>
      
        
        </div>
        <div>
        <a href="https://github.com/sujitkumarmasai" target="_blank" rel="noreferrer"
><AiFillGithub className="icon1" style={{width:"80px" ,height:"25px",marginLeft: "-20px",color: " #18d26e"}}/></a>
        <h1>Github</h1>
        <p>sujitkumarmasai</p>
        </div>
        </div>
        
      </div>
      {/* <div className="right">
        <h2 style={{textAlign: "center", color: "white"}}>E-Mail Me</h2>
        <hr style={{width: 140, marginTop: "-18px",height: 4, backgroundColor: "#18d26e", border: "none"}}/>
        <form onSubmit={handleSubmit}>
          <br />
          <input type="text" placeholder="Email" />
          <br />
          <textarea placeholder="Message"></textarea>
          <br />
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div> */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="footer">
        <p style={{marginTop: 1}}>Created By <span>Sujit Kumar</span> | © 2022 All rights reserved</p>
      </div>
    </div>
  );
}