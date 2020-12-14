import React, { Component } from "react";
import googleSheet from "./components/contact/googleSheet";
const { Provider, Consumer } = React.createContext();

class GlobalContextProvider extends Component {
  state = {
    submitted: true,
    investmentAddress: "",
    questions: "",
    name: "",
    phoneNumber: "",
    emailAddress: "",
    price: 800000,
    time: 6,
    timeStamp: "",
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

  handleTimeDrag = (event, time) => {
    console.log("Time Drag Working");

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
    return (
      <Provider
        value={{
          name: this.state.name,
          submitted: this.state.submitted,
          price: this.state.price,
          handlePriceDrag: this.handlePriceDrag,
          handleTimeDrag: this.handleTimeDrag,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { GlobalContextProvider, Consumer as GlobalContextConsumer };
