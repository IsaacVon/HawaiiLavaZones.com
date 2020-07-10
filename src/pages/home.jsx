import React, { Component } from "react";
import AddressSearch from "../components/addressSearch"

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Home</h1>
        <AddressSearch />
      </>
    );
  }
}

export default Home;
