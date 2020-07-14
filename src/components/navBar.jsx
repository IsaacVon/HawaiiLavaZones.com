import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Nav extends Component {
  state = {};

  componentDidMount() {
    console.log("nav mounted");
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems,);
    });
  }

  render() {
    return (
      <>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="/LavaZoneInformation">Lava Zone Information</a>
          </li>
          <Link to="/LavaZoneInformation">
          <li>
            React Router
          </li>
          </Link>
          <li className="divider"></li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper #b2ebf2 cyan lighten-4">    
     
            <a href="/" className="brand-logo">
              Logo
            </a>
  
            <ul className="right hide-on-med-and-down">
              <li>
                <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                  More<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
