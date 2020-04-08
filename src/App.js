import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Masha", age: 25 },
      { name: "Barsik", age: 15 },
      { name: "Olga", age: 55 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = () => {
    // console.log("Was clicked");
    // DON'T DO LIKE THIS this.state.persons[0].name = "Maria";
    this.setState({
      persons: [
        { name: "Maria", age: 25 },
        { name: "Barsik", age: 16 },
        { name: "Olga", age: 55 },
      ],
    });
  };

  return (
    <div className="App">
      <h1> Hello, home! I am a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        I like sleeping
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Does this work now?")
  // );
};

export default app;
