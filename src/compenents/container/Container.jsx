import React from "react";
import "./container.css";

function Container({ children }) {
  return <div className="main"> {...children}</div>;
}

export default Container;
