import React, { Component } from "react";
import ColorGradient from "color-gradient";

//EventBus
import Event from "../../config/EventBus";

//Components
import Header from "../../components/header";
import Colors from "../../components/colors";
import Copied from "../../components/copied";

//Style
import "./style.scss";

const colors = ColorGradient("#000", "#fff", 6);

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCopied: false,
      color: "#124"
    };
  }

  componentDidMount() {
    let self = this;

    Event.on("copied", color => {
      self.setState(
        {
          isCopied: true,
          color: color
        },
        () => {
          setTimeout(() => {
            self.setState({
              isCopied: false
            });
          }, 1000);
        }
      );
    });
  }

  render() {
    const { color, isCopied } = this.state;
    return (
      <div className="Home">
        <Header />

        <Colors colors={colors} />

        <Copied color={color} isActive={isCopied} />
      </div>
    );
  }
}

export default Home;
