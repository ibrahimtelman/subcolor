import React from "react";
import PropTypes from "prop-types";
import Color from "../color";
import "./style.scss";

class Colors extends React.Component {
  render() {
    const { colors } = this.props;
    return (
      <div className={"colors-wrapper"}>
        <div className={"colors"}>
          {colors.map(color => (
            <Color color_code={color} />
          ))}
        </div>
      </div>
    );
  }
}

Colors.prototypes = {
  colors: PropTypes.array
};

export default Colors;
