import React, { Component } from 'react';
import './App.css';
import Mycars from './components/Mycars'; 

class App extends Component {
  state = {
    title : 'Mon catalogue des voitures'
  }
  render(){
    return (
      <div className="App">
       <Mycars titre = {this.state.title} />
      </div>
    );
  }
}

export default App;