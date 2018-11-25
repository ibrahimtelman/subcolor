import React from "react";
import Color from "../color";
import "./style.scss";

class Colors extends React.Component {
  render() {
    return (
      <div className={"colors"}>
        <Color color_code={"#342"} />
        <Color color_code={"#c7667c"} />
        <Color />
      </div>
    );
  }
}

export default Colors;
