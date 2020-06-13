import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>It's a React app.</h1>
       <p>version 1.0</p>
       <Person></Person>
      </div>
    );
    //return React.createElement( 'div',{className:'App'},React.createElement( 'h1', null,'Does this work?'))
  }
}

export default App;
