import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "../color-picker";

//EventBus
import Event from "../../config/EventBus";

//style
import "./style.scss";

class Header extends React.Component {
  onColorChange(color, key) {
    Event.emit("colorChanged", { color, key });
  }

  midpointChange(number) {
    Event.emit("midpointChanged", { number });
  }

  render() {
    const { inputs } = this.props;
    return (
      <div className={"header"}>
        <div className={"container"}>
          Starts with{" "}
          <ColorPicker
            color={inputs.start}
            onChange={color => this.onColorChange(color, "start")}
          />{" "}
          finish with{" "}
          <ColorPicker
            color={inputs.end}
            onChange={color => this.onColorChange(color, "end")}
          />{" "}
          and generate{" "}
          <input
            className={"midpoint-field"}
            type="number"
            min="1"
            onChange={number => this.midpointChange(number.target.value)}
            value={inputs.midpoint}
          />{" "}
          colors
        </div>
      </div>
    );
  }
}

Header.proptypes = {
  inputs: PropTypes.object
};

export default Header;
