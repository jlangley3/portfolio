import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import me from '../images/jessepic.jpg';
import '../styles/Home.css';

class Home extends React.Component{
    render() {
        return ( 
            <div className="myPic">
               <h1>Jesse's Portfolio!</h1>
                 <img src={me} alt="me"/>
                 <div>
                 <Link to="/Projects">
                 <button className="button" type="button">
                  <p className="see">See My Work</p>
              </button>
              </Link></div>
            </div>
              )}       
}

  
export default Home