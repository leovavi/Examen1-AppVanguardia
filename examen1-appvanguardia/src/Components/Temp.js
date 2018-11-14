import React, { Component } from 'react';

class Temp extends Component {
  render() {
    return (
      <div className = "text-center">
        <h1 className="text-primary">City: {this.props.city}</h1>
        <br/>
        <h2 className="text-secondary">Weather: {this.props.weatherState}</h2>
        <br/>
        <h3 className="text-secondary">Temperature: {this.props.temp}</h3>
        <br/>
      </div>
    );
  }
}

export default Temp;
