import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup"
import "yup-phone";


const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   maxWidth: "200px"
 }
});

const validationSchema = Yup.object({
  questions: Yup.string("Please ")
  .required("Please type the questions you would like answered."),
  name: Yup.string("Enter a name")
  .required("Name is required"),
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),  
  This: Yup.string("Enter your phone number")
  .phone()
  .required(),
  

})

class InputForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 

 render() {
  
   const classes = this.props;
   const values = { investmentAddress: "", questions: "", name: "", phoneNumber: "", email: ""};

   return (
     <React.Fragment>
          <div className={classes.container}>
         <Paper elevation={1} className={classes.paper}>
           <h1>Form</h1>
           <Formik
             render={props => <Form {...props} />}
             initialValues={values}
             validationSchema={validationSchema}
           />
         </Paper>
       </div>
     </React.Fragment>
   );
 }
}

export default withStyles(styles)(InputForm);
