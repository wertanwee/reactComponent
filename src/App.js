import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name:"James", age:23},
      { id: 'vdsf1', name:"Jims", age:24},
      { id: 'sadf1', name:"Kims", age:25}
    ],
    showPersons: false
  }
  // switchNameHandler = (newName) => {
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 23},
  //       { name: 'Jums', age: 24},
  //       { name: 'Kims', age: 25}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[]personIndex)

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id} 
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              })}
            </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi!, I'm a React App</h1>
        <p>This is React Tutorial.</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switched Person!</button>
        {persons}
      </div>
    );
  }
}
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!, I\'m a React'));
export default App;
