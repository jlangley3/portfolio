import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import '../styles/About.css';
import logo from '../images/logo.png';

class About extends Component{

    render(){
        function Header() {
            // Import result is the URL of image
            return <img src={logo} alt="Logo" />;
          }
       return (
   <div> 
      <div className="banner"> 
      {/* <Header /> */}
     <span><img src={logo} alt="Logo" /></span> 
      </div>
      <div className="about"><span>
          
            
            {/* <h1> A Little Bit About Me</h1> */}
            <p>Full stack web developer, experienced in Ruby on Rails, React, 
                Redux, and JavaScript based programming with ten years of past 
                experience in health sciences and education.</p>
      
            <p>I grew up helping my grandfather work on his taxi every weekend. 
                 This experience sparked my passion for understanding how things 
                 work from computer programs to the human body. This experience 
                 combined with my love of athletics pushed me to spend my career 
                 learning about the body and how to ensure it functions optimally.</p>

            <p>In transitioning into software development, I have become fascinated 
                with how programs work, and how to ensure they run smoothly and at 
                their optimum efficiency. I graduated from Flatiron School and I’m 
                excited to combine my years of experience in healthcare and working 
                with clients with my new expertise in Ruby on Rails and JavaScript 
                to a new opportunity as a developer.</p></span>
      </div>

      





      </div>
    
  )   
    }

} 



export default About