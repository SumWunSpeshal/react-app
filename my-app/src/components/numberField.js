import React, { Component } from 'react';

class NumberField extends Component {

  componentDidMount() {
    console.log(this + ' did mount O.o');
  }

  render() {
    return(
      <div>
        <button type="button" className="button" onClick={this.props.machwas}>{this.props.number}</button>
      </div>
    );
  }
}

export default NumberField;