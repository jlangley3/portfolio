import React, {Component} from 'react';
import { Container, List, Header, Divider } from 'semantic-ui-react';
import { Link, withRouter } from "react-router-dom";

class Footer extends Component{

    render(){
       return (
    <footer>
      <div>
            <p>Copyright * 2020 * Jesse Langley</p>
      </div>
    </footer>
  )   
    }

} 



export default Footer