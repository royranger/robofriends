import React, {Component} from 'react';

class Scroll extends Component {

  render() {
    const height = (window.innerHeight - 200);

    return(
      <div style={{overflowY: 'scroll', border: '1px solid black', height: `${height}px`}}>
        {this.props.children}
      </div>
    );
  }



}

export default Scroll;
