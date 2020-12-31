import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import Modal from "./Modal";
import '../styles/Modal.css';
import '../styles/About.css';
import logo from '../images/logo.png';

class About extends Component{

  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };



    render(){
        function Header() {
            // Import result is the URL of image
            return <img src={logo} alt="Logo" />;
          }
       return (
   <div> 
      <div className="banner"> 
      {/* <Header /> */}
      <img src={logo} alt="Logo" />
      </div>
      <div className="about">
          
            
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
                to a new opportunity as a developer.</p>
      </div>

      <h1>React Modal</h1>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
      
      
      
      <Modal onClose={this.showModal} show={this.state.show}>
          Message in Modal
     </Modal>

     <button class="toggle-button" id="centered-toggle-button">Toggle</button>

<div class="modal" id="modal">
  <h2>Modal Window</h2>
  <div class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non fuga omnis a sed impedit explicabo accusantium nihil doloremque consequuntur.</div>
  <div class="actions">
    <button class="toggle-button">OK</button>
  </div>
</div>

      {/* Trigger/Open The Modal */}
<button id="myBtn">Open Modal</button>


<div id="myModal" class="modal">

  {/* Modal content  */}
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

  
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        ></button>



</div>

      </div>
    
  )   
    }

} 



export default About