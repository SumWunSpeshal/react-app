import React, { Component } from 'react';

class Operator extends Component {
  render() {
    return(
      <div>
        <button className="button">{this.props.type}</button>
      </div>
    );
  }
}

export default Operator;