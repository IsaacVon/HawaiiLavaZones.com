import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PriceSlider from "./priceSlider";
import TimeSlider from "./timeSlider";
import ContactText from "./contactText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";

const useStyles = makeStyles((theme) => ({


  
  root: {
    ":-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px green inset",
      backgroundColor: "green"
    },
    fontWeight: 400,
    flexGrow: 1,
    paddingBottom: 60,
    "& .MuiInput-underline:before": {
      borderBottomColor: "#73CB82", // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#73CB82", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2FBB48", // Solid underline on focus
    },

    "& .MuiSlider-root": {
      color: "#2FBB48", // Solid underline on focus
    },

    "& .MuiFormLabel-root.Mui-focused": {
      color: "white", // Solid underline on focus
    },

    "& .MuiButton-containedPrimary": {
      borderRadius: "20px",
      height: "60px",
      color: "white", // Solid underline on focus
      fontWeight: "400",
      boxShadow: "none",
      backgroundColor: "#F89143",
      "&:hover": {
        backgroundColor: "#E27725",
      },
    },
  },
}));

export const Form = (props) => {
  const classes = useStyles();

  const {
    values: {
      investmentAddress,
      questions,
      name,
      email,
      This, // Phone verification package does now allow custom error messages
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
  } = props;

  const change = (name, event) => {
    event.persist();
    handleChange(event);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12}>
              <ContactText />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="investmentAddress"
                name="investmentAddress"
                helperText={
                  touched.investmentAddress ? errors.investmentAddress : ""
                }
                error={
                  touched.investmentAddress && Boolean(errors.investmentAddress)
                }
                label="Investment Property Address"
                value={investmentAddress}
                onChange={change.bind(null, "investmentAddress")}
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="questions"
                name="questions"
                multiline
                helperText={touched.questions ? errors.questions : ""}
                error={touched.questions && Boolean(errors.questions)}
                label="Questions"
                value={questions}
                onChange={change.bind(null, "questions")}
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <PriceSlider />
            </Grid>
            <Grid item xs={12}>
              <TimeSlider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="name"
                name="name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                label="Name"
                value={name}
                onChange={change.bind(null, "name")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                label="Email"
                value={email}
                onChange={change.bind(null, "email")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="This"
                name="This"
                helperText={touched.This ? errors.This : ""}
                error={touched.This && Boolean(errors.This)}
                label="Phone"
                value={This}
                onChange={change.bind(null, "This")}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={12} md={8}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
                fullWidth
                textPrimary="white"
              >
                Talk to An Expert
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </form>
  );
};
