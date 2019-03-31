import React, { Component } from 'react';
import './App.css';
import NumberField from './components/numberField';
import Operator from './components/operator';
import Cache from './components/cache';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cache: 0
    }

    this.cooleFunktion = this.cooleFunktion.bind(this);
  }

  cooleFunktion(){
    this.setState({
      cache: 'hier muss eine Zahl übergeben werden'
    });
  }
  
  render() {
    return (
      <div className="App">
        <Cache text={this.state.cache}/>

        {/* Rufe 10x auf - dabei muss aber 0 zuletzt aufgerufen werden :) */}
        <div className="button-group">
          <NumberField number="1" machwas={this.cooleFunktion} />
          <NumberField number="2" machwas={this.cooleFunktion} />
          <NumberField number="3" machwas={this.cooleFunktion} />
          <NumberField number="4" machwas={this.cooleFunktion} />
          <NumberField number="5" machwas={this.cooleFunktion} />
          <NumberField number="6" machwas={this.cooleFunktion} />
          <NumberField number="7" machwas={this.cooleFunktion} />
          <NumberField number="8" machwas={this.cooleFunktion} />
          <NumberField number="9" machwas={this.cooleFunktion} />
          <NumberField number="0" machwas={this.cooleFunktion} />

          <Operator type="+" />  
          <Operator type="-" />  
          <Operator type="=" />  
        </div>
      </div>
    );
  }
}

export default App;
