import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "udps", name: "Masha", age: 25 },
      { id: "dhsl", name: "Barsik", age: 15 },
      { id: "diso", name: "Olga", age: 55 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];

    // const persons = this.state.persons
    // bad practice

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 25 },
        { name: "Barsik", age: 16 },
        { name: "Olga", age: 55 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Hello, home! I am a React App!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
