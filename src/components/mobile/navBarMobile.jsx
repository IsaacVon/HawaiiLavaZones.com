import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// icons
import Icon from "@material-ui/core/Icon";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";

import "../../App.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // position: "fixed",
    // bottom: 10,
    backgroundColor: "white",
    borderRadius: "18px",
    height: "80px",
    zIndex: "100000",
  },
  button: {
    padding: "0px",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const navClassName = () => {
    if (window.location.pathname === "/Search") return "mobileNavSearch";
    if (window.location.pathname === "/") return "mobileNavSearch";
    else return "mobileNav";
  };

  const homeIcon = (
    <Icon>
      <img src="../../assets/home2.svg" alt="homeIcon"/>
    </Icon>
  );


  return (
    <div className={navClassName()}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={homeIcon}
          className={classes.button}
        />
        <BottomNavigationAction
          component={Link}
          to="/Search"
          label="Search"
          icon={<SearchRoundedIcon />}
          className={classes.button}
        />
        <BottomNavigationAction
          component={Link}
          to="/ZoneInformation"
          label="Learn"
          icon={<LibraryBooksRoundedIcon />}
          className={classes.button}
        />

        <BottomNavigationAction
          component={Link}
          to="/Contact"
          label="Contact"
          icon={<PersonRoundedIcon />}
          className={classes.button}
        />
      </BottomNavigation>
    </div>
  );
}

// label="Home"
//               component={Link}
//               to="/"
//               icon={<FilterHdrOutlinedIcon />}
//               {...a11yProps(0)}
//             />
//             <Tab
//               label="Check Address"
//               component={Link}
//               icon={<ImageSearchIcon />}
//               to="/Search"
//               {...a11yProps(1)}
//             />
//             <Tab
//               label="Information"
//               component={Link}
//               icon={<LocalLibraryOutlinedIcon />}
//               to="/ZoneInformation"
//               {...a11yProps(2)}
//             />
//             <Tab
//               label="Contact"
//               component={Link}
//               icon={<ContactPhoneOutlinedIcon />}
//               to="/Contact"
//               {...a11yProps(3)}
