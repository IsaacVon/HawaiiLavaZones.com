import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};

  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems,);
    });
  }

  render() {
    return (
      <>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href="/LavaZoneInformation">Lava Zone Information</a>
          </li>
          <Link to="/LavaZoneInformation">
          <li>
            <a>link</a>
          </li>
          </Link>
          <li class="divider"></li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <nav>
          <div class="nav-wrapper #b2ebf2 cyan lighten-4">    
     
            <a href="/" class="brand-logo">
              Logo
            </a>
  
            <ul class="right hide-on-med-and-down">
              <li>
                <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                  More<i class="material-icons right">arrow_drop_down</i>
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
