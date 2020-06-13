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
  switchNameHandler = () => {
    // console.log('Was clicked')
    // THIS IS THE WRONG WAY TO USE --> this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
      {name: 'Maximilian', age: 28},
      {name: 'John', age: 25},
      {name: 'Jack', age: 22}
    ]
    })
  }
  render() {
    return (
      <div className="App">
       <h1>It's a React app.</h1>
       <p>version 1.0</p>
       <button onClick={this.switchNameHandler}>Switch name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement( 'div',{className:'App'},React.createElement( 'h1', null,'Does this work?'))
  }
}

export default App;
