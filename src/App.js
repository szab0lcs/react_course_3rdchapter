import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'John', age: 25},
      {name: 'Jack', age: 20}
    ]
  }
  render() {
    return (
      <div className="App">
       <h1>It's a React app.</h1>
       <p>version 1.0</p>
       <button>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement( 'div',{className:'App'},React.createElement( 'h1', null,'Does this work?'))
  }
}

export default App;
