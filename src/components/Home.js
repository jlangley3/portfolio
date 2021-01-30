import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import me from '../images/jessepic.jpg';
import '../styles/Home.css';

class Home extends React.Component{
    render() {
        return ( 
            <div className="App">
               <h1>Welcome to My Portfolio!</h1>
                 <img src={me} alt="me"/>

                 <Link to="/Projects">
                 <button type="button">
                  See my work
              </button>
              </Link>
            </div>
              )}       
}

  
export default Home