import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import '../styles/Resume.css';


class Resume extends Component {
  render() {


    return (
      <section id="resume">

<div className="row education">
         <div className="three columns header-col">
            <h1><span>Summary</span></h1>
            
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <h3><span>Full-stack web developer, experienced in Ruby on Rails, React, and 
                   JavaScript-based programming with a background in healthcare, customer service, and education. My experience writing scripts for templates introduced me to coding and has altogether motivated me to learn to write code that not only works but is maintainable and readable. Building and leading health programs has altogether provided me with strong skills in virtual communication, teaching, problem solving, and flexibility that will help innovative 
                   companies to achieve efficient results in this frequently changing environment.</span></h3>
               </div>
            </div>
         </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
            
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <h1><span>Flatiron School</span></h1>
                 <h3><span>Flatiron School 	Washington, D.C.
                           Software Engineering	04/ 2020 - 08/2020
                </span></h3>
                <h1><span>Marymount University</span></h1>
                 <h3><span>Marymount University 	Arlington, VA
                           Marymount University 	Arlington, VA
                           Master of Science in Cybersecurity  Course Work
                           Study Abroad Experience: Ireland
                </span></h3>
                <h1><span>Marymount University</span></h1>
                 <h3><span>Marymount University 	Arlington, VA
                          Bachelor of Science in Health Sciences  05/2013
                          Academic Highlights: Cum Laude, Dean’s List Scholar                                             	
                          Study Abroad Experience: Greece, Turkey, Spain 
                </span></h3>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
         <h1><span>Montgomery College </span></h1>
                 <h3><span>	Silver Spring, Maryland  </span></h3>
                 <h3><span>Clinical Coordinator/Adjunct Professor || 01/2020 - Present</span></h3>	      
                 <h3><span>●	Organize and manage clinical agency requirements for 
                   multiple programs to ensure students are career ready</span></h3>
                 <h3><span>●	Act as a negotiator to match the needs of students to 
                   agencies with appropriate clinical learning experiences</span></h3>
                 <h3><span>●	Provide instructional assessments and weekly lesson 
                   plans to prepare students for National Board Examinations</span></h3>
                   <h3><span>●	Built class websites utilizing blackboard as a classroom tool 
                 resulting in 60% increase in </span></h3>
                 <h3><span>●	Teach engaging, rigorous, and relevant lessons 
                   for 2-3 classes of 15-25 students weekly</span></h3>
 

                   <h1><span>Medstar Georgetown University Hospital  </span></h1>
                 <h3><span>	Washington, D.C.</span></h3>
                 <h3><span>Polysomnography Technologist and Administrative Leader || 08/2011 – 02/2020</span></h3>	      
                 <h3><span>●	Acted as first point of contact for 50+ patients daily through in-person meetings and email correspondence</span></h3>
                 <h3><span>●	Acted as liaison between National rehabilitation hospital and Georgetown University hospital</span></h3>
                 <h3><span>●	Managed scheduling, payments, inventory and note tracking daily</span></h3>
                 <h3><span>●	Analyzed patient brainwave graphs and data to diagnose sleep disorders and devises health plans </span></h3>
                 <h3><span>●	Coordinated program logistics to ensure quality patient care and confidentiality</span></h3>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p><h2><span>Ruby, Rails, SQL, Sinatra, OO Programming, JavaScript, React, 
              Redux, CSS, HTML, Angular, Product Management</span></h2>
            </p>

				<div className="bars">
				   <ul className="skills">
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;