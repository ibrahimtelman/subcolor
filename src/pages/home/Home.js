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

const colors = [
  {
    start: "#EE578D",
    end: "#1D7AEE"
  },
  {
    start: "#16a085",
    end: "#f39c12"
  },
  {
    start: "#2980b9",
    end: "#d35400"
  },
  {
    start: "#2980b9",
    end: "#c0392b"
  },
  {
    start: "#2c3e50",
    end: "#ecf0f1"
  }
];

const defaultInputs = {
  ...colors[Math.floor(Math.random() * colors.length)],
  midpoint: 6
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: defaultInputs,
      isCopied: false,
      color: "#124",
      colors: ColorGradient(
        defaultInputs.start,
        defaultInputs.end,
        defaultInputs.midpoint
      )
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

    Event.on("colorChanged", data => {
      let input = self.state.inputs;
      input[data.key] = data.color.hex;

      self.setState({
        inputs: input,
        colors: ColorGradient(input.start, input.end, input.midpoint)
      });
    });

    Event.on("midpointChanged", data => {
      let input = self.state.inputs;
      input.midpoint = data.number;

      self.setState({
        inputs: input,
        colors: ColorGradient(input.start, input.end, input.midpoint)
      });
    });
  }

  render() {
    const { color, isCopied, inputs, colors } = this.state;
    return (
      <div className="Home">
        <Header inputs={inputs} />

        <Colors colors={colors} />

        <Copied color={color} isActive={isCopied} />
      </div>
    );
  }
}

export default Home;
