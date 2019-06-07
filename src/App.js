import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am a React App!</h1>
        <Person></Person>
        {/*<Person></Person> is the same as <Person/>*/}
        <Person/>
      </div>
      
    );
  }
}

export default App;
