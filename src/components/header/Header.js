import React from "react";
import ColorPicker from "../color-picker";

//EventBus
import Event from "../../config/EventBus";

//style
import "./style.scss";

const Header = ({ inputs }) => {
  const onColorChange = (color, key) => {
    Event.emit("colorChanged", { color, key });
  };

  const midpointChange = (number) => {
    Event.emit("midpointChanged", { number });
  };

  return (
    <div className={"header"}>
      <div className={"container"}>
        From
        <ColorPicker
          color={inputs.start}
          onChange={(color) => onColorChange(color, "start")}
        />
        to
        <ColorPicker
          color={inputs.end}
          onChange={(color) => onColorChange(color, "end")}
        />
        generate
        <input
          className={"midpoint-field"}
          type="number"
          min="1"
          onChange={(number) => midpointChange(number.target.value)}
          value={inputs.midpoint}
        />{" "}
        colors
      </div>
    </div>
  );
};

export default Header;
