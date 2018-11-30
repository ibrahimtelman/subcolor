import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
