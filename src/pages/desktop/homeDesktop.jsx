import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import bug from "../../assets/bug.png";

const ColorButton = withStyles((theme) => ({
  root: {
    fontSize: "20px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    align: "center",
    height: "62px",
    width: "212px",
    // width: "183px",
    borderRadius: "20px",
    color: "white",
    backgroundColor: "#F89143",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "#E27725",
      boxShadow: "none",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className="desktopHomeContainer">
        <div className="desktopHomeLogoContainer">
          <img className="desktopBugHome" src={bug} alt="HawaiiLavaZone" />
          <div>
            {" "}
            <span
              style={{
                fontWeight: "100",
                fontSize: "28px",
              }}
            >
              HAWAII
            </span>
            <span
              style={{
                fontWeight: "normal",
                fontSize: "28px",
              }}
            >
              LAVA
            </span>
            <span
              style={{
                fontWeight: "100",
                fontSize: "28px",
              }}
            >
              ZONES
            </span>
          </div>
          <div className="desktopIntroContainer">
            The Big Island of Hawaii is divided into Lava Zones. When buying
            property here, the Lava Zone is very important to know.{" "}
          </div>
          <div>
            {" "}
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
              component={Link}
              to="/Search"
            >
              Check Address
            </ColorButton>
          </div>
        </div>
        <div className="navSpacer"></div>
      </div>
    </>
  );
}
