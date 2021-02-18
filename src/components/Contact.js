import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import con from '../images/contact.jpg';
import linkedin from '../images/Linkedin.jpg';
import gmail from '../images/gmail.png';
import blog from '../images/whatisblog.png';
import '../styles/Contact.css';


class Contact extends Component{

    render(){
       return (
   
      <div className="contactpage">
         
         {/* <Link as="a" activeClassName="active" to="/Contact"><img src={con} className="pic" /></Link> */}
         <Link as="a" activeClassName="active" to="/Contact"><p className="title2">Click to Find Me!</p></Link>
         
            {/* <p className="title">Linkedin</p> */}
            <a href={"https://www.linkedin.com/in/jesselangley"}>  
           <img src={linkedin} alt="Italian Trulli" width="900px" height="600px"></img></a>
            {/* <p className="title">Email</p> */}
            <a href={"https://jesselangleyiii@gmail.com"}>  
     <img src={gmail} 
     alt="Italian Trulli" width="900px" height="600px"></img></a>


     {/* <p className="title">Blog</p> */}
            <a href={"https://jlangleyiii.medium.com/"}>  
     <img src={blog}
     alt="Italian Trulli" width="900px" height="600px"></img></a>


      </div>
    
  )   
    }

} 



export default Contact