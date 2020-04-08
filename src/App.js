import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, home! I am a React App!</h1>
        <p>This is really working!</p>
        <Person name="Masha" age="25" />
        <Person name="Barsik" age="15">
          I like sleeping
        </Person>
        <Person name="Olga" age="55" />
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
