import React, { Component } from "react";
import googleSheet from "../components/contact/googleSheet";
import InputForm from "../components/contact/formValidation";
import SelectInput from "@material-ui/core/Select/SelectInput";
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

  handleTimeDrag = (event, time) => {
    if (time === 20) {
      this.setState({ time: null });
    } else if (time === 30) {
      this.setState({ time: 18 });
    } else if (time === 40) {
      this.setState({ time: 12 });
    } else if (time === 50) {
      this.setState({ time: 9 });
    } else if (time === 60 || time === "") {
      this.setState({ time: 6 });
    } else if (time === 70) {
      this.setState({ time: 4 });
    } else if (time === 80) {
      this.setState({ time: 3 });
    } else if (time === 90) {
      this.setState({ time: 2 });
    } else if (time === 100) {
      this.setState({ time: 0 });
    }
  };

  handlePriceDrag = (event, price) => {
    console.log("Price Drag Working");
    this.setState({ price });
    if (price === 20) {
      this.setState({ price: 200000 });
    } else if (price === 30) {
      this.setState({ price: 300000 });
    } else if (price === 40) {
      this.setState({ price: 400000 });
    } else if (price === 50) {
      this.setState({ price: 600000 });
    } else if (price === 60) {
      this.setState({ price: 800000 });
    } else if (price === 70) {
      this.setState({ price: 1100000 });
    } else if (price === 80) {
      this.setState({ price: 1500000 });
    } else if (price === 90) {
      this.setState({ price: 2200000 });
    } else if (price === 100) {
      this.setState({ price: 3000000 });
    }
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
