import React from "react";
import cx from "classnames";

import "./style.scss";

const Copied = ({ color, isActive }) => {
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
};

export default Copied;
