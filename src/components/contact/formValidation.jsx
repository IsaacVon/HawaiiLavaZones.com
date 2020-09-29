import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./formLayout";
import * as Yup from "yup";
import "yup-phone";
import { GlobalContextConsumer } from "../../globalContext";
import ThankYou from "../contact/thankYou";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${
      theme.spacing(5)
    }px`,
  },
  container: {
    maxWidth: "200px",
  },
});

const validationSchema = Yup.object({
  questions: Yup.string("Please ").required(
    "Please type the questions you would like answered."
  ),
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  This: Yup.string("Enter your phone number").phone().required(),
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const values = {
      investmentAddress: "",
      questions: "",
      name: "",
      This: "",
      email: "",
    };
    if (this.props.submitted) {
      return <ThankYou name={this.props.name} />;
    } else {
      return (
        <React.Fragment>
          <GlobalContextConsumer>
            {(context) => (
              <Formik
                render={(props) => <Form {...props} />}
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={context.handleSubmit}
              />
            )}
          </GlobalContextConsumer>
        </React.Fragment>
      );
    }
  }
}

export default withStyles(styles)(InputForm);
