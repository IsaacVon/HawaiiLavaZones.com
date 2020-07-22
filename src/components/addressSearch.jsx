import React, { Component } from "react";
import { getLavaZone } from "../utils/getLavaZone";

class AddressSearch extends Component {
  state = {};

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event)
  }; 

  handleSearch = () => {
    let lavaZone = getLavaZone(this.state.address);
    let lava = lavaZone().then((data) => {
      return data;
    });
    console.log(lava);
  };

  render() {
    return (
      <>
        <input
          name="address"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Enter Address"
        />

        <button onClick={this.handleSearch} id="submit">
          Submit
        </button>
      </>
    );
  }
}

export default AddressSearch;
