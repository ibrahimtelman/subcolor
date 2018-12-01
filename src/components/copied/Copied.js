import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./style.scss";
import Color from "../color";

class Copied extends React.Component {
  render() {
    const { color, isActive } = this.props;
    return (
      <div
        className={cx("copied", { active: isActive })}
        style={{ backgroundColor: color }}
      >
        <div className={"copied__text-wrapper"}>
          <span className={"copied__text"}>Copied</span>
        </div>
      </div>
    );
  }
}

Copied.prototypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool
};

Color.defaultProps = {
  color: "#124",
  isActive: false
};

export default Copied;
