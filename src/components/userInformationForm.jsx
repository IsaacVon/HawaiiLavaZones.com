import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PriceSlider from "./priceSlider";
import TimeSlider from "./timeSlider";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// Need to make this a "class Contact extends Component"
export default function SignIn(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Questions?
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            name="address"
            onChange={props.handleChange}
            fullWidth
            label="Property Address"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="questions"
            onChange={props.handleChange}
            fullWidth
            id="question"
            label="Questions"
          />
          <PriceSlider handlePriceDrag={props.handlePriceDrag} />
          <TimeSlider handleTimeDrag={props.handleTimeDrag} />
          <TextField
            variant="outlined"
            margin="normal"
            name="name"
            onChange={props.handleChange}
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="phoneNumber"
            onChange={props.handleChange}
            required
            fullWidth
            id="tel"
            label="Phone Number"
            autoComplete="tel"
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="emailAddress"
            onChange={props.handleChange}
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
          />

          <Button
            onClick={props.handleSubmit}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Talk to an expert
          </Button>
        </form>
      </div>
    </Container>
  );
}
