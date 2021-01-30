import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import me from '../images/jessepic.jpg';
import '../styles/Home.css';

class Home extends React.Component{
    render() {
        return ( 
            <div className="myPic">
               <h1>Welcome to My Portfolio!</h1>
                 <img src={me} alt="me"/>

                 <Link to="/Projects">
                 <button className="button" type="button">
                  <p className="see">See my work</p>
              </button>
              </Link>
            </div>
              )}       
}

  
export default Home