import React, { useEffect, useState } from "react";
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
    end: "#1D7AEE",
  },
  {
    start: "#16a085",
    end: "#f39c12",
  },
  {
    start: "#2980b9",
    end: "#d35400",
  },
  {
    start: "#2980b9",
    end: "#c0392b",
  },
  {
    start: "#2c3e50",
    end: "#ecf0f1",
  },
];

const defaultInputs = {
  ...colors[Math.floor(Math.random() * colors.length)],
  midpoint: 6,
};

const Home = () => {
  const [inputs, setInputs] = useState(defaultInputs);
  const [isCopied, setIsCopied] = useState(false);
  const [color, setColor] = useState("#124124");
  const [colors, setColors] = useState(
    ColorGradient(
      defaultInputs.start,
      defaultInputs.end,
      defaultInputs.midpoint
    )
  );

  useEffect(() => {
    Event.on("copied", (color) => {
      setIsCopied(true);
      setColor(color);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });

    Event.on("colorChanged", (data) => {
      let input = inputs;
      input[data.key] = data.color.hex;

      setInputs(input);
      setColors(ColorGradient(input.start, input.end, input.midpoint));
    });

    Event.on("midpointChanged", (data) => {
      let input = inputs;
      input.midpoint = data.number;

      setInputs(input);
      setColors(ColorGradient(input.start, input.end, input.midpoint));
    });
  }, [inputs]);

  return (
    <div className="Home">
      <Header inputs={inputs} />

      <Colors colors={colors} />

      <Copied color={color} isActive={isCopied} />
    </div>
  );
};

export default Home;
