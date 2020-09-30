import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";



import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "../../App.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // position: "fixed",
    // bottom: 10,
    backgroundColor: "white",
    borderRadius: "18px",
    height: "80px",
    zIndex: "100000"
  },
  button: {
    padding: "0px"
    
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
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
        icon={<RestoreIcon />}
        className={classes.button}

      />
      <BottomNavigationAction
        component={Link}
        to="/Search"
        label="Search"
        icon={<FavoriteIcon />}
        className={classes.button}
      />
      <BottomNavigationAction
        component={Link}
        to="/ZoneInformation"
        label="Information"
        icon={<LocationOnIcon />}
        className={classes.button}
      />   
      
      <BottomNavigationAction
        component={Link}
        to="/Contact"
        label="Contact"
        icon={<LocationOnIcon />}
        className={classes.button}
      />
    </BottomNavigation>
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
