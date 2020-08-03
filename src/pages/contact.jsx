import React, { Component } from "react";
import UserInformationForm from "../components/contact/userInformationForm";
import googleSheet from "../components/contact/googleSheet"
import InputForm from "../components/InputForm/index"

class Contact extends Component {
  state = {
    step: 1,
    investmentAddress: "",
    questions: "",
    name: "",
    phoneNumber: "",
    emailAddress: "",
    price: 800000,
    time: 6,
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

  validateState = () => {
    // TBD hopyfully can use yup
    let validated = true
    return validated
  }

  handleSubmit = () => {
        googleSheet(this.state);   
  };

  render() {
    return (
      <>
        <InputForm />
        <UserInformationForm
          step={this.state.step}
          address={this.state.address}
          questions={this.state.questions}
          name={this.state.name}
          phoneNumber={this.state.phoneNumber}
          emailAddress={this.state.emailAddress}
          handlePriceDrag={this.handlePriceDrag}
          handleTimeDrag={this.handleTimeDrag}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default Contact;
