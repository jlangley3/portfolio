import React from "react";








export default class Modal extends React.Component {
  render(){
    if(!this.props.show){
        return null;
    }
    return (
        <div>
          <div>{this.props.children}</div>
          <div>
            <button
              onClose={e => {
                this.onClose(e);
              }}
            >
              Close
            </button>
          </div>
        </div>
      );
}
}