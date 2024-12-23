import React from "react";
import "./Main.css";

function main({ children }) {
  return <div className="main"> {...children}</div>;
}

export default main;
