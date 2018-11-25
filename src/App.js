import React, { Component } from "react";
import Header from "./components/header";
import Colors from "./components/colors";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Colors />
      </div>
    );
  }
}

export default App;
