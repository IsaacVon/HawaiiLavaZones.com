import React, { Component } from "react";
import InputForm from "../components/contact/formValidation";
import ThankYou from "../components/contact/thankYou";

class Contact extends Component {
  state = {
  };


  render() {

    
    if (this.state.submitted) {
      return <ThankYou name={this.state.name} />;
    } else {
      return (
        <>
          <InputForm
          />
        </>
      );
    }
  }
}

export default Contact;
