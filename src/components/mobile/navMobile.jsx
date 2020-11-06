import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import navBug from "../../assets/bug.png";

export default function NavMobile(props) {
  return (
    <div className="navContainerMobile">
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
