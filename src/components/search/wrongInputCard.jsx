import React, { Component } from "react";

class WrongInputCard extends Component {
  render() {
    const { searchAddress } = this.props;

    return <div>{searchAddress} Is not a a Hawaii address,</div>;
  }
}

export default WrongInputCard;
