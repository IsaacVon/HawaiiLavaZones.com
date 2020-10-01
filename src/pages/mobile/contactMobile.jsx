import React, { Component } from "react";
import InputForm from "../../components/contact/formValidation";
import { GlobalContextConsumer } from "../../globalContext";
import NavBarMobile from "../../components/mobile/navBarMobile";

class Contact extends Component {
  render() {
    return (
      <>
        <GlobalContextConsumer>
          {(context) => (
            <InputForm submitted={context.submitted} name={context.name} />
          )}
        </GlobalContextConsumer>
      </>
    );
  }
}

export default Contact;
