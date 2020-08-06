import React, { Component } from "react";
import googleSheet from "../components/contact/googleSheet";
import InputForm from "../components/contact/formValidation";
import ThankYou from "../components/contact/thankYou";

class Contact extends Component {
  state = {
    submitted: false,
    investmentAddress: "",
    questions: "",
    name: "",
    phoneNumber: "",
    emailAddress: "",
    price: 800000,
    time: 6,
    timeStamp: "",
  };

  



  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (data) => {
    this.setState({
      investmentAddress: data.investmentAddress,
      questions: data.questions,
      name: data.name,
      phoneNumber: data.This,
      emailAddress: data.email,
      submitted: true,
    });
    googleSheet(this.state);
  };

  render() {
    if (this.state.submitted) {
      return <ThankYou name={this.state.name} />;
    } else {
      return (
        <>
          <InputForm
            handleSubmit={this.handleSubmit}
            handlePriceDrag={this.handlePriceDrag}
            handleTimeDrag={this.handleTimeDrag}
          />
        </>
      );
    }
  }
}

export default Contact;
