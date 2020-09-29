import React, { Component } from "react";
import InputForm from "../../components/contact/formValidation";
import { GlobalContextConsumer } from "../../globalContext";

class Contact extends Component {
  state = {};

  render() {
    return (
      <GlobalContextConsumer>
        {(context) => (
          <InputForm submitted={context.submitted} name={context.name} />
        )}
      </GlobalContextConsumer>
    );
  }
}

export default Contact;
