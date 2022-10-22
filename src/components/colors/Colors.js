import React from "react";
import Color from "../color";
import "./style.scss";

const Colors = ({ colors }) => {
  return (
    <div className={"colors-wrapper"}>
      <div className={"colors"}>
        {colors.map((color, i) => (
          <Color key={i} color_code={color} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
