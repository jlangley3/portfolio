import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return ( 
          <Fragment>
          <Navbar  />
          <Home />
        <div className="App" >
        <Switch>
        <Route exact path='/' render={() => {return  <Home />}}/>
        <Route exact path='/home' render={() => {return <Home/>}}/>
        <Route exact path='/new_event' render={() => {return <Projects /> }}/>
        <Route exact path='/contact' render={() => {return  <Contact/>}}/>
        <Route exact path='/links' render={() => {return <Links />}}/>
          <Redirect from='*' to='/' />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        </div>
      </Fragment>
          )}
     
  }
    

export default App;
