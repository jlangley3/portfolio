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
import About from './components/About';
import Into from './components/Into';

class App extends React.Component {
  render() {
    return ( 
          <Fragment>
          <Navbar  />
        <div className="App" >
        <Switch>
        <Route exact path='/' render={() => {return  <Home />}}/>
        <Route exact path='/projects' render={() => {return <Projects /> }}/>
        <Route exact path='/contact' render={() => {return  <Contact/>}}/>
        <Route exact path='/about' render={() => {return  <About/>}}/>
        <Route exact path='/into' render={() => {return  <Into/>}}/>
          <Redirect from='*' to='/' />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        </div>
      </Fragment>
          )}
     
  }
    

export default App;
