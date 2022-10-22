import React, { useState } from "react";
import { SketchPicker } from "react-color";

//style
import "./style.scss";

const ColorPicker = ({ color, onChange }) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  return (
    <div className={"color-picker"}>
      <div
        className="color-picker__input"
        style={{ backgroundColor: color }}
        onClick={() => setDisplayPicker(true)}
      />
      {displayPicker && (
        <div className={"picker-wrapper"}>
          <div
            className={"picker-handler"}
            onClick={() => setDisplayPicker(false)}
          />
          <SketchPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
