import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import navBug from "../../assets/bug.png";

export default function NavBar(props) {
  return (
    <div className="navContainer">
      <Button
        className="navButton"
        disableTouchRipple
        component={Link}
        to="/Search"
      >
        <p className="navButtonText">Search</p>
      </Button>
      <Button
        className="navButton"
        disableTouchRipple
        component={Link}
        to="/ZoneInformation"
      >
        <p className="navButtonText">Learn</p>
      </Button>
      <div>
        <Button
          className="navButton"
          disableTouchRipple
          component={Link}
          to="/"
        >
          <img className="navBug" src={navBug} alt="HawaiiLavaZones" />
        </Button>
      </div>
      <Button className="navButton" disableTouchRipple component={Link} to="/">
        <p className="navButtonText">
          <span
            style={{
              fontWeight: "200",
            }}
          >
            HAWAII
          </span>
          <span
            style={{
              fontWeight: "normal",
            }}
          >
            LAVA
          </span>
          <span
            style={{
              fontWeight: "200",
            }}
          >
            ZONES
          </span>
        </p>
      </Button>
      <Button
        className="navButton"
        disableTouchRipple
        component={Link}
        to="/Contact"
      >
        <p className="navButtonText">Contact</p>
      </Button>
    </div>
  );
}
