import React, { Component } from "react";
import Container from "@material-ui/core/Container";

class ThankYou extends Component {
  render() {
    const name = this.props.name.split(" ");
    const firstname = name[0];

    return (
      <Container
        maxWidth="sm"
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      >
        Thank you {firstname}, A real estate expert from our team will reach out
        to you shortly. We look forward to helping you!
      </Container>
    );
  }
}

export default ThankYou;
