import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return ( 
        <div className="App">
          <Navbar />
          <Home />
            
        </div>
          )}
     
  }
    

export default App;
