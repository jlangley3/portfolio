import React from 'react';
import { connect } from 'react-redux';
import me from '../images/jessepic.jpg';
import '../styles/Home.css';

class Home extends React.Component{
    render() {
        return ( 
            <div className="App">
               <h1>Welcome to My Portfolio!</h1>
                 <img src={me} alt="me"/>

                 <Link to="/dashboard"></Link>

                 <button type="button">
                  See my work
              </button>
            </div>
              )}       
}

  
export default Home