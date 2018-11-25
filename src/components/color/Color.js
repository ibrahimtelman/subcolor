import React from "react";
import PropTypes from "prop-types";
import ColorX from "color";
import cx from "classnames";
import "./style.scss";

class Color extends React.Component {
  render() {
    const { color_code } = this.props;
    const isDark = ColorX(color_code).isDark();
    return (
      <div
        className={cx("color", { "color--dark": isDark })}
        style={{ backgroundColor: color_code }}
      >
        <span className={"color__code"}>{color_code}</span>
      </div>
    );
  }
}

Color.proptypes = {
  color_code: PropTypes.string
};

Color.defaultProps = {
  color_code: "#124"
};

export default Color;
