import React, { Component } from "react";
import ColorGradient from "color-gradient";
import Header from "../../components/header";
import Colors from "../../components/colors";
import "./style.scss";

const colors = ColorGradient("#000", "#fff", 6);

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />

        <Colors colors={colors} />
      </div>
    );
  }
}

export default Home;
