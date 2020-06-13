import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>It's a React app.</h1>
       <p>version 1.0</p>
       <Person name="Max" age="28"/>
       <Person name="John" age="25">My Hobbies: Racing</Person>
       <Person name="Jack" age="20"/>
      </div>
    );
    //return React.createElement( 'div',{className:'App'},React.createElement( 'h1', null,'Does this work?'))
  }
}

export default App;
