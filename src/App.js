import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, home! I am a React App!</h1>
        <p>This is really working!</p>
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
