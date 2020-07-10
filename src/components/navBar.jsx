import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/LavaZoneInformation">
          <li>Lava Zone Information</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
