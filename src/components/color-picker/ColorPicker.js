import React from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";

//style
import "./style.scss";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPicker: false
    };
  }

  handleClick() {
    this.setState({
      displayPicker: true
    });
  }

  handleClose() {
    this.setState({
      displayPicker: false
    });
  }

  render() {
    const { color, onChange } = this.props;
    const { displayPicker } = this.state;
    return (
      <div className={"color-picker"}>
        <div
          className="color-picker__input"
          style={{ backgroundColor: color }}
          onClick={() => this.handleClick()}
        />
        {displayPicker && (
          <div className={"picker-wrapper"}>
            <div
              className={"picker-handler"}
              onClick={() => this.handleClose()}
            />
            <SketchPicker color={color} onChange={onChange} />
          </div>
        )}
      </div>
    );
  }
}

ColorPicker.proptypes = {
  color: PropTypes.string,
  onChange: PropTypes.func
};

ColorPicker.defaultProps = {
  color: "#124"
};

export default ColorPicker;
