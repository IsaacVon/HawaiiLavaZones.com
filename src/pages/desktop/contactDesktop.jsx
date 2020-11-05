import React, { Component } from "react";
import InputForm from "../../components/contact/formValidation";
import { GlobalContextConsumer } from "../../globalContext";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="contactContainerDesktop">
        <GlobalContextConsumer>
          {(context) => (
            <InputForm submitted={context.submitted} name={context.name} />
          )}
        </GlobalContextConsumer>
      </div>
    );
  }
}

export default Contact;
