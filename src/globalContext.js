import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class GlobalContextProvider extends Component {
  state = {
    price: 800000,
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

  render() {
    return (
      <Provider
        value={{
          price: this.state.price,
          handlePriceDrag: this.handlePriceDrag,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { GlobalContextProvider, Consumer as GlobalContextConsumer };
