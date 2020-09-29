import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import '../styles/Footer.css';


class Footer extends Component{

    render(){
       return (
    <footer>
      <div className="foot">
            <p >Copyright * 2020 * Jesse Langley</p>
      </div>
    </footer>
  )   
    }

} 



export default Footer