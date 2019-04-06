import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:"James", age:23},
      {name:"Jims", age:24},
      {name:"Kims", age:25}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 23},
        { name: 'Jums', age: 24},
        { name: 'Kims', age: 25}
      ]
    })
    console.log('depict press now!')
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Jims', age: 23},
        { name: event.target.value, age: 24},
        { name: 'Kims', age: 25}
      ]
    })

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi!, I'm a React App</h1>
        <p>This is React Tutorial.</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler()}>Switched Person!</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Jimsjums')} 
        changed={this.nameChangedHandler}>My Hobby: Reading</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!, I\'m a React'));
  }
}
export default App;
