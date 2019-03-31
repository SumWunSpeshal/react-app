import React, { Component } from 'react';

class Cache extends Component {
  render() {
    return(
      <div className="input-wrap">
        <input type="text" className="input" value={this.props.text}/>
      </div>
    );
  }
}

export default Cache;