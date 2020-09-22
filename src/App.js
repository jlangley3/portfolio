import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import {connect} from "react-redux";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return ( 
          <Fragment>
          <Navbar  />
          <Home />
        <div className="App" >
        <Switch>
        <Route exact path='/' render={() => {return  <Home />}}/>
        <Route exact path='/projects' render={() => {return <Projects /> }}/>
        <Route exact path='/contact' render={() => {return  <Contact/>}}/>
          <Redirect from='*' to='/' />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        </div>
      </Fragment>
          )}
     
  }
    

export default App;
