import React from 'react';
import { connect } from 'react-redux';
import me from '../images/jessepic.jpg';

class Home extends React.Component{
    render() {
        return ( 
            <div className="App">
            Welcome to My Profile!
                 <img src={me} alt="me"/>
            </div>
              )}       
}

  
export default Home