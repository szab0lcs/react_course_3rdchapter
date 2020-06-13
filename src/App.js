import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>{
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'John', age: 25},
      {name: 'Jack', age: 20}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState,otherState);

const switchNameHandler = () => {
  // console.log('Was clicked')
  // THIS IS THE WRONG WAY TO USE --> personsState.persons[0].name = 'Maximilian';
  setPersonsState({
    persons: [
    {name: 'Maximilian', age: 28},
    {name: 'John', age: 25},
    {name: 'Jack', age: 22}
  ]
  });
};

    return (
      <div className="App">
       <h1>It's a React app.</h1>
       <p>version 1.0</p>
       <button onClick={switchNameHandler}>Switch name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement( 'div',{className:'App'},React.createElement( 'h1', null,'Does this work?'))
}

export default app;

