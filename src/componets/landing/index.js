import React, { Component } from "react";
import "./style.css";
import logo from "./logo.svg";
import Navbar from "./navbar";

class SVG extends Component {render() {
  return (
    <div className="SVG">
      <Navbar />
      <header className="SVG-header">
        <a href="https://github.com/marcuswhitmore"><img src={logo} className="SVG-logo" alt="logo" /></a>
        <span> Marcus Whitmore</span>
        
      </header>
    </div>
  );
}
}

export default SVG;