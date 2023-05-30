import React from "react";
import ReactDom from "react-dom";
const NavBar = (
  <nav>
    <h1>Bob's Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(NavBar, document.getElementById("root"));
