import React, { Component } from "react";
import ColorGradient from "color-gradient";
import Header from "./components/header";
import Colors from "./components/colors";
import "./App.css";

const colors = ColorGradient("#000", "#fff", 6);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Colors colors={colors} />
      </div>
    );
  }
}

export default App;
