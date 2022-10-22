import React from "react";
import ColorX from "color";
import cx from "classnames";

import Event from "../../config/EventBus";

import "./style.scss";

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }

  Event.emit("copied", str);
};

const Color = ({ color_code = "#124124" }) => {
  const isDark = ColorX(color_code).isDark();
  const hex = ColorX(color_code).hex();
  return (
    <div
      className={cx("color", { "color--dark": isDark })}
      style={{ backgroundColor: color_code }}
      onClick={() => copyToClipboard(hex)}
    >
      <span className={"color__copy"}>COPY</span>
      <span className={"color__code"}>{hex}</span>
    </div>
  );
};

export default Color;
