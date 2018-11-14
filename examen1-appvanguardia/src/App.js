import React, { Component } from 'react';
import './App.css';
import Temp from './Components/Temp.js';
import Search from './Components/Search';

class App extends Component {
  state = {
    city: "Search for your City",
    weather: "Unknown",
    temp: "Unknown",
    err: ""
  };

  updateState = newState =>{
    if(newState === undefined){
      this.setState({
        city: "Unknown",
        weather: "Unknown",
        temp: "Unknown",
        err: "Not Found"
      })
      return;
    }
    this.setState({
      city: newState.city,
      weather: newState.weather,
      temp: newState.temp,
      err: newState.err
    })
  }

  render() {
    const { err } = this.state;
    return (
      <div>
        <Temp city={this.state.city} weatherState={this.state.weather} temp={this.state.temp}/>
        <Search update={this.updateState}/>
        {
          err && (<p style={{color: "red"}}>City not found!</p>)
        }
      </div>
    );
  }
}

export default App;
