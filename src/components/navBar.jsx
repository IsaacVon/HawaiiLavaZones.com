import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useMediaQuery } from "@material-ui/core";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import FilterHdrOutlinedIcon from '@material-ui/icons/FilterHdrOutlined';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const currentTab = () => {
  let path = window.location.pathname;
  if (path === "/Search") return 1;
  else if (path === "/ZoneInformation") return 2;
  else if (path === "/Contact") return 3;
  else if (path === "/Submitted") return 3;
  else if (path === "/") return 0;
};

export default function NavBar(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(currentTab); // This choses which one is highlighted

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const tabProps = {
    variant: isSmallScreen ? "scrollable" : "",
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: "green" }}>
      <Paper className={classes.root}>
        <Tabs
          {...tabProps}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" component={Link} to="/" icon={<FilterHdrOutlinedIcon />} {...a11yProps(0)} />
          <Tab
            label="Check Address"
            component={Link}
            icon={<ImageSearchIcon />}
            to="/Search"
            {...a11yProps(1)}
          />
          <Tab
            label="Zone Info"
            component={Link}
            icon={<LocalLibraryOutlinedIcon />}
            to="/ZoneInformation"
            {...a11yProps(2)}
          />
          <Tab
            label="Contact"
            component={Link}
            icon={<ContactPhoneOutlinedIcon />}
            to="/Contact"
            {...a11yProps(3)}
          />
        </Tabs>
      </Paper>
    </Container>
  );
}
