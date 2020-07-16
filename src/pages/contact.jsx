import React, { Component } from "react";
import UserForm from "../components/userInformationForm";

class Contact extends Component {
  state = {
    step: 1,
    address: "",
    questions: "",
    name: "",
    phoneNumber: "",
    emailAddress: "",
  };

  handleChange = () => {
    // Connect to database later
    console.log("handleChange Worked! ");
  };

  render() {
    return (
      <>
        <UserForm
          step={this.state.step}
          address={this.state.address}
          questions={this.state.questions}
          name={this.state.name}
          phoneNumber={this.state.phoneNumber}
          emailAddress={this.state.emailAddress}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default Contact;
