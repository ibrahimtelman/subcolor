import React from "react";
import "./style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fisrtColor: "#000",
      lastColor: "#fff"
    };
  }

  render() {
    return (
      <div className={"header"}>
        <div className={"left-bar"}>Project Title</div>
      </div>
    );
  }
}

export default Header;
